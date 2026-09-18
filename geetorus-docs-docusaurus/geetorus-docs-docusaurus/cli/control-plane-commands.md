---
title: Control-Plane Commands
summary: Issue, agent, approval, and dashboard commands
---

Client-side commands for managing issues, agents, approvals, and more.

## Issue Commands

```sh
# List issues
pnpm geetorusai issue list [--status todo,in_progress] [--assignee-agent-id <id>] [--match text]

# Get issue details
pnpm geetorusai issue get <issue-id-or-identifier>

# Create issue
pnpm geetorusai issue create --title "..." [--description "..."] [--status todo] [--priority high]

# Update issue
pnpm geetorusai issue update <issue-id> [--status in_progress] [--comment "..."]

# Add comment
pnpm geetorusai issue comment <issue-id> --body "..." [--reopen]

# Checkout task
pnpm geetorusai issue checkout <issue-id> --agent-id <agent-id>

# Release task
pnpm geetorusai issue release <issue-id>
```

## Company Commands

```sh
pnpm geetorusai company list
pnpm geetorusai company get <company-id>

# Export to portable folder package (writes manifest + markdown files)
pnpm geetorusai company export <company-id> --out ./exports/acme --include company,agents

# Preview import (no writes)
pnpm geetorusai company import \
  --from https://github.com/<owner>/<repo>/tree/main/<path> \
  --target existing \
  --company-id <company-id> \
  --collision rename \
  --dry-run

# Apply import
pnpm geetorusai company import \
  --from ./exports/acme \
  --target new \
  --new-company-name "Acme Imported" \
  --include company,agents
```

## Agent Commands

```sh
pnpm geetorusai agent list
pnpm geetorusai agent get <agent-id>
```

## Approval Commands

```sh
# List approvals
pnpm geetorusai approval list [--status pending]

# Get approval
pnpm geetorusai approval get <approval-id>

# Create approval
pnpm geetorusai approval create --type hire_agent --payload '{"name":"..."}' [--issue-ids <id1,id2>]

# Approve
pnpm geetorusai approval approve <approval-id> [--decision-note "..."]

# Reject
pnpm geetorusai approval reject <approval-id> [--decision-note "..."]

# Request revision
pnpm geetorusai approval request-revision <approval-id> [--decision-note "..."]

# Resubmit
pnpm geetorusai approval resubmit <approval-id> [--payload '{"..."}']

# Comment
pnpm geetorusai approval comment <approval-id> --body "..."
```

## Activity Commands

```sh
pnpm geetorusai activity list [--agent-id <id>] [--entity-type issue] [--entity-id <id>]
```

## Dashboard

```sh
pnpm geetorusai dashboard get
```

## Heartbeat

```sh
pnpm geetorusai heartbeat run --agent-id <agent-id> [--api-base http://localhost:3100]
```
