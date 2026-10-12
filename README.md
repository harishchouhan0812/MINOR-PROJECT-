# EduPulse AI - Academic Intelligence Platform

A comprehensive academic intelligence and student success platform built for CSE AI-ML Minor Project 2026.

## 🎯 Project Overview

EduPulse AI is a multipage web application that demonstrates how colleges can monitor academic progress, identify students who may benefit from additional support, explain model predictions, coordinate faculty interventions, and track follow-up activities.

## ✨ Features

### Core Functionality
- **Multi-Role Dashboards**: Separate portals for Students, Faculty, Mentors, HOD, and Administrators
- **Academic Analytics**: Real-time tracking of attendance, assessments, and performance
- **ML Predictions**: Random Forest model with SHAP explainability (Week 5 implementation)
- **Smart Interventions**: Complete workflow from alert creation to case closure
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices

### User Roles

#### 👨‍🎓 Student Portal
- Personal academic dashboard with key metrics
- Attendance tracking by subject
- Subject-wise performance and grades
- Support request system
- Study resources access

#### 👨‍🏫 Faculty Portal
- Class performance analytics
- Student directory with detailed profiles
- Academic review queue
- Alert management
- Intervention coordination

#### 👨‍💼 Mentor Portal
- Assigned student tracking
- Support case management
- Task and meeting schedules
- Progress monitoring

#### 🏢 HOD Portal
- Department-wide analytics
- Subject performance comparison
- Model evaluation metrics
- Aggregate reports

#### ⚙️ Administrator Portal
- User management
- Data quality monitoring
- Model performance tracking
- System configuration

## 🛠️ Technology Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router v6
- **Charts**: Recharts
- **Icons**: Lucide React
- **State**: React Context + localStorage
- **Testing**: Vitest + React Testing Library

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Setup Steps

1. **Clone the repository** (or navigate to the project directory)
   ```bash
   cd edupulse-ai
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   - The application will be available at `http://localhost:5173`
   - Select a role from the landing page to explore different user experiences

## 🚀 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm test` - Run tests

## 🎭 Demo Usage

### Quick Start

1. Open the application in your browser
2. You'll see the landing page with 5 role cards
3. Click any role card to enter that portal (no authentication required for demo)
4. Explore the features specific to each role

### Demo Users

The application includes pre-configured demo users:

- **Student**: Rahul Sharma (STU001), Priya Patel (STU002), Arjun Kumar (STU003)
- **Faculty**: Dr. Amit Verma (FAC001), Dr. Sneha Gupta (FAC002)
- **Mentor**: Dr. Kavita Sharma (MEN001)
- **HOD**: Dr. Ramesh Krishnan (HOD001)
- **Admin**: Sunita Desai (ADM001)

## 📊 Machine Learning Component (Week 5)

### Model Details
- **Algorithm**: Random Forest Classifier
- **Target**: Predicting academic risk (course failure probability)
- **Features**: 
  - Attendance percentage
  - Assessment scores
  - Assignment completion rate
  - Previous academic performance
- **Explainability**: SHAP values for feature contributions
- **Metrics**: Accuracy, Precision, Recall, F1-Score, ROC-AUC

### Current Implementation
- Precomputed predictions stored as JSON
- Clear labeling as "Illustrative Example"
- Feature contribution visualization
- Uncertainty notices

## 🔒 Important Notes

### Data & Privacy
- **All data is synthetic** and for demonstration purposes only
- No real student information is used or stored
- Browser localStorage is used only for demo state persistence
- No backend database or server required for initial version

### Limitations
- This is a frontend-only demonstration
- Authentication is simulated (no real security)
- ML predictions are illustrative examples
- Not connected to live institutional systems

### Responsible AI
- Model predictions require human review
- Not used as sole basis for decisions
- Uncertainty clearly communicated
- No permanent risk labels assigned

## 📁 Project Structure

```
edupulse-ai/
├── src/
│   ├── app/               # App setup, routing, auth context
│   ├── components/
│   │   ├── charts/        # Recharts visualizations
│   │   ├── layout/        # Navigation, sidebar, topbar
│   │   ├── shared/        # Reusable components
│   │   └── ui/            # Base UI components
│   ├── data/              # Synthetic demo data
│   ├── features/          # Feature-specific pages
│   │   ├── student/
│   │   ├── faculty/
│   │   ├── mentor/
│   │   ├── hod/
│   │   └── admin/
│   ├── hooks/             # Custom React hooks
│   ├── types/             # TypeScript type definitions
│   ├── utils/             # Utility functions
│   └── main.tsx           # Application entry point
├── public/                # Static assets
└── package.json
```

## 🎓 Academic Context

### Project Timeline (Weeks 1-5)
- **Week 1**: Project setup and data acquisition strategy
- **Week 2**: Data preprocessing and EDA
- **Week 3**: Feature selection and initial model design
- **Week 4**: Logistic Regression and Decision Tree implementation
- **Week 5**: Random Forest and SVM model implementation ✅ (Current)

### Future Enhancements (Post Week 5)
- Week 6: Model optimization and hyperparameter tuning
- Week 7: SHAP explainability layer
- Week 8-9: RAG intervention module
- Week 10: System integration and UI prototyping

## 📝 Development

### Code Style
- TypeScript for type safety
- Functional components with hooks
- Consistent naming conventions
- Comprehensive comments

### Component Organization
- Feature-based folder structure
- Reusable UI components
- Shared utilities and types
- Clear separation of concerns

## 🤝 Contributing

This is an academic project. For questions or suggestions:
1. Review the project documentation
2. Check existing implementation
3. Follow the established patterns

## 📄 License

Academic Project - CSE AI-ML Minor Project 2026

## 🙏 Acknowledgments

- Department of Computer Science and Engineering
- Faculty advisors and mentors
- Open-source community for amazing tools

---

**Note**: This is a demonstration platform using synthetic data. All predictions and analytics are for educational purposes only.
