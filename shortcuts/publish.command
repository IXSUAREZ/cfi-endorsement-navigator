#!/bin/bash

# Move to the project root directory (one level up from the shortcuts folder)
cd "$(dirname "$0")/.."

echo "====================================="
echo "   Publishing to GitHub Pages...     "
echo "====================================="

# Add all changes
git add . || { echo "Failed to add files to git."; exit 1; }

# Commit the changes automatically with a timestamp
git commit -m "Auto-published from shortcut: $(date +"%Y-%m-%d %H:%M:%S")"

# Push the changes to GitHub
git push || { echo "Failed to push to GitHub."; exit 1; }

echo "====================================="
echo "   Success! Changes sent to GitHub.  "
echo "   It may take 1-2 minutes to open.  "
echo "====================================="
echo ""
echo "You can now close this window."

# Prevents the Terminal window from vanishing immediately if an error occurs
read -p "Press Enter to exit..." 
