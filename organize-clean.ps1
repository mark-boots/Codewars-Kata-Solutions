# Simple PowerShell script to organize folders with too many files
param(
    [int]$MaxFiles = 1000
)

$ErrorActionPreference = "Stop"

Write-Host "Starting GitHub organization..." -ForegroundColor Green

# Get kyu folders
$kyuFolders = Get-ChildItem -Directory | Where-Object { $_.Name -match '\d+kyu$' }

foreach ($folder in $kyuFolders) {
    Write-Host "Processing $($folder.Name)..." -ForegroundColor Cyan
    
    # Count JS files directly in folder
    $jsFiles = Get-ChildItem -Path $folder.FullName -Filter "*.js" -File | Where-Object { 
        $_.Directory.Name -eq $folder.Name 
    }
    
    $fileCount = $jsFiles.Count
    Write-Host "  Found $fileCount JS files" -ForegroundColor White
    
    if ($fileCount -le $MaxFiles) {
        Write-Host "  OK: Within limit, skipping" -ForegroundColor Green
        continue
    }
    
    Write-Host "  WARNING: Over limit ($fileCount > $MaxFiles), organizing..." -ForegroundColor Yellow
    
    # Sort files and calculate subfolders needed
    $sortedFiles = $jsFiles | Sort-Object Name
    $subfoldersNeeded = [Math]::Ceiling($fileCount / $MaxFiles)
    
    for ($i = 0; $i -lt $subfoldersNeeded; $i++) {
        $startIdx = $i * $MaxFiles
        $endIdx = [Math]::Min(($startIdx + $MaxFiles - 1), ($fileCount - 1))
        
        # Create subfolder name
        $firstFile = $sortedFiles[$startIdx].BaseName.Substring(0, 1).ToUpper()
        $lastFile = $sortedFiles[$endIdx].BaseName.Substring(0, 1).ToUpper()
        
        if ($firstFile -eq $lastFile) {
            $subfolderName = $firstFile
        } else {
            $subfolderName = "$firstFile-$lastFile"
        }
        
        # Handle conflicts
        $counter = 1
        $originalName = $subfolderName
        while (Test-Path (Join-Path $folder.FullName $subfolderName)) {
            $subfolderName = "$originalName-$counter"
            $counter++
        }
        
        # Create subfolder
        $subfolderPath = Join-Path $folder.FullName $subfolderName
        New-Item -ItemType Directory -Path $subfolderPath -Force | Out-Null
        Write-Host "  CREATED: $subfolderName" -ForegroundColor Magenta
        
        # Move files
        for ($j = $startIdx; $j -le $endIdx; $j++) {
            $file = $sortedFiles[$j]
            $destination = Join-Path $subfolderPath $file.Name
            Move-Item -Path $file.FullName -Destination $destination
        }
        
        $movedCount = $endIdx - $startIdx + 1
        Write-Host "  SUCCESS: Moved $movedCount files to $subfolderName" -ForegroundColor Green
    }
}

Write-Host ""
Write-Host "Organization complete!" -ForegroundColor Green
