# 🎓 EduPulse AI - START HERE

Welcome to **EduPulse AI** - Your Academic Intelligence Platform!

---

## ⚡ Quick Start (3 Commands)

Open your terminal/command prompt in the `edupulse-ai` folder and run:

```bash
npm install
npm run dev
```

Then open your browser to: **http://localhost:5173/**

That's it! 🎉

---

## 📚 Documentation Guide

Choose the right document for what you need:

### 🚀 Getting Started
- **START_HERE.md** (this file) - You are here!
- **HOW_TO_RUN.md** - Complete setup and running instructions
- **QUICK_START.md** - Fast guide with demo workflow
- **COMMANDS.md** - All available commands reference

### 📖 Project Documentation
- **README.md** - Complete project overview and architecture
- **SETUP.md** - Detailed installation and configuration
- **PROJECT_STATUS.md** - Full implementation status and features
- **COMPLETION_SUMMARY.md** - Deliverables and achievements

### 🔧 Technical Docs
- **package.json** - Dependencies and npm scripts
- **vite.config.ts** - Vite configuration
- **tsconfig.json** - TypeScript configuration
- **tailwind.config.js** - Tailwind CSS configuration

---

## 🎯 What to Do First

### 1. Run the Application
```bash
cd edupulse-ai
npm install
npm run dev
```

### 2. Open in Browser
Navigate to: http://localhost:5173/

### 3. Try Different Roles
Click on each role card to explore:
- 🎓 **Student** - See your grades and attendance
- 👨‍🏫 **Faculty** - Monitor students and predictions
- 🤝 **Mentor** - Manage support cases
- 💼 **HOD** - View department analytics
- 🛡️ **Admin** - System management

### 4. Explore Key Features
- View attendance charts
- See ML predictions with SHAP explanations
- Create and manage alerts
- Track interventions

---

## 📄 Convert Docs to PDF

Want PDF versions of the documentation?

### Windows (Easiest):
Double-click: **`convert-to-pdf.bat`**

### PowerShell:
```powershell
.\convert-to-pdf.ps1
```

### Requires:
- **Pandoc** - Download from https://pandoc.org/installing.html
- Or use browser: Open .md file → Print → Save as PDF

PDFs will be created in the `docs-pdf` folder.

---

## 🎓 For Your Project Presentation

### Best Demo Flow:

1. **Show Landing Page**
   - Explain the 5 different user roles
   - Highlight the demo mode notice

2. **Faculty Portal**
   - Click "Faculty Portal"
   - Show the overview dashboard
   - Navigate to "Students" directory
   - Click on "Arjun Kumar" (STU003)
   - Click "View Details" on a prediction
   - **Highlight**: SHAP explanation showing feature contributions
   - Create an alert for the student

3. **Student Portal**
   - Switch to "Student Portal"
   - Show attendance tracking
   - View subject performance
   - Check support requests

4. **HOD Portal**
   - Switch to "HOD Portal"
   - Show department analytics
   - Explain aggregate metrics
   - Display model evaluation stats

5. **Key Points to Mention**:
   - ✅ 50+ React components
   - ✅ 35+ routes across 5 roles
   - ✅ Random Forest ML model
   - ✅ SHAP explainability
   - ✅ Complete intervention workflow
   - ✅ Responsive design
   - ✅ TypeScript for type safety
   - ✅ All data is synthetic/demo

---

## 🛠️ Common Issues & Solutions

### Issue: Port already in use
```bash
netstat -ano | findstr :5173
taskkill /PID <PID> /F
npm run dev
```

### Issue: Dependencies won't install
```bash
npm cache clean --force
rm -r -force node_modules
npm install
```

### Issue: Page is blank
1. Press `Ctrl + Shift + R` (hard refresh)
2. Press `F12` to check browser console for errors
3. Restart the dev server

### Issue: Changes not showing
1. Stop server: `Ctrl + C`
2. Start again: `npm run dev`
3. Hard refresh browser: `Ctrl + Shift + R`

---

## 📊 Project Statistics

- **Lines of Code**: ~15,000+
- **Components**: 50+
- **Routes**: 35+
- **User Roles**: 5
- **Features**: 40+
- **Pages**: 30+
- **Data Models**: 10+
- **Utility Functions**: 20+

---

## 🎯 Key Technologies

### Frontend
- ⚛️ React 18
- 📘 TypeScript
- 🎨 Tailwind CSS
- 🚀 Vite
- 🧭 React Router

### Charts & Visualization
- 📊 Recharts
- 🎨 Lucide Icons

### ML & Explainability
- 🤖 Random Forest (Week 5 scope)
- 🔍 SHAP explanations
- 📈 Feature importance

### Testing
- 🧪 Vitest
- 📚 React Testing Library

---

## 📁 Project Structure

```
edupulse-ai/
├── src/
│   ├── app/              # Main app, routing, auth
│   ├── components/       # Reusable UI components
│   │   ├── ui/          # Button, Card, Input, etc.
│   │   ├── charts/      # Chart components
│   │   └── layout/      # Layout components
│   ├── data/            # Synthetic demo data
│   ├── features/        # Role-based features
│   │   ├── student/     # Student portal
│   │   ├── faculty/     # Faculty portal
│   │   ├── mentor/      # Mentor portal
│   │   ├── hod/         # HOD portal
│   │   ├── admin/       # Admin portal
│   │   └── predictions/ # ML predictions
│   ├── hooks/           # Custom React hooks
│   ├── pages/           # Page components
│   ├── types/           # TypeScript types
│   └── utils/           # Utility functions
├── public/              # Static assets
├── docs-pdf/           # Generated PDFs
└── [config files]      # Vite, TS, Tailwind configs
```

---

## 🎓 Demo Accounts

The app includes these demo users:

| Role | ID | Name | Department |
|------|-------|------|------------|
| Student | STU003 | Arjun Kumar | CSE (Has predictions ⚠️) |
| Faculty | FAC001 | Dr. Amit Verma | CSE |
| Mentor | MEN001 | Dr. Kavita Sharma | CSE |
| HOD | HOD001 | Dr. Ramesh Krishnan | CSE |
| Admin | ADM001 | Sunita Desai | System |

---

## 🚀 Next Steps

### Immediate
1. ✅ Run `npm run dev`
2. ✅ Open http://localhost:5173/
3. ✅ Explore different roles
4. ✅ Test key features

### For Presentation
1. 📖 Review `PROJECT_STATUS.md` for technical details
2. 📊 Prepare demo flow (see "Best Demo Flow" above)
3. 📄 Convert docs to PDF using `convert-to-pdf.bat`
4. 🎤 Practice explaining SHAP visualizations

### For Submission
1. 📝 Review `COMPLETION_SUMMARY.md` for deliverables
2. 📋 Check that all required features work
3. 📄 Ensure all documentation is complete
4. 🎨 Take screenshots of key features

---

## 📞 Need Help?

### Documentation
- **General**: Read `README.md`
- **Setup**: Read `SETUP.md`  
- **Commands**: Read `COMMANDS.md`
- **Status**: Read `PROJECT_STATUS.md`

### Troubleshooting
1. Check browser console (F12)
2. Check terminal for errors
3. Try restarting dev server
4. Clear cache and reinstall

### Quick Links
- Node.js: https://nodejs.org/
- Pandoc: https://pandoc.org/
- React: https://react.dev/
- Vite: https://vitejs.dev/
- Tailwind: https://tailwindcss.com/

---

## ✅ Checklist Before Demo

- [ ] Application runs without errors
- [ ] All 5 role portals load correctly
- [ ] Charts display properly
- [ ] Predictions show SHAP explanations
- [ ] Navigation works between pages
- [ ] Documentation converted to PDF
- [ ] Screenshots prepared
- [ ] Demo flow practiced

---

## 🎉 You're All Set!

**Run this now:**
```bash
npm install
npm run dev
```

**Then open:** http://localhost:5173/

**For PDFs:** Double-click `convert-to-pdf.bat`

**Good luck with your presentation! 🚀**

---

*EduPulse AI - CSE AI-ML Minor Project 2026*  
*Academic Intelligence & Student Success Platform*
