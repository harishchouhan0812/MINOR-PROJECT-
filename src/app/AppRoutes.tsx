import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AppShell } from '../components/layout';
import { useAuth } from '../hooks/useAuth';
import { LandingPage } from '../pages/LandingPage';

// Student pages
import {
  StudentOverview,
  StudentProfile,
  StudentAttendance,
  StudentSubjects,
  StudentAssignments,
  StudentStudyPlan,
  StudentResources,
  StudentSupport,
} from '../features/student/pages';

// Faculty pages
import {
  FacultyOverview,
  FacultyStudents,
  FacultyStudentDetail,
  FacultyAnalytics,
  FacultyReviewQueue,
  FacultyAlerts,
  FacultyInterventions,
  FacultyReports,
} from '../features/faculty/pages';

// Mentor pages
import {
  MentorOverview,
  MentorStudents,
  MentorCases,
  MentorTasks,
  MentorMeetings,
} from '../features/mentor/pages';

// HOD pages
import {
  HODOverview,
  HODAnalytics,
  HODSubjects,
  HODCases,
  HODModelEvaluation,
  HODReports,
} from '../features/hod/pages';

// Admin pages
import {
  AdminOverview,
  AdminUsers,
  AdminDepartments,
  AdminDataManagement,
  AdminModelMonitoring,
  AdminAudit,
  AdminSettings,
} from '../features/admin/pages';

// Prediction pages
import { PredictionExplanation } from '../features/predictions';

const LoginPage = () => <div className="p-8">Login Page</div>;

// Protected route wrapper
const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

export const AppRoutes: React.FC = () => {
  const { user } = useAuth();

  return (
    <Routes>
      {/* Public routes */}
      <Route path="/" element={user ? <Navigate to={`/${user.role}/overview`} /> : <LandingPage />} />
      <Route path="/login" element={user ? <Navigate to={`/${user.role}/overview`} /> : <LoginPage />} />

      {/* Protected routes */}
      <Route
        element={
          <ProtectedRoute>
            <AppShell />
          </ProtectedRoute>
        }
      >
        {/* Student routes */}
        <Route path="/student/overview" element={<StudentOverview />} />
        <Route path="/student/profile" element={<StudentProfile />} />
        <Route path="/student/attendance" element={<StudentAttendance />} />
        <Route path="/student/subjects" element={<StudentSubjects />} />
        <Route path="/student/assignments" element={<StudentAssignments />} />
        <Route path="/student/study-plan" element={<StudentStudyPlan />} />
        <Route path="/student/resources" element={<StudentResources />} />
        <Route path="/student/support" element={<StudentSupport />} />

        {/* Faculty routes */}
        <Route path="/faculty/overview" element={<FacultyOverview />} />
        <Route path="/faculty/students" element={<FacultyStudents />} />
        <Route path="/faculty/students/:id" element={<FacultyStudentDetail />} />
        <Route path="/faculty/analytics" element={<FacultyAnalytics />} />
        <Route path="/faculty/review-queue" element={<FacultyReviewQueue />} />
        <Route path="/faculty/alerts" element={<FacultyAlerts />} />
        <Route path="/faculty/interventions" element={<FacultyInterventions />} />
        <Route path="/faculty/reports" element={<FacultyReports />} />
        <Route path="/faculty/predictions/:id" element={<PredictionExplanation />} />

        {/* Mentor routes */}
        <Route path="/mentor/overview" element={<MentorOverview />} />
        <Route path="/mentor/students" element={<MentorStudents />} />
        <Route path="/mentor/cases" element={<MentorCases />} />
        <Route path="/mentor/tasks" element={<MentorTasks />} />
        <Route path="/mentor/meetings" element={<MentorMeetings />} />

        {/* HOD routes */}
        <Route path="/hod/overview" element={<HODOverview />} />
        <Route path="/hod/analytics" element={<HODAnalytics />} />
        <Route path="/hod/subjects" element={<HODSubjects />} />
        <Route path="/hod/cases" element={<HODCases />} />
        <Route path="/hod/model-evaluation" element={<HODModelEvaluation />} />
        <Route path="/hod/reports" element={<HODReports />} />

        {/* Admin routes */}
        <Route path="/admin/overview" element={<AdminOverview />} />
        <Route path="/admin/users" element={<AdminUsers />} />
        <Route path="/admin/departments" element={<AdminDepartments />} />
        <Route path="/admin/data-management" element={<AdminDataManagement />} />
        <Route path="/admin/model-monitoring" element={<AdminModelMonitoring />} />
        <Route path="/admin/audit" element={<AdminAudit />} />
        <Route path="/admin/settings" element={<AdminSettings />} />
      </Route>

      {/* Catch-all redirect */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
