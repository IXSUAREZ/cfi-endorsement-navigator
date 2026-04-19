#!/bin/bash

set -euo pipefail

cd "$(dirname "$0")/.."

MODE="${1:-run}"
shift $(( $# > 0 ? 1 : 0 ))

PYTHON_BIN=".venv/bin/python"

echo "====================================="
echo "    AC 61-65 Update Automation       "
echo "====================================="

if [ ! -x "$PYTHON_BIN" ]; then
  echo "Missing $PYTHON_BIN"
  echo "Create the virtual environment first, then re-run this shortcut."
  read -p "Press Enter to exit..."
  exit 1
fi

"$PYTHON_BIN" -m pip install -r scripts/ac_update/requirements.txt
"$PYTHON_BIN" -m scripts.ac_update.orchestrate "$MODE" "$@"

echo ""
echo "Finished."
read -p "Press Enter to exit..."
