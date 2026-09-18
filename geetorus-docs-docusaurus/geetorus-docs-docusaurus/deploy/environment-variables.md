---
title: Environment Variables
summary: Full environment variable reference
---

All environment variables that Geetorus uses for server configuration.

## Server Configuration

| Variable | Default | Description |
|----------|---------|-------------|
| `PORT` | `3100` | Server port |
| `HOST` | `127.0.0.1` | Server host binding |
| `DATABASE_URL` | (embedded) | PostgreSQL connection string |
| `GEETORUS_HOME` | `~/.geetorus` | Base directory for all Geetorus data |
| `GEETORUS_INSTANCE_ID` | `default` | Instance identifier (for multiple local instances) |
| `GEETORUS_DEPLOYMENT_MODE` | `local_trusted` | Runtime mode override |

## Secrets

| Variable | Default | Description |
|----------|---------|-------------|
| `GEETORUS_SECRETS_MASTER_KEY` | (from file) | 32-byte encryption key (base64/hex/raw) |
| `GEETORUS_SECRETS_MASTER_KEY_FILE` | `~/.geetorus/.../secrets/master.key` | Path to key file |
| `GEETORUS_SECRETS_STRICT_MODE` | `false` | Require secret refs for sensitive env vars |

## Agent Runtime (Injected into agent processes)

These are set automatically by the server when invoking agents:

| Variable | Description |
|----------|-------------|
| `GEETORUS_AGENT_ID` | Agent's unique ID |
| `GEETORUS_COMPANY_ID` | Company ID |
| `GEETORUS_API_URL` | Geetorus API base URL |
| `GEETORUS_API_KEY` | Short-lived JWT for API auth |
| `GEETORUS_RUN_ID` | Current heartbeat run ID |
| `GEETORUS_TASK_ID` | Issue that triggered this wake |
| `GEETORUS_WAKE_REASON` | Wake trigger reason |
| `GEETORUS_WAKE_COMMENT_ID` | Comment that triggered this wake |
| `GEETORUS_APPROVAL_ID` | Resolved approval ID |
| `GEETORUS_APPROVAL_STATUS` | Approval decision |
| `GEETORUS_LINKED_ISSUE_IDS` | Comma-separated linked issue IDs |

## LLM Provider Keys (for adapters)

| Variable | Description |
|----------|-------------|
| `ANTHROPIC_API_KEY` | Anthropic API key (for Claude Local adapter) |
| `OPENAI_API_KEY` | OpenAI API key (for Codex Local adapter) |
