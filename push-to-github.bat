@echo off
echo ========================================
echo   Codewars GitHub Push Helper
echo ========================================
echo.
echo This script will:
echo 1. Organize folders for GitHub (max 1000 files per folder)
echo 2. Add all changes to git
echo 3. Commit with your message
echo 4. Push to GitHub
echo 5. Restore original flat structure
echo.

set /p commit_message="Enter commit message: "
if "%commit_message%"=="" (
    echo Error: Commit message cannot be empty
    pause
    exit /b 1
)

echo.
echo Step 1: Organizing folders for GitHub...
powershell -ExecutionPolicy Bypass -File "%~dp0organize-for-github.ps1"
if errorlevel 1 (
    echo Error: Failed to organize folders
    pause
    exit /b 1
)

echo.
echo Step 2: Adding changes to git...
git add .
if errorlevel 1 (
    echo Error: Failed to add changes to git
    pause
    exit /b 1
)

echo.
echo Step 3: Committing changes...
git commit -m "%commit_message%"
if errorlevel 1 (
    echo Error: Failed to commit changes
    pause
    exit /b 1
)

echo.
echo Step 4: Pushing to GitHub...
git push
if errorlevel 1 (
    echo Error: Failed to push to GitHub
    pause
    exit /b 1
)

echo.
echo Step 5: Restoring original flat structure...
powershell -ExecutionPolicy Bypass -File "%~dp0restore-flat-structure.ps1"
if errorlevel 1 (
    echo Error: Failed to restore original structure
    pause
    exit /b 1
)

echo.
echo ========================================
echo SUCCESS! Changes pushed to GitHub
echo ========================================
echo Your local folder structure has been restored to the original flat format.
echo GitHub now has the organized subfolder structure.
echo.
pause
