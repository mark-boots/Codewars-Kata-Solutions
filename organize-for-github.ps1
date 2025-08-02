# PowerShell script to organize folders with too many files into subfolders
# This script should be run before pushing to GitHub

param(
    [int]$MaxFilesPerFolder = 1000,
    [string]$RootPath = $PSScriptRoot
)

Write-Host "Starting GitHub organization script..."
Write-Host "Root path: $RootPath"
Write-Host "Max files per folder: $MaxFilesPerFolder"

# Function to organize files in a folder into subfolders
function Organize-Folder {
    param(
        [string]$FolderPath,
        [int]$MaxFiles
    )
    
    $folderName = Split-Path $FolderPath -Leaf
    Write-Host "Checking folder: $folderName"
    
    # Get all .js files in the folder root only (not in subfolders)
    $files = Get-ChildItem -Path $FolderPath -Filter "*.js" -File -Depth 0
    $fileCount = $files.Count
    
    Write-Host "  Found $fileCount files"
    
    if ($fileCount -le $MaxFiles) {
        Write-Host "  OK: Folder is within limits, no organization needed"
        return
    }
    
    Write-Host "  WARNING: Folder exceeds limit ($fileCount > $MaxFiles), organizing..."
    
    # Sort files alphabetically
    $sortedFiles = $files | Sort-Object Name
    
    # Calculate how many subfolders we need
    $subfoldersNeeded = [Math]::Ceiling($fileCount / $MaxFiles)
    Write-Host "  Creating $subfoldersNeeded subfolders"
    
    # Create subfolders and move files
    for ($i = 0; $i -lt $subfoldersNeeded; $i++) {
        $startIndex = $i * $MaxFiles
        $endIndex = [Math]::Min(($i + 1) * $MaxFiles - 1, $fileCount - 1)
        
        # Create simple subfolder name
        $partNumber = $i + 1
        $subfolderName = "part$partNumber"
        
        # If name conflict, add number suffix
        $originalName = $subfolderName
        $counter = 1
        while (Test-Path (Join-Path $FolderPath $subfolderName)) {
            $subfolderName = "$originalName-$counter"
            $counter++
        }
        
        $subfolderPath = Join-Path $FolderPath $subfolderName
        New-Item -ItemType Directory -Path $subfolderPath -Force | Out-Null
        
        Write-Host "  CREATED subfolder: $subfolderName"
        
        # Move files to subfolder
        for ($j = $startIndex; $j -le $endIndex; $j++) {
            $file = $sortedFiles[$j]
            $newPath = Join-Path $subfolderPath $file.Name
            # Use -LiteralPath to handle special characters like square brackets
            Move-Item -LiteralPath $file.FullName -Destination $newPath
        }
        
        $filesInSubfolder = $endIndex - $startIndex + 1
        Write-Host "  SUCCESS: Moved $filesInSubfolder files to $subfolderName"
    }
}

# Function to restore original structure (undo organization)
function Restore-OriginalStructure {
    param(
        [string]$FolderPath
    )
    
    $folderName = Split-Path $FolderPath -Leaf
    Write-Host "Restoring original structure for: $folderName"
    
    # Get all subfolders
    $subfolders = Get-ChildItem -Path $FolderPath -Directory
    
    foreach ($subfolder in $subfolders) {
        # Move all .js files from subfolder back to parent
        $jsFiles = Get-ChildItem -Path $subfolder.FullName -Filter "*.js" -File
        foreach ($file in $jsFiles) {
            $newPath = Join-Path $FolderPath $file.Name
            # Handle name conflicts
            $counter = 1
            while (Test-Path -LiteralPath $newPath) {
                $baseName = [System.IO.Path]::GetFileNameWithoutExtension($file.Name)
                $extension = [System.IO.Path]::GetExtension($file.Name)
                $newPath = Join-Path $FolderPath "$baseName-$counter$extension"
                $counter++
            }
            # Use -LiteralPath to handle special characters like square brackets
            Move-Item -LiteralPath $file.FullName -Destination $newPath
        }
        
        # Remove empty subfolder
        if ((Get-ChildItem -Path $subfolder.FullName).Count -eq 0) {
            Remove-Item -Path $subfolder.FullName -Force
            Write-Host "  SUCCESS: Removed empty subfolder: $($subfolder.Name)"
        }
    }
}

# Main execution
try {
    # Get all kyu folders (folders that end with 'kyu')
    $kyuFolders = Get-ChildItem -Path $RootPath -Directory | Where-Object { $_.Name -match '\d+kyu$' }
    
    Write-Host ""
    Write-Host "Found $($kyuFolders.Count) kyu folders to check:"
    foreach ($folder in $kyuFolders) {
        Write-Host "  - $($folder.Name)"
    }
    
    # Check if we should restore first (in case script was run before)
    Write-Host ""
    Write-Host "Checking if restoration is needed..."
    foreach ($folder in $kyuFolders) {
        $hasSubfolders = (Get-ChildItem -Path $folder.FullName -Directory).Count -gt 0
        if ($hasSubfolders) {
            Write-Host "Found existing subfolders in $($folder.Name), restoring original structure first..."
            Restore-OriginalStructure -FolderPath $folder.FullName
        }
    }
    
    Write-Host ""
    Write-Host "Organizing folders for GitHub..."
    
    # Organize each kyu folder
    foreach ($folder in $kyuFolders) {
        Organize-Folder -FolderPath $folder.FullName -MaxFiles $MaxFilesPerFolder
    }
    
    Write-Host ""
    Write-Host "Organization complete! Your repository is now ready for GitHub."
    Write-Host "You can now safely push to GitHub."
    Write-Host ""
    Write-Host "To restore the original flat structure after pushing, run:"
    Write-Host "  .\restore-flat-structure.ps1"
    
} catch {
    Write-Error "An error occurred: $($_.Exception.Message)"
    exit 1
}
