@echo off
echo ========================================
echo EduPulse AI - Markdown to PDF Converter
echo ========================================
echo.

REM Check if pandoc is installed
where pandoc >nul 2>nul
if %errorlevel% neq 0 (
    echo [ERROR] Pandoc is not installed!
    echo.
    echo Please install Pandoc first:
    echo   1. Download from: https://pandoc.org/installing.html
    echo   2. Or use: winget install pandoc
    echo   3. Or use: choco install pandoc
    echo.
    echo Alternative: Use browser to print .md files as PDF
    echo   - Open each .md file in browser
    echo   - Press Ctrl+P
    echo   - Save as PDF
    echo.
    pause
    exit /b 1
)

echo [OK] Pandoc found!
echo.

REM Create output directory
if not exist "docs-pdf" mkdir docs-pdf
echo [OK] Output directory ready: docs-pdf
echo.

echo Converting files...
echo.

REM Convert each markdown file
if exist "README.md" (
    echo Converting: README.md
    pandoc README.md -o docs-pdf\README.pdf --pdf-engine=xelatex -V geometry:margin=1in 2>nul
    if %errorlevel% equ 0 (
        echo [OK] Created: docs-pdf\README.pdf
    ) else (
        echo [FAIL] Could not convert README.md
    )
    echo.
)

if exist "SETUP.md" (
    echo Converting: SETUP.md
    pandoc SETUP.md -o docs-pdf\SETUP.pdf --pdf-engine=xelatex -V geometry:margin=1in 2>nul
    if %errorlevel% equ 0 (
        echo [OK] Created: docs-pdf\SETUP.pdf
    ) else (
        echo [FAIL] Could not convert SETUP.md
    )
    echo.
)

if exist "PROJECT_STATUS.md" (
    echo Converting: PROJECT_STATUS.md
    pandoc PROJECT_STATUS.md -o docs-pdf\PROJECT_STATUS.pdf --pdf-engine=xelatex -V geometry:margin=1in 2>nul
    if %errorlevel% equ 0 (
        echo [OK] Created: docs-pdf\PROJECT_STATUS.pdf
    ) else (
        echo [FAIL] Could not convert PROJECT_STATUS.md
    )
    echo.
)

if exist "COMPLETION_SUMMARY.md" (
    echo Converting: COMPLETION_SUMMARY.md
    pandoc COMPLETION_SUMMARY.md -o docs-pdf\COMPLETION_SUMMARY.pdf --pdf-engine=xelatex -V geometry:margin=1in 2>nul
    if %errorlevel% equ 0 (
        echo [OK] Created: docs-pdf\COMPLETION_SUMMARY.pdf
    ) else (
        echo [FAIL] Could not convert COMPLETION_SUMMARY.md
    )
    echo.
)

if exist "QUICK_START.md" (
    echo Converting: QUICK_START.md
    pandoc QUICK_START.md -o docs-pdf\QUICK_START.pdf --pdf-engine=xelatex -V geometry:margin=1in 2>nul
    if %errorlevel% equ 0 (
        echo [OK] Created: docs-pdf\QUICK_START.pdf
    ) else (
        echo [FAIL] Could not convert QUICK_START.md
    )
    echo.
)

echo ========================================
echo Conversion complete!
echo Check the 'docs-pdf' folder for PDFs
echo ========================================
echo.

REM Open output folder
start docs-pdf

pause
