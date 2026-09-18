# 🌌 Geetorus 2.0 Platform Ecosystem

> **The Sovereign Enterprise Platform for Autonomous AI Agent Companies & Orchestration**

Geetorus 2.0 is a complete, production-grade operating system designed to build, run, monitor, and scale autonomous AI companies. It combines an agent execution engine, multi-model adapter matrix, real-time marketplace, org-chart visualizer, comprehensive documentation, and command-line management tools.

---

## 🏗️ Architecture & Component Overview

The repository is structured into modular subsystems:

```text
geetorus2.0/
├── geetorus/                     # Core Platform Monorepo
│   ├── server/                   # Fastify & Drizzle API backend (Port 3100)
│   ├── ui/                       # React / Vite enterprise mission control dashboard
│   ├── cli/                      # 'geetorusai' CLI for terminal orchestration
│   ├── packages/                 # Shared libraries, DB schemas, runner engines
│   └── adapters/                 # Model adapters (Claude, OpenAI, Gemini, Grok, etc.)
│
├── geetorus-market/              # AI Agent Marketplace (Port 3000)
│   ├── src/app/                  # Next.js App Router (Listings, Creator Studio, Auth)
│   ├── src/components/           # Org-chart tree viewer, blueprint inspection cards
│   └── sync-realtime-companies.cjs # Live sync script between blueprints & PostgreSQL
│
├── geetorus-companies/           # Library of 16 Turnkey AI Companies & Blueprints
│   ├── donchitos-game-studio/    # Full game development company (Game designers, sound, QA)
│   ├── sentry-health/            # HIPAA-aligned health intelligence operations
│   ├── apex-global-logistics/    # Supply chain & inventory routing agents
│   └── ... (440+ specialized agents, prompts, reporting chains, and projects)
│
├── geetorus-docs-docusaurus/     # Interactive Documentation Portal (Port 3001)
│   ├── docs/                     # Comprehensive guides, API references, concepts
│   └── src/                      # Custom Docusaurus landing pages and components
│
├── companies-tool/               # 'companies.sh' Skills & Ingestion CLI
│   └── src/                      # Import, validate, and bridge company blueprints
│
└── geetorus-pr-reviewer/         # Autonomous PR Review & Triage Microservice (Port 3002)
```

---

## 🚀 Instant Launch (Single Command)

We have provided single-click launch scripts that open separate terminal windows for every service:

### Option 1: Double-Click or Command Prompt
Run the batch file in the repository root:
```cmd
start-all.bat
```

### Option 2: PowerShell
Run the PowerShell launcher:
```powershell
.\start-all.ps1
```

Once launched, all services will be live:
| Service | URL | Description |
| :--- | :--- | :--- |
| **Marketplace** | [http://localhost:3000](http://localhost:3000) | Browse & deploy agent companies, blueprints & org charts |
| **Documentation** | [http://localhost:3001](http://localhost:3001) | Full developer and architectural manuals |
| **Core API** | [http://localhost:3100](http://localhost:3100) | Fastify backend REST and streaming API |
| **Core Console** | [http://localhost:5173](http://localhost:5173) | Geetorus administrative control plane |

---

## 🛠️ Manual Run & Development Instructions

If you prefer starting services individually:

### 1. Geetorus Marketplace
```powershell
cd geetorus-market\geetorus-market
npm run dev
# Running on http://localhost:3000
```
- **Syncing Real-Time Companies**: To sync all 16 companies and 440+ agents from `geetorus-companies` into your PostgreSQL database:
  ```powershell
  node sync-realtime-companies.cjs
  ```

### 2. Documentation Portal
```powershell
cd geetorus-docs-docusaurus\geetorus-docs-docusaurus
npm run dev
# Running on http://localhost:3001
```

### 3. Geetorus Core Server & UI
```powershell
cd geetorus\geetorus
# Start API backend:
pnpm run dev:server
# In another terminal, start UI dashboard:
pnpm run dev:ui
```

### 4. Companies CLI (`companies.sh`)
```powershell
cd companies-tool\companies-tool
pnpm dev --help
# Preview company blueprint import:
pnpm dev add ..\geetorus-companies\donchitos-game-studio --dry-run
```

---

## 🏢 Included Ready-To-Run Companies

Geetorus 2.0 ships with 16 pre-configured, production-ready AI companies in [`geetorus-companies`](./geetorus-companies/geetorus-companies/):

1. **Donchito's Game Studio** – Indie game dev company with level designers, pixel artists, story writers, and QA.
2. **Sentry Health** – Healthcare compliance, patient intake triage, and HIPAA audit bots.
3. **Apex Global Logistics** – Fleet coordination, freight route optimization, and tariff auditors.
4. **Novacorp Security** – DevSecOps team with static analysis bots, secrets detectors, and incident responders.
5. **Veloce E-Commerce** – Conversion rate optimizers, catalog enrichment, and dynamic pricing engines.
6. ...and 11 more covering FinTech, Legal, Marketing, HR, DevOps, and Media Production.

---

## 🔒 Configuration & Environment

- **Database**: The marketplace uses PostgreSQL via Drizzle ORM. Configure `DATABASE_URL` in `geetorus-market/geetorus-market/.env.local`.
- **Authentication**: Powered by `better-auth`. Setup `BETTER_AUTH_SECRET` in `.env.local`.
- **Git Hygiene**: Root `.gitignore` automatically prevents committing `node_modules`, build output folders (`.next`, `dist`, `build`), SQLite databases, and `.env` secret files.

---

## 📜 License
MIT © Geetorus AI
