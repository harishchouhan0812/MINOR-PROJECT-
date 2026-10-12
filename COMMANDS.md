# 🎯 EduPulse AI - Command Reference

## 🚀 Essential Commands

### Start the Application
```bash
cd edupulse-ai
npm install          # First time only
npm run dev          # Start dev server
```
**URL**: http://localhost:5173/

---

## 📦 Installation Commands

```bash
# Install all dependencies
npm install

# Install specific package
npm install <package-name>

# Install dev dependency
npm install -D <package-name>

# Clean install (removes node_modules first)
rm -r -force node_modules
npm install
```

---

## 🏃 Development Commands

```bash
# Start development server (hot reload)
npm run dev

# Start on different port
npm run dev -- --port 3000

# Build for production
npm run build

# Preview production build
npm run preview

# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with UI
npm run test:ui

# Check TypeScript types
npm run type-check

# Lint code
npm run lint

# Fix linting issues
npm run lint:fix
```

---

## 📄 Documentation Commands

### Convert Markdown to PDF

#### Option 1: Windows Batch File (Easiest)
```bash
# Double-click in Explorer or run:
convert-to-pdf.bat
```

#### Option 2: PowerShell Script
```powershell
# In PowerShell:
.\convert-to-pdf.ps1
```

#### Option 3: Node.js Script
```bash
# Install markdown-pdf globally first:
npm install -g markdown-pdf

# Then run:
node convert-to-pdf.js
```

#### Option 4: Manual Pandoc Commands
```bash
# Install Pandoc first: https://pandoc.org/

# Convert individual files:
pandoc README.md -o README.pdf
pandoc SETUP.md -o SETUP.pdf
pandoc PROJECT_STATUS.md -o PROJECT_STATUS.pdf
pandoc COMPLETION_SUMMARY.md -o COMPLETION_SUMMARY.pdf
pandoc QUICK_START.md -o QUICK_START.pdf

# With better formatting:
pandoc README.md -o README.pdf --pdf-engine=xelatex -V geometry:margin=1in
```

---

## 🔧 Troubleshooting Commands

### Port Issues
```bash
# Find process using port 5173
netstat -ano | findstr :5173

# Kill specific process
taskkill /PID <PID_NUMBER> /F

# Kill all node processes (use with caution!)
taskkill /IM node.exe /F
```

### Cache Issues
```bash
# Clear npm cache
npm cache clean --force

# Clear Vite cache
rm -r -force node_modules/.vite

# Full clean reinstall
rm -r -force node_modules
npm cache clean --force
npm install
```

### Git Commands
```bash
# Check status
git status

# Stage changes
git add .

# Commit changes
git commit -m "Your message here"

# Push to remote
git push origin main

# Create new branch
git checkout -b feature/your-feature-name

# View commit history
git log --oneline
```

---

## 🎓 Project-Specific Commands

### View Project Status
```bash
# Open in VS Code
code README.md
code PROJECT_STATUS.md
code COMPLETION_SUMMARY.md

# Open in browser
start README.md
start HOW_TO_RUN.md
```

### Check Project Health
```bash
# Check for outdated packages
npm outdated

# View dependency tree
npm list --depth=0

# Check for security vulnerabilities
npm audit

# Fix vulnerabilities (be careful!)
npm audit fix
```

### Build Analysis
```bash
# Build and analyze bundle size
npm run build

# The build output will show:
# - Chunk sizes
# - Total build size
# - Build time
```

---

## 📊 Testing Commands

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage

# Run specific test file
npm test -- StudentOverview.test.tsx

# Update snapshots
npm test -- -u
```

---

## 🔍 Debugging Commands

### View Logs
```bash
# Browser console
# Press F12 in browser → Console tab

# View Vite logs
npm run dev -- --debug

# Verbose logging
npm run dev -- --logLevel=verbose
```

### Network Inspection
```bash
# Start with network tab open
# Press F12 → Network tab → Refresh page

# Check what's loading:
# - HTML, CSS, JS files
# - API calls (none in this project)
# - Asset loading times
```

---

## 🚀 Deployment Commands

### Build for Production
```bash
# Create optimized build
npm run build

# Output will be in: dist/

# Preview production build locally
npm run preview
```

### Serve Static Build
```bash
# Install serve globally
npm install -g serve

# Serve the dist folder
serve -s dist

# Serve on specific port
serve -s dist -p 8080
```

---

## 📁 File Management Commands

### Navigation
```bash
# Change directory
cd edupulse-ai

# List files
dir                    # Windows
ls                     # PowerShell/Linux

# View file content
type file.txt         # Windows
cat file.txt          # PowerShell/Linux
```

### File Operations
```bash
# Create directory
mkdir new-folder

# Remove directory
rmdir /s folder-name   # Windows
rm -r folder-name      # PowerShell

# Copy files
copy source.txt dest.txt   # Windows
cp source.txt dest.txt     # PowerShell
```

---

## 🎯 Quick Reference

| Task | Command |
|------|---------|
| Install deps | `npm install` |
| Start dev | `npm run dev` |
| Build prod | `npm run build` |
| Run tests | `npm test` |
| Type check | `npm run type-check` |
| Lint | `npm run lint` |
| Convert to PDF | `convert-to-pdf.bat` |
| Clean install | `rm -r -force node_modules && npm install` |
| Check port | `netstat -ano \| findstr :5173` |
| Kill process | `taskkill /PID <PID> /F` |

---

## 🌐 Browser Commands

### DevTools Shortcuts
- **F12** - Open DevTools
- **Ctrl + Shift + R** - Hard refresh
- **Ctrl + Shift + C** - Inspect element
- **Ctrl + Shift + I** - Open DevTools
- **Ctrl + Shift + J** - Open Console
- **Ctrl + Shift + M** - Toggle mobile view

### Navigation
- **Ctrl + L** - Focus URL bar
- **Ctrl + T** - New tab
- **Ctrl + W** - Close tab
- **Ctrl + Tab** - Next tab
- **Ctrl + +** - Zoom in
- **Ctrl + -** - Zoom out
- **Ctrl + 0** - Reset zoom

---

## 💡 Pro Tips

### Faster Development
```bash
# Run dev server in background
start /B npm run dev

# Open browser automatically
start http://localhost:5173
```

### Batch Operations
```bash
# Clean, install, and start in one go
rm -r -force node_modules && npm install && npm run dev
```

### Quick Restart
```bash
# Create a restart script (restart.bat):
@echo off
taskkill /IM node.exe /F
npm run dev
```

---

## 🆘 Emergency Commands

### App Won't Start
```bash
# Full reset:
taskkill /IM node.exe /F
rm -r -force node_modules
rm -r -force package-lock.json
npm cache clean --force
npm install
npm run dev
```

### Build Fails
```bash
# Clear cache and rebuild:
rm -r -force dist
rm -r -force node_modules/.vite
npm run build
```

### Tests Fail
```bash
# Update dependencies:
npm update
npm test
```

---

## 📞 Need More Help?

1. Check `HOW_TO_RUN.md` for detailed instructions
2. Review `README.md` for full documentation
3. Open browser DevTools (F12) to see errors
4. Check `PROJECT_STATUS.md` for known issues

---

**Quick Start**: `npm install && npm run dev`  
**Convert Docs**: `convert-to-pdf.bat`  
**Get Help**: Open `HOW_TO_RUN.md`

🎉 Happy Coding!
