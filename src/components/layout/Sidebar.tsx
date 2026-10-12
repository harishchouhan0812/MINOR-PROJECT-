import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';
import {
  LayoutDashboard,
  User,
  Calendar,
  BookOpen,
  ClipboardList,
  Target,
  Library,
  HelpCircle,
  Users,
  BarChart3,
  ListChecks,
  AlertTriangle,
  FileText,
  Settings,
  Database,
  Activity,
  FileCheck,
  Briefcase,
} from 'lucide-react';
import { UserRole } from '../../types';

export interface NavItem {
  label: string;
  path: string;
  icon: LucideIcon;
  badge?: number;
}

interface SidebarProps {
  userRole: UserRole;
  isOpen: boolean;
  onClose?: () => void;
}

const navigationMap: Record<UserRole, NavItem[]> = {
  student: [
    { label: 'Overview', path: '/student/overview', icon: LayoutDashboard },
    { label: 'Profile', path: '/student/profile', icon: User },
    { label: 'Attendance', path: '/student/attendance', icon: Calendar },
    { label: 'Subjects & Grades', path: '/student/subjects', icon: BookOpen },
    { label: 'Assignments', path: '/student/assignments', icon: ClipboardList },
    { label: 'Study Plan', path: '/student/study-plan', icon: Target },
    { label: 'Resources', path: '/student/resources', icon: Library },
    { label: 'Support', path: '/student/support', icon: HelpCircle },
  ],
  faculty: [
    { label: 'Overview', path: '/faculty/overview', icon: LayoutDashboard },
    { label: 'Students', path: '/faculty/students', icon: Users },
    { label: 'Analytics', path: '/faculty/analytics', icon: BarChart3 },
    { label: 'Review Queue', path: '/faculty/review-queue', icon: ListChecks },
    { label: 'Alerts', path: '/faculty/alerts', icon: AlertTriangle },
    { label: 'Interventions', path: '/faculty/interventions', icon: Briefcase },
    { label: 'Reports', path: '/faculty/reports', icon: FileText },
  ],
  mentor: [
    { label: 'Overview', path: '/mentor/overview', icon: LayoutDashboard },
    { label: 'My Students', path: '/mentor/students', icon: Users },
    { label: 'Cases', path: '/mentor/cases', icon: Briefcase },
    { label: 'Tasks', path: '/mentor/tasks', icon: ListChecks },
    { label: 'Meetings', path: '/mentor/meetings', icon: Calendar },
  ],
  hod: [
    { label: 'Overview', path: '/hod/overview', icon: LayoutDashboard },
    { label: 'Analytics', path: '/hod/analytics', icon: BarChart3 },
    { label: 'Subjects', path: '/hod/subjects', icon: BookOpen },
    { label: 'Cases', path: '/hod/cases', icon: Briefcase },
    { label: 'Model Evaluation', path: '/hod/model-evaluation', icon: Activity },
    { label: 'Reports', path: '/hod/reports', icon: FileText },
  ],
  admin: [
    { label: 'Overview', path: '/admin/overview', icon: LayoutDashboard },
    { label: 'Users', path: '/admin/users', icon: Users },
    { label: 'Departments', path: '/admin/departments', icon: BookOpen },
    { label: 'Data Management', path: '/admin/data-management', icon: Database },
    { label: 'Model Monitoring', path: '/admin/model-monitoring', icon: Activity },
    { label: 'Audit Log', path: '/admin/audit', icon: FileCheck },
    { label: 'Settings', path: '/admin/settings', icon: Settings },
  ],
};

export const Sidebar: React.FC<SidebarProps> = ({ userRole, isOpen, onClose }) => {
  const location = useLocation();
  const navItems = navigationMap[userRole] || [];

  const isActive = (path: string) => {
    return location.pathname === path || location.pathname.startsWith(path + '/');
  };

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-30 h-full w-64 bg-white border-r border-gray-200 transform transition-transform duration-200 ease-in-out lg:translate-x-0 lg:static ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="h-16 flex items-center px-6 border-b border-gray-200">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">EP</span>
              </div>
              <span className="text-xl font-bold text-gray-900">EduPulse AI</span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto py-4 px-3 scrollbar-thin">
            <ul className="space-y-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const active = isActive(item.path);

                return (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      onClick={onClose}
                      className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                        active
                          ? 'bg-primary-50 text-primary-700'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      <Icon size={20} />
                      <span className="flex-1">{item.label}</span>
                      {item.badge !== undefined && item.badge > 0 && (
                        <span className="bg-red-500 text-white text-xs font-semibold px-2 py-0.5 rounded-full">
                          {item.badge}
                        </span>
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-gray-200">
            <div className="text-xs text-gray-500 text-center">
              <p>Minor Project 2026</p>
              <p className="mt-1">CSE AI-ML</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};
