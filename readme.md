![alt rank](https://www.codewars.com/users/mark-boots/badges/large)

###### Codewarriors are strongly encouraged not to look at my solutions to Kata until you have completed it yourselves or at least took the time to think about your own approaches

###### Codewarriors should not submit my solutions as their own

###### I will not be accepting contributions of any form to this repo

###### Creating a repository like this is discouraged by Codewars

## GitHub Organization Scripts

Due to GitHub's practical limit of 1000 files per folder, this repository includes scripts to automatically organize large folders into subfolders before pushing to GitHub, while maintaining a flat structure locally for easier development.

### Usage

#### Option 1: Automated Push (Recommended)
Simply run the batch script which handles everything automatically:
```bash
push-to-github.bat
```
This will:
1. Organize folders into subfolders (max 1000 files each)
2. Add, commit, and push changes to GitHub
3. Restore the original flat structure locally

#### Option 2: Manual Organization
If you prefer manual control:

**Before pushing to GitHub:**
```powershell
.\organize-for-github.ps1
```

**After pushing (to restore flat structure):**
```powershell
.\restore-flat-structure.ps1
```

### How It Works
- **Locally**: Files remain in flat folder structure (e.g., all 7kyu solutions directly in `/7kyu/`)
- **GitHub**: Large folders are automatically split into alphabetical subfolders
- **Organization**: Files are sorted alphabetically and grouped into subfolders with meaningful names (e.g., `A-D`, `E-H`, etc.)

### Files Affected
The scripts only affect folders ending with 'kyu' (4kyu, 5kyu, 6kyu, 7kyu, 8kyu) and only when they contain more than 1000 JavaScript files.
