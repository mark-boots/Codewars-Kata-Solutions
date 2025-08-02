# PowerShell script to restore original flat folder structure
# Run this after pushing to GitHub if you want to go back to the flat structure

param(
    [string]$RootPath = $PSScriptRoot
)

Write-Host "Restoring original folder structure..."
Write-Host "Root path: $RootPath"

# Function to restore original structure (undo organization)
function Restore-FolderStructure {
    param(
        [string]$FolderPath
    )
    
    $folderName = Split-Path $FolderPath -Leaf
    Write-Host "Restoring: $folderName"
    
    # Get all subfolders
    $subfolders = Get-ChildItem -Path $FolderPath -Directory
    
    if ($subfolders.Count -eq 0) {
        Write-Host "  OK: No subfolders found, already in flat structure"
        return
    }
    
    $totalMoved = 0
    
    foreach ($subfolder in $subfolders) {
        Write-Host "  Processing subfolder: $($subfolder.Name)"
        
        # Move all .js files from subfolder back to parent
        $jsFiles = Get-ChildItem -Path $subfolder.FullName -Filter "*.js" -File
        
        foreach ($file in $jsFiles) {
            $newPath = Join-Path $FolderPath $file.Name
            
            # Handle name conflicts by adding a number suffix
            $counter = 1
            while (Test-Path -LiteralPath $newPath) {
                $baseName = [System.IO.Path]::GetFileNameWithoutExtension($file.Name)
                $extension = [System.IO.Path]::GetExtension($file.Name)
                $newPath = Join-Path $FolderPath "$baseName-$counter$extension"
                $counter++
            }
            
            # Use -LiteralPath to handle special characters like square brackets
            Move-Item -LiteralPath $file.FullName -Destination $newPath
            $totalMoved++
        }
        
        # Remove empty subfolder
        if ((Get-ChildItem -Path $subfolder.FullName).Count -eq 0) {
            Remove-Item -Path $subfolder.FullName -Force
            Write-Host "  SUCCESS: Removed empty subfolder: $($subfolder.Name)"
        } else {
            Write-Host "  WARNING: Subfolder $($subfolder.Name) not empty, keeping it"
        }
    }
    
    Write-Host "  SUCCESS: Moved $totalMoved files back to $folderName"
}

try {
    # Get all kyu folders
    $kyuFolders = Get-ChildItem -Path $RootPath -Directory | Where-Object { $_.Name -match '\d+kyu$' }
    
    Write-Host ""
    Write-Host "Found $($kyuFolders.Count) kyu folders to restore:"
    foreach ($folder in $kyuFolders) {
        Write-Host "  - $($folder.Name)"
    }
    
    Write-Host ""
    
    # Restore each kyu folder
    foreach ($folder in $kyuFolders) {
        Restore-FolderStructure -FolderPath $folder.FullName
    }
    
    Write-Host ""
    Write-Host "Restoration complete! All files are back in flat folder structure."
    
} catch {
    Write-Error "An error occurred: $($_.Exception.Message)"
    exit 1
}
