# AC Update Workspaces

This directory holds in-flight AC update workspaces such as `K-to-L/`.

Each workspace contains:

- `context.json`: machine-readable detection and archive context
- `status.md`: workflow status (`pending`, `in-progress`, `applied`, `tagged`)
- `diff.txt`: raw unified diff of the full archived AC text
- `per-endorsement-diff.md`: normalized Appendix A diff by endorsement id
- `changelog.md`: summary counts and metadata changes
- `update-prompt.md`: ready-to-paste prompt for a coding agent

