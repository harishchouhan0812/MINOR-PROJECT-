# 🚀 How to Run EduPulse AI

## Quick Start (3 Steps)

### 1️⃣ Install Dependencies
```bash
npm install
```

### 2️⃣ Start Development Server
```bash
npm run dev
```

### 3️⃣ Open Browser
Navigate to: **http://localhost:5173/**

---

## 📋 Complete Instructions

### Prerequisites

Before running the application, ensure you have:

- ✅ **Node.js** (v18 or higher) - [Download](https://nodejs.org/)
- ✅ **npm** (v9 or higher) - Comes with Node.js
- ✅ **Modern browser** - Chrome, Firefox, or Edge

Check your versions:
```bash
node --version   # Should show v18.x or higher
npm --version    # Should show v9.x or higher
```

---

## 🎯 Running the Application

### Method 1: Using npm (Recommended)

```bash
# Navigate to project folder
cd edupulse-ai

# Install dependencies (first time only)
npm install

# Start development server
npm run dev
```

The application will start at: **http://localhost:5173/**

### Method 2: Using package.json scripts

```bash
# Development mode with hot reload
npm run dev

# Production build
npm run build

# Preview production build
npm run preview

# Run tests
npm test
```

---

## 🎭 Using the Application

### 1. Landing Page
When you first open the app, you'll see the **EduPulse AI** landing page with 5 role cards.

### 2. Select a Role
Click on any role to enter that portal:
- 🎓 **Student Portal** - View your academic progress
- 👨‍🏫 **Faculty Portal** - Monitor class performance  
- 🤝 **Mentor Portal** - Manage student support cases
- 💼 **HOD Portal** - View department analytics
- 🛡️ **Admin Portal** - System administration

### 3. Explore Features
Each role has its own dashboard and features:

#### Student Features
- Personal dashboard with stats
- Attendance tracking by subject
- Assessment marks and grades
- Support request system

#### Faculty Features
- Class overview with alerts
- Student directory with search
- Individual student profiles
- Prediction explanations with SHAP
- Alert and intervention management

#### Mentor Features
- Assigned student list
- Support case management
- Meeting scheduling
- Task tracking

#### HOD Features
- Department-wide analytics
- Subject performance reports
- Model evaluation metrics
- Aggregate statistics

#### Admin Features
- User management (demo)
- System configuration
- Data quality monitoring
- Audit logs

---

## 🔄 Switching Roles

To switch to a different role:
1. Click on your profile icon (top-right)
2. Click "Logout" or "Switch Role"
3. Select a different role card

---

## 📄 Converting Documentation to PDF

We provide multiple methods to convert markdown files to PDF:

### Method 1: Using Pandoc (Best Quality)

#### Step 1: Install Pandoc
- **Windows**: Download from [pandoc.org](https://pandoc.org/installing.html)
  ```bash
  # Or use Chocolatey
  choco install pandoc
  
  # Or use Winget
  winget install pandoc
  ```

#### Step 2: Run Conversion Script
```bash
# Double-click this file in Windows Explorer:
convert-to-pdf.bat

# Or run in PowerShell:
.\convert-to-pdf.ps1

# Or run in Command Prompt:
convert-to-pdf.bat
```

PDFs will be created in the `docs-pdf` folder.

### Method 2: Using Browser (No Installation)

1. Open any `.md` file in your browser:
   - Drag and drop the file into Chrome/Edge
   - Or use a markdown viewer extension
2. Press `Ctrl + P` (Print)
3. Select "Save as PDF"
4. Click "Save"

### Method 3: Using VS Code

1. Install "Markdown PDF" extension in VS Code
2. Open any `.md` file
3. Right-click → "Markdown PDF: Export (pdf)"

### Files to Convert
- `README.md` - Main project documentation
- `SETUP.md` - Setup and installation guide
- `PROJECT_STATUS.md` - Implementation details
- `COMPLETION_SUMMARY.md` - Feature summary
- `QUICK_START.md` - Quick start guide

---

## 🐛 Troubleshooting

### Port Already in Use

**Problem**: Port 5173 is already being used

**Solution**:
```bash
# Stop existing process
netstat -ano | findstr :5173
taskkill /PID <PID_NUMBER> /F

# Or use a different port
npm run dev -- --port 3000
```

### Dependencies Not Installing

**Problem**: `npm install` fails

**Solution**:
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules
rm -r -force node_modules

# Reinstall
npm install
```

### Page Not Loading

**Problem**: Browser shows blank page

**Solution**:
1. Hard refresh: `Ctrl + Shift + R`
2. Clear browser cache
3. Open browser DevTools (F12) and check Console for errors
4. Restart dev server

### Changes Not Reflecting

**Problem**: Code changes don't appear

**Solution**:
1. Stop server: `Ctrl + C`
2. Restart: `npm run dev`
3. Hard refresh browser: `Ctrl + Shift + R`

### TypeScript Errors

**Problem**: TypeScript compilation errors

**Solution**:
```bash
# Check for type errors
npm run type-check

# Usually fixed by restarting the dev server
```

---

## 📁 Project Structure

```
edupulse-ai/
├── src/
│   ├── app/              # Main app components
│   ├── components/       # Reusable UI components
│   ├── data/            # Synthetic demo data
│   ├── features/        # Feature modules by role
│   ├── hooks/           # Custom React hooks
│   ├── pages/           # Page components
│   ├── types/           # TypeScript type definitions
│   └── utils/           # Utility functions
├── public/              # Static assets
├── docs-pdf/           # Generated PDF documentation
├── README.md           # Main documentation
├── QUICK_START.md      # This file
└── package.json        # Dependencies and scripts
```

---

## 💻 Available Commands

```bash
# Development
npm run dev              # Start dev server
npm run build           # Build for production
npm run preview         # Preview production build

# Testing
npm test                # Run tests
npm run test:ui         # Run tests with UI

# Code Quality
npm run lint            # Lint code
npm run type-check      # Check TypeScript types

# Documentation
convert-to-pdf.bat      # Convert docs to PDF (Windows)
.\convert-to-pdf.ps1    # Convert docs to PDF (PowerShell)
```

---

## 🎓 Demo Data

The application uses synthetic academic data:

### Demo Students
- **STU001** - Rahul Sharma (CSE, Sem 5)
- **STU002** - Priya Patel (CSE, Sem 5)
- **STU003** - Arjun Kumar (CSE, Sem 5) ⚠️ Has risk predictions

### Demo Faculty
- **FAC001** - Dr. Amit Verma (CSE)
- **FAC002** - Dr. Sneha Gupta (CSE)

All data is clearly marked as **synthetic** and for demonstration only.

---

## 🎯 Recommended Demo Flow

1. **Start as Faculty** (`FAC001`)
   - See the faculty overview
   - Click "Students" to view directory
   - Click on "Arjun Kumar" (STU003)
   - View prediction details with SHAP explanation

2. **Create an Alert**
   - Click "Create Alert" button
   - Fill in alert details
   - Assign to a mentor

3. **Switch to Mentor** (`MEN001`)
   - View assigned cases
   - Update case status
   - Add follow-up notes

4. **Switch to Student** (`STU003`)
   - See student perspective
   - View your own alerts
   - Check support requests

5. **Switch to HOD** (`HOD001`)
   - See department analytics
   - Review model performance
   - Generate reports

---

## 📊 Key Features

✅ 50+ React components  
✅ 35+ routes across 5 roles  
✅ Random Forest ML model (Week 5)  
✅ SHAP explainability visualizations  
✅ Real-time charts with Recharts  
✅ Alert and intervention workflow  
✅ Responsive design (mobile-friendly)  
✅ TypeScript for type safety  
✅ Synthetic academic data  
✅ Local storage persistence  

---

## 🆘 Getting Help

If you encounter issues:

1. Check the browser console (F12) for error messages
2. Review `README.md` for detailed documentation
3. Check `PROJECT_STATUS.md` for implementation status
4. Review `COMPLETION_SUMMARY.md` for features overview
5. Restart the development server
6. Clear browser cache and do a hard refresh

---

## 🎉 You're Ready!

Run `npm run dev` and start exploring EduPulse AI!

**Default URL**: http://localhost:5173/

Happy coding! 🚀
