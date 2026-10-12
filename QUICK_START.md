# EduPulse AI - Quick Start Guide

## 🚀 Running the Application

### Prerequisites
- Node.js (v18 or higher)
- npm (v9 or higher)

### Step-by-Step Instructions

1. **Navigate to Project Directory**
   ```bash
   cd edupulse-ai
   ```

2. **Install Dependencies** (if not already installed)
   ```bash
   npm install
   ```

3. **Start Development Server**
   ```bash
   npm run dev
   ```

4. **Open Application**
   - Open your browser
   - Navigate to: `http://localhost:5173/`
   - The application will automatically reload on code changes

5. **Select a Role**
   - Click on any role card (Student, Faculty, Mentor, HOD, or Admin)
   - Explore the role-specific dashboard

### Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run tests
npm test

# Type checking
npm run type-check

# Lint code
npm run lint
```

## 🎯 Demo Workflow

### As a Student
1. Click **Student Portal**
2. View your dashboard with attendance and performance charts
3. Navigate to **Attendance** → See detailed subject-wise tracking
4. Visit **Subjects** → View marks and assessments
5. Go to **Support** → See support requests and create new ones

### As a Faculty Member
1. Click **Faculty Portal**
2. View overview with alerts and class statistics
3. Navigate to **Students** → Search and browse student directory
4. Click on a student → View detailed profile with predictions
5. Click **View Details** on a prediction → See SHAP explanation
6. Go to **Alerts** → Manage academic alerts
7. Visit **Interventions** → Create and track support cases

### As a Mentor
1. Click **Mentor Portal**
2. View assigned students and active cases
3. Navigate to **Cases** → Manage support interventions
4. Track follow-up tasks and meetings

### As an HOD
1. Click **HOD Portal**
2. View department-wide analytics
3. See aggregate performance metrics
4. Review model evaluation statistics
5. Access comprehensive reports

### As an Administrator
1. Click **Admin Portal**
2. View system overview
3. Manage demo users (simulation)
4. Review data quality metrics
5. Monitor model versions

## 🔧 Troubleshooting

### Port Already in Use
If port 5173 is busy:
```bash
# Kill the process using port 5173
netstat -ano | findstr :5173
taskkill /PID <PID> /F

# Or run on a different port
npm run dev -- --port 3000
```

### Dependencies Not Installing
```bash
# Clear npm cache
npm cache clean --force

# Remove node_modules and reinstall
rm -r -force node_modules
npm install
```

### Application Not Loading
1. Hard refresh browser: `Ctrl + Shift + R`
2. Clear browser cache
3. Check browser console (F12) for errors
4. Restart development server

### Hot Module Replacement Issues
```bash
# Restart the dev server
# Press Ctrl+C to stop
npm run dev
```

## 📱 Browser Support

- Chrome (recommended)
- Firefox
- Edge
- Safari (macOS)

## 🎓 Key Features to Demonstrate

1. **Role-Based Dashboards** - Each role has a unique interface
2. **Academic Analytics** - Charts showing attendance and performance
3. **ML Predictions** - View student risk predictions with explanations
4. **SHAP Explainability** - See feature contributions to predictions
5. **Alert Workflow** - End-to-end intervention management
6. **Responsive Design** - Works on desktop, tablet, and mobile
7. **Synthetic Data** - All data is clearly marked as demonstration data

## 📊 Sample Demo Accounts

The application includes these demo users:

### Students
- **STU001** - Rahul Sharma (CSE, Semester 5)
- **STU002** - Priya Patel (CSE, Semester 5)
- **STU003** - Arjun Kumar (CSE, Semester 5) - Has predictions

### Faculty
- **FAC001** - Dr. Amit Verma (CSE Department)
- **FAC002** - Dr. Sneha Gupta (CSE Department)

### Mentors
- **MEN001** - Dr. Kavita Sharma (CSE Department)
- **MEN002** - Prof. Suresh Nair (CSE Department)

### HOD
- **HOD001** - Dr. Ramesh Krishnan (CSE Department)

### Admin
- **ADM001** - Sunita Desai (System Administrator)

## 💡 Best Demonstration Path

1. **Start as Faculty** → See the big picture
2. **View Student STU003** → This student has predictions
3. **Click "View Details"** → See SHAP explanation
4. **Create an Alert** → Demonstrate intervention workflow
5. **Switch to Mentor** → Show case management
6. **Switch to Student** → Show student perspective
7. **Switch to HOD** → Show department analytics
8. **Switch to Admin** → Show system management

## 🎯 Project Highlights

- ✅ 50+ React components
- ✅ 35+ routes across 5 user roles
- ✅ ML integration with Random Forest (Week 5 scope)
- ✅ SHAP explainability visualizations
- ✅ Real-time charts with Recharts
- ✅ Complete alert and intervention workflow
- ✅ Responsive design with Tailwind CSS
- ✅ TypeScript for type safety
- ✅ Local storage for demo persistence
- ✅ Synthetic academic data

## 📞 Support

For issues or questions:
1. Check the browser console (F12) for errors
2. Review the full README.md
3. Check PROJECT_STATUS.md for implementation details
4. Review COMPLETION_SUMMARY.md for features overview
