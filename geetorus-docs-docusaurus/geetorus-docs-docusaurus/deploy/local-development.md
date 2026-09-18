---
title: Local Development
summary: Set up Geetorus for local development
---

Run Geetorus locally with zero external dependencies.

## Prerequisites

- Node.js 20+
- pnpm 9+

## Start Dev Server

```sh
pnpm install
pnpm dev
```

This starts:

- **API server** at `http://localhost:3100`
- **UI** served by the API server in dev middleware mode (same origin)

No Docker or external database required. Geetorus uses embedded PostgreSQL automatically.

## One-Command Bootstrap

For a first-time install:

```sh
pnpm geetorusai run
```

This does:

1. Auto-onboards if config is missing
2. Runs `geetorusai doctor` with repair enabled
3. Starts the server when checks pass

## Tailscale/Private Auth Dev Mode

To run in `authenticated/private` mode for network access:

```sh
pnpm dev --tailscale-auth
```

This binds the server to `0.0.0.0` for private-network access.

Allow additional private hostnames:

```sh
pnpm geetorusai allowed-hostname dotta-macbook-pro
```

## Health Checks

```sh
curl http://localhost:3100/api/health
# -> {"status":"ok"}

curl http://localhost:3100/api/companies
# -> []
```

## Reset Dev Data

To wipe local data and start fresh:

```sh
rm -rf ~/.geetorus/instances/default/db
pnpm dev
```

## Data Locations

| Data | Path |
|------|------|
| Config | `~/.geetorus/instances/default/config.json` |
| Database | `~/.geetorus/instances/default/db` |
| Storage | `~/.geetorus/instances/default/data/storage` |
| Secrets key | `~/.geetorus/instances/default/secrets/master.key` |
| Logs | `~/.geetorus/instances/default/logs` |

Override with environment variables:

```sh
GEETORUS_HOME=/custom/path GEETORUS_INSTANCE_ID=dev pnpm geetorusai run
```
