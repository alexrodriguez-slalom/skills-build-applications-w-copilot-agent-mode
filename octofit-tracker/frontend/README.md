# OctoFit Tracker Frontend

React 19 + Vite presentation tier for the OctoFit Tracker multi-tier application.

## Environment

Define `VITE_CODESPACE_NAME` when running in GitHub Codespaces, for example in `.env.local`:

```bash
VITE_CODESPACE_NAME=your-codespace-name
```

When `VITE_CODESPACE_NAME` is set, API requests use:

```text
https://$VITE_CODESPACE_NAME-8000.app.github.dev/api/[component]/
```

When it is unset, the app falls back to `http://localhost:8000/api`.
