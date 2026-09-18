<#
.SYNOPSIS
    Geetorus 2.0 Unified Launcher
.DESCRIPTION
    Launches each component of the Geetorus 2.0 ecosystem in its own dedicated terminal window.
#>

$rootDir = $PSScriptRoot
Write-Host "=====================================================================" -ForegroundColor Cyan
Write-Host "               GEETORUS 2.0 - UNIFIED LAUNCHER" -ForegroundColor Green
Write-Host "=====================================================================" -ForegroundColor Cyan
Write-Host ""

# 1. Geetorus Core Server (Port 3100)
Write-Host "[1/4] Launching Core API Server..." -ForegroundColor Yellow
Start-Process powershell.exe -ArgumentList "-NoExit", "-Command", "cd '$rootDir\geetorus\geetorus'; pnpm run dev:server"
Start-Sleep -Seconds 2

# 2. Geetorus Core Web UI
Write-Host "[2/4] Launching Core Dashboard UI..." -ForegroundColor Yellow
Start-Process powershell.exe -ArgumentList "-NoExit", "-Command", "cd '$rootDir\geetorus\geetorus'; pnpm run dev:ui"
Start-Sleep -Seconds 2

# 3. Geetorus Market (Port 3000)
Write-Host "[3/4] Launching Agent Marketplace (Port 3000)..." -ForegroundColor Yellow
Start-Process powershell.exe -ArgumentList "-NoExit", "-Command", "cd '$rootDir\geetorus-market\geetorus-market'; npm run dev"
Start-Sleep -Seconds 2

# 4. Geetorus Docs (Port 3001)
Write-Host "[4/4] Launching Documentation Portal (Port 3001)..." -ForegroundColor Yellow
Start-Process powershell.exe -ArgumentList "-NoExit", "-Command", "cd '$rootDir\geetorus-docs-docusaurus\geetorus-docs-docusaurus'; npm run dev"
Start-Sleep -Seconds 2

Write-Host ""
Write-Host "=====================================================================" -ForegroundColor Cyan
Write-Host "                   SERVICES LAUNCHED SUCCESSFULLY!" -ForegroundColor Green
Write-Host "=====================================================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "  Marketplace:     http://localhost:3000" -ForegroundColor White
Write-Host "  Documentation:   http://localhost:3001" -ForegroundColor White
Write-Host "  Core API Server: http://localhost:3100" -ForegroundColor White
Write-Host "  Core Dashboard:  http://localhost:5173" -ForegroundColor White
Write-Host ""
Write-Host "Each service is actively running in its own terminal window." -ForegroundColor Gray
