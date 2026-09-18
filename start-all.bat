@echo off
setlocal enabledelayedexpansion
title Geetorus 2.0 - Platform Launcher
color 0A

echo =====================================================================
echo                GEETORUS 2.0 - FULL PLATFORM LAUNCHER
echo =====================================================================
echo.
echo Starting all core services across independent terminal windows...
echo.

set ROOT_DIR=%~dp0

:: 1. Core Geetorus Server (Port 3100)
echo [1/4] Starting Geetorus Core Server (Port 3100)...
start "Geetorus Core Server (Port 3100)" cmd /k "cd /d "%ROOT_DIR%geetorus\geetorus" && pnpm run dev:server"
timeout /t 2 /nobreak >nul

:: 2. Geetorus UI Dashboard (Port 3101 / 5173)
echo [2/4] Starting Geetorus UI Console...
start "Geetorus UI Dashboard" cmd /k "cd /d "%ROOT_DIR%geetorus\geetorus" && pnpm run dev:ui"
timeout /t 2 /nobreak >nul

:: 3. Marketplace (Port 3000)
echo [3/4] Starting Geetorus Market (Port 3000)...
start "Geetorus Marketplace (Port 3000)" cmd /k "cd /d "%ROOT_DIR%geetorus-market\geetorus-market" && npm run dev"
timeout /t 2 /nobreak >nul

:: 4. Documentation Portal (Port 3001)
echo [4/4] Starting Geetorus Docs (Port 3001)...
start "Geetorus Docusaurus Docs (Port 3001)" cmd /k "cd /d "%ROOT_DIR%geetorus-docs-docusaurus\geetorus-docs-docusaurus" && npm run dev"
timeout /t 2 /nobreak >nul

echo.
echo =====================================================================
echo                ALL SERVICES ARE STARTING UP!
echo =====================================================================
echo.
echo   * Geetorus Marketplace:     http://localhost:3000
echo   * Documentation Portal:     http://localhost:3001
echo   * Geetorus Core API:        http://localhost:3100
echo   * Geetorus Admin Dashboard: http://localhost:5173
echo.
echo To run companies-tool CLI, open a terminal in:
echo   cd %ROOT_DIR%companies-tool\companies-tool
echo   pnpm dev --help
echo.
echo Press any key to exit this launcher (services will keep running in their own windows)...
pause >nul
