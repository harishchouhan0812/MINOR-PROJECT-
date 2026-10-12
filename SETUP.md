# EduPulse AI - Setup Guide

## Quick Start (5 minutes)

### Step 1: Install Dependencies
```bash
cd edupulse-ai
npm install
```

### Step 2: Start Development Server
```bash
npm run dev
```

### Step 3: Open in Browser
- Navigate to `http://localhost:5173`
- Select a role from the landing page
- Explore the application!

## Detailed Setup

### Prerequisites
- **Node.js**: v16 or higher ([Download](https://nodejs.org/))
- **npm**: Comes with Node.js
- **Modern Browser**: Chrome, Firefox, Safari, or Edge

### Installation Steps

1. **Navigate to project directory**
   ```bash
   cd edupulse-ai
   ```

2. **Install all dependencies**
   ```bash
   npm install
   ```
   This will install:
   - React 18
   - TypeScript
   - Vite
   - Tailwind CSS
   - React Router
   - Recharts
   - Lucide React
   - And all other dependencies

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Access the application**
   - Open your browser
   - Go to `http://localhost:5173`
   - You should see the EduPulse AI landing page

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint for code quality |
| `npm test` | Run test suite |

## Using the Application

### Demo Mode
The application runs in **demo mode** with synthetic data. No authentication is required.

### Accessing Different Roles

1. **Student Portal**
   - Click "Student Portal" on the landing page
   - Explore attendance, grades, and support features
   - Pre-configured as Rahul Sharma (STU001)

2. **Faculty Portal**
   - Click "Faculty Portal"
   - View student directory, alerts, and analytics
   - Create interventions and manage cases

3. **Mentor Portal**
   - Click "Mentor Portal"
   - See assigned students and support cases
   - Manage tasks and meetings

4. **HOD Portal**
   - Click "HOD Portal"
   - View department-wide analytics
   - Monitor model performance

5. **Admin Portal**
   - Click "Admin Portal"
   - System overview and configuration
   - User and data management

### Switching Roles
- Click your profile icon (top right)
- Click "Logout"
- Select a different role from the landing page

## Project Structure

```
edupulse-ai/
├── src/
│   ├── app/                 # Application setup
│   ├── components/          # Reusable components
│   │   ├── charts/          # Chart components
│   │   ├── layout/          # Layout components
│   │   ├── shared/          # Shared components
│   │   └── ui/              # Base UI components
│   ├── data/                # Synthetic demo data
│   ├── features/            # Feature modules
│   │   ├── student/         # Student portal
│   │   ├── faculty/         # Faculty portal
│   │   ├── mentor/          # Mentor portal
│   │   ├── hod/             # HOD portal
│   │   └── admin/           # Admin portal
│   ├── hooks/               # Custom React hooks
│   ├── types/               # TypeScript definitions
│   ├── utils/               # Utility functions
│   └── main.tsx             # Entry point
├── public/                  # Static assets
└── package.json             # Dependencies
```

## Features by Role

### ✅ Fully Implemented
- **Landing Page**: Role selection with descriptions
- **Student Portal**: Overview, Profile, Attendance, Subjects, Support
- **Faculty Portal**: Overview, Student Directory, Student Details, Alerts
- **Mentor Portal**: Overview with stats
- **HOD Portal**: Overview with department metrics
- **Admin Portal**: Overview with system stats

### 🚧 Placeholder Pages (Ready for Enhancement)
- Analytics dashboards
- Detailed reporting
- Advanced search and filtering
- Case management workflows
- Meeting scheduling
- Data import/export

## Troubleshooting

### Port Already in Use
If port 5173 is already in use:
```bash
npm run dev -- --port 3000
```

### Dependencies Not Installing
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Reinstall
npm install
```

### Build Errors
```bash
# Check Node version
node --version  # Should be v16+

# Update npm
npm install -g npm@latest
```

### Page Not Loading
1. Clear browser cache
2. Check browser console for errors
3. Verify server is running (`npm run dev`)
4. Try incognito/private mode

## Demo Data

The application includes synthetic data for:
- 8 students across departments
- 12 demo users (students, faculty, mentors, HOD, admin)
- 8 subjects for CSE department
- Attendance records with various patterns
- Assessment results showing different performance levels
- 4 ML predictions with SHAP explanations
- 6 academic alerts
- 4 support cases with tasks and meetings

All data is **synthetic** and for demonstration only.

## Development Tips

### Hot Reload
Changes to source files automatically reload the browser.

### TypeScript
All code is fully typed. Check `src/types/` for type definitions.

### Styling
Uses Tailwind CSS. Customize in `tailwind.config.js`.

### Adding New Pages
1. Create component in appropriate `features/` folder
2. Add route in `src/app/AppRoutes.tsx`
3. Update navigation in `src/components/layout/Sidebar.tsx`

## Production Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

The build output will be in the `dist/` directory.

## Next Steps

1. **Explore All Roles**: Try each portal to see different perspectives
2. **Review Code**: Check implementation patterns
3. **Extend Features**: Add more pages or enhance existing ones
4. **Connect Backend**: Add API integration when ready
5. **Deploy**: Host on Netlify, Vercel, or GitHub Pages

## Support

For issues or questions:
1. Check this guide and README.md
2. Review existing code patterns
3. Check console for error messages

## License

Academic Project - CSE AI-ML Minor Project 2026

---

**Ready to explore?** Run `npm run dev` and visit `http://localhost:5173`! 🚀
