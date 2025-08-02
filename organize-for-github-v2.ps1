# PowerShell script to organize folders with too many files into subfolders
# This script should be run before pushing to GitHub

param(
    [int]$MaxFilesPerFolder = 1000,
    [string]$RootPath = $PSScriptRoot
)

Write-Host "Starting GitHub organization script..." -ForegroundColor Green
Write-Host "Root path: $RootPath" -ForegroundColor Yellow
Write-Host "Max files per folder: $MaxFilesPerFolder" -ForegroundColor Yellow

# Function to organize files in a folder into subfolders
function Split-LargeFolder {
    param(
        [string]$FolderPath,
        [int]$MaxFiles
    )
    
    $folderName = Split-Path $FolderPath -Leaf
    Write-Host "Checking folder: $folderName" -ForegroundColor Cyan
    
    # Get all .js files in the folder (not in subfolders)
    $files = Get-ChildItem -Path $FolderPath -Filter "*.js" -File | Where-Object { $_.Directory.Name -eq $folderName }
    $fileCount = $files.Count
    
    Write-Host "  Found $fileCount files" -ForegroundColor White
    
    if ($fileCount -le $MaxFiles) {
        Write-Host "  ✓ Folder is within limits, no organization needed" -ForegroundColor Green
        return
    }
    
    Write-Host "  ⚠ Folder exceeds limit ($fileCount > $MaxFiles), organizing..." -ForegroundColor Yellow
    
    # Sort files alphabetically
    $sortedFiles = $files | Sort-Object Name
    
    # Calculate how many subfolders we need
    $subfoldersNeeded = [Math]::Ceiling($fileCount / $MaxFiles)
    Write-Host "  Creating $subfoldersNeeded subfolders" -ForegroundColor White
    
    # Create subfolders and move files
    for ($i = 0; $i -lt $subfoldersNeeded; $i++) {
        $startIndex = $i * $MaxFiles
        $endIndex = [Math]::Min(($i + 1) * $MaxFiles - 1, $fileCount - 1)
        
        # Determine subfolder name based on first and last file
        $firstFile = $sortedFiles[$startIndex].BaseName
        $lastFile = $sortedFiles[$endIndex].BaseName
        
        # Get first letter/character for naming
        $firstChar = $firstFile.Substring(0, 1).ToUpper()
        $lastChar = $lastFile.Substring(0, 1).ToUpper()
        
        # Create meaningful subfolder name
        if ($firstChar -eq $lastChar) {
            $subfolderName = "$firstChar"
        } else {
            $subfolderName = "$firstChar-$lastChar"
        }
        
        # Handle special characters
        $subfolderName = $subfolderName -replace '[^\w-]', '_'
        
        # If name conflict, add number
        $originalName = $subfolderName
        $counter = 1
        while (Test-Path (Join-Path $FolderPath $subfolderName)) {
            $subfolderName = "$originalName-$counter"
            $counter++
        }
        
        $subfolderPath = Join-Path $FolderPath $subfolderName
        New-Item -ItemType Directory -Path $subfolderPath -Force | Out-Null
        
        Write-Host "  📁 Created subfolder: $subfolderName" -ForegroundColor Magenta
        
        # Move files to subfolder
        for ($j = $startIndex; $j -le $endIndex; $j++) {
            $file = $sortedFiles[$j]
            $newPath = Join-Path $subfolderPath $file.Name
            Move-Item -Path $file.FullName -Destination $newPath
        }
        
        $filesInSubfolder = $endIndex - $startIndex + 1
        Write-Host "  ✓ Moved $filesInSubfolder files to $subfolderName" -ForegroundColor Green
    }
}

# Function to restore original structure (undo organization)
function Restore-FlatStructure {
    param(
        [string]$FolderPath
    )
    
    $folderName = Split-Path $FolderPath -Leaf
    Write-Host "Restoring original structure for: $folderName" -ForegroundColor Yellow
    
    # Get all subfolders
    $subfolders = Get-ChildItem -Path $FolderPath -Directory
    
    foreach ($subfolder in $subfolders) {
        # Move all .js files from subfolder back to parent
        $jsFiles = Get-ChildItem -Path $subfolder.FullName -Filter "*.js" -File
        foreach ($file in $jsFiles) {
            $newPath = Join-Path $FolderPath $file.Name
            # Handle name conflicts
            $counter = 1
            while (Test-Path $newPath) {
                $baseName = [System.IO.Path]::GetFileNameWithoutExtension($file.Name)
                $extension = [System.IO.Path]::GetExtension($file.Name)
                $newPath = Join-Path $FolderPath "$baseName-$counter$extension"
                $counter++
            }
            Move-Item -Path $file.FullName -Destination $newPath
        }
        
        # Remove empty subfolder
        if ((Get-ChildItem -Path $subfolder.FullName).Count -eq 0) {
            Remove-Item -Path $subfolder.FullName -Force
            Write-Host "  ✓ Removed empty subfolder: $($subfolder.Name)" -ForegroundColor Green
        }
    }
}

# Main execution
try {
    # Get all kyu folders (folders that end with 'kyu')
    $kyuFolders = Get-ChildItem -Path $RootPath -Directory | Where-Object { $_.Name -match '\d+kyu$' }
    
    Write-Host "`nFound $($kyuFolders.Count) kyu folders to check:" -ForegroundColor Cyan
    foreach ($folder in $kyuFolders) {
        Write-Host "  - $($folder.Name)" -ForegroundColor White
    }
    
    # Check if we should restore first (in case script was run before)
    Write-Host "`nChecking if restoration is needed..." -ForegroundColor Yellow
    foreach ($folder in $kyuFolders) {
        $hasSubfolders = (Get-ChildItem -Path $folder.FullName -Directory).Count -gt 0
        if ($hasSubfolders) {
            Write-Host "Found existing subfolders in $($folder.Name), restoring original structure first..." -ForegroundColor Yellow
            Restore-FlatStructure -FolderPath $folder.FullName
        }
    }
    
    Write-Host "`nOrganizing folders for GitHub..." -ForegroundColor Green
    
    # Organize each kyu folder
    foreach ($folder in $kyuFolders) {
        Split-LargeFolder -FolderPath $folder.FullName -MaxFiles $MaxFilesPerFolder
    }
    
    Write-Host "`n✅ Organization complete! Your repository is now ready for GitHub." -ForegroundColor Green
    Write-Host "You can now safely push to GitHub." -ForegroundColor Green
    Write-Host "`nTo restore the original flat structure after pushing, run:" -ForegroundColor Yellow
    Write-Host "  .\restore-flat-structure.ps1" -ForegroundColor White
    
} catch {
    Write-Error "An error occurred: $($_.Exception.Message)"
    exit 1
}
