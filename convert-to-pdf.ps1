# Markdown to PDF Converter (PowerShell)
# Converts all markdown documentation files to PDF

Write-Host "📄 EduPulse AI - Markdown to PDF Converter" -ForegroundColor Cyan
Write-Host "==========================================" -ForegroundColor Cyan
Write-Host ""

# Check if pandoc is installed
$pandocInstalled = Get-Command pandoc -ErrorAction SilentlyContinue

if (-not $pandocInstalled) {
    Write-Host "❌ Pandoc is not installed!" -ForegroundColor Red
    Write-Host ""
    Write-Host "Please install Pandoc to convert markdown to PDF:" -ForegroundColor Yellow
    Write-Host "  1. Download from: https://pandoc.org/installing.html" -ForegroundColor Yellow
    Write-Host "  2. Or install via Chocolatey: choco install pandoc" -ForegroundColor Yellow
    Write-Host "  3. Or install via Winget: winget install pandoc" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "Alternative: Use browser to print .md files as PDF" -ForegroundColor Yellow
    exit 1
}

Write-Host "✅ Pandoc found!" -ForegroundColor Green
Write-Host ""

# Create output directory
$outputDir = "docs-pdf"
if (-not (Test-Path $outputDir)) {
    New-Item -ItemType Directory -Path $outputDir | Out-Null
    Write-Host "✅ Created output directory: $outputDir" -ForegroundColor Green
}

# Markdown files to convert
$markdownFiles = @(
    "README.md",
    "SETUP.md",
    "PROJECT_STATUS.md",
    "COMPLETION_SUMMARY.md",
    "QUICK_START.md"
)

Write-Host "Converting files..." -ForegroundColor Cyan
Write-Host ""

$convertedCount = 0
$skippedCount = 0

foreach ($file in $markdownFiles) {
    if (Test-Path $file) {
        $outputFile = Join-Path $outputDir ($file -replace '\.md$', '.pdf')
        
        Write-Host "📄 Converting: $file" -ForegroundColor Yellow
        
        try {
            # Convert using pandoc with nice formatting
            pandoc $file `
                -o $outputFile `
                --pdf-engine=xelatex `
                -V geometry:margin=1in `
                -V fontsize=11pt `
                --highlight-style=tango `
                2>$null
            
            if ($LASTEXITCODE -eq 0) {
                Write-Host "   ✅ Created: $outputFile" -ForegroundColor Green
                $convertedCount++
            } else {
                Write-Host "   ❌ Failed to convert $file" -ForegroundColor Red
            }
        } catch {
            Write-Host "   ❌ Error: $_" -ForegroundColor Red
        }
    } else {
        Write-Host "⚠️  Skipping: $file (not found)" -ForegroundColor Yellow
        $skippedCount++
    }
    Write-Host ""
}

# Summary
Write-Host "==========================================" -ForegroundColor Cyan
Write-Host "✅ Converted: $convertedCount files" -ForegroundColor Green
if ($skippedCount -gt 0) {
    Write-Host "⚠️  Skipped: $skippedCount files" -ForegroundColor Yellow
}
Write-Host "📁 Output directory: $outputDir" -ForegroundColor Cyan
Write-Host ""

# Open output directory
if ($convertedCount -gt 0) {
    $openDir = Read-Host "Open output directory? (y/n)"
    if ($openDir -eq 'y') {
        Invoke-Item $outputDir
    }
}

Write-Host "Done! 🎉" -ForegroundColor Green
