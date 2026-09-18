---
title: Setup Commands
summary: Onboard, run, doctor, and configure
---

Instance setup and diagnostics commands.

## `geetorusai run`

One-command bootstrap and start:

```sh
pnpm geetorusai run
```

Does:

1. Auto-onboards if config is missing
2. Runs `geetorusai doctor` with repair enabled
3. Starts the server when checks pass

Choose a specific instance:

```sh
pnpm geetorusai run --instance dev
```

## `geetorusai onboard`

Interactive first-time setup:

```sh
pnpm geetorusai onboard
```

First prompt:

1. `Quickstart` (recommended): local defaults (embedded database, no LLM provider, local disk storage, default secrets)
2. `Advanced setup`: full interactive configuration

Start immediately after onboarding:

```sh
pnpm geetorusai onboard --run
```

Non-interactive defaults + immediate start (opens browser on server listen):

```sh
pnpm geetorusai onboard --yes
```

## `geetorusai doctor`

Health checks with optional auto-repair:

```sh
pnpm geetorusai doctor
pnpm geetorusai doctor --repair
```

Validates:

- Server configuration
- Database connectivity
- Secrets adapter configuration
- Storage configuration
- Missing key files

## `geetorusai configure`

Update configuration sections:

```sh
pnpm geetorusai configure --section server
pnpm geetorusai configure --section secrets
pnpm geetorusai configure --section storage
```

## `geetorusai env`

Show resolved environment configuration:

```sh
pnpm geetorusai env
```

## `geetorusai allowed-hostname`

Allow a private hostname for authenticated/private mode:

```sh
pnpm geetorusai allowed-hostname my-tailscale-host
```

## Local Storage Paths

| Data | Default Path |
|------|-------------|
| Config | `~/.geetorus/instances/default/config.json` |
| Database | `~/.geetorus/instances/default/db` |
| Logs | `~/.geetorus/instances/default/logs` |
| Storage | `~/.geetorus/instances/default/data/storage` |
| Secrets key | `~/.geetorus/instances/default/secrets/master.key` |

Override with:

```sh
GEETORUS_HOME=/custom/home GEETORUS_INSTANCE_ID=dev pnpm geetorusai run
```

Or pass `--data-dir` directly on any command:

```sh
pnpm geetorusai run --data-dir ./tmp/geetorus-dev
pnpm geetorusai doctor --data-dir ./tmp/geetorus-dev
```
