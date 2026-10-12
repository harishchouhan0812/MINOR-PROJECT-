import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Card } from '../components/ui';
import { useAuth } from '../hooks/useAuth';
import { UserRole } from '../types';
import { GraduationCap, Users, UserCheck, Briefcase, Shield } from 'lucide-react';

const roleInfo = [
  {
    role: 'student' as UserRole,
    title: 'Student Portal',
    description: 'View your academic progress, attendance, and get personalized support',
    icon: GraduationCap,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
  },
  {
    role: 'faculty' as UserRole,
    title: 'Faculty Portal',
    description: 'Monitor class performance, review alerts, and manage interventions',
    icon: Users,
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
  },
  {
    role: 'mentor' as UserRole,
    title: 'Mentor Portal',
    description: 'Track assigned students, manage support cases, and schedule meetings',
    icon: UserCheck,
    color: 'text-green-600',
    bgColor: 'bg-green-50',
  },
  {
    role: 'hod' as UserRole,
    title: 'HOD Portal',
    description: 'View department analytics, monitor model performance, and generate reports',
    icon: Briefcase,
    color: 'text-orange-600',
    bgColor: 'bg-orange-50',
  },
  {
    role: 'admin' as UserRole,
    title: 'Admin Portal',
    description: 'Manage users, configure system settings, and monitor data quality',
    icon: Shield,
    color: 'text-red-600',
    bgColor: 'bg-red-50',
  },
];

export const LandingPage: React.FC = () => {
  const { switchRole } = useAuth();
  const navigate = useNavigate();

  const handleRoleSelect = async (role: UserRole) => {
    switchRole(role);
    // Small delay to ensure state updates before navigation
    setTimeout(() => {
      navigate(`/${role}/overview`);
    }, 100);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-2xl flex items-center justify-center">
              <span className="text-white font-bold text-2xl">EP</span>
            </div>
            <h1 className="text-5xl font-bold text-gray-900">EduPulse AI</h1>
          </div>
          <p className="text-xl text-gray-600 mb-2">
            Academic Intelligence & Student Success Platform
          </p>
          <p className="text-sm text-gray-500">
            CSE AI-ML Minor Project 2026
          </p>
        </div>

        {/* Demo notice */}
        <div className="max-w-3xl mx-auto mb-8">
          <Card className="bg-purple-50 border-purple-200">
            <div className="flex items-start gap-3">
              <div className="text-purple-600 mt-0.5">
                <Shield size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-purple-900 mb-1">
                  Demo Mode
                </h3>
                <p className="text-sm text-purple-800">
                  This is a demonstration platform using synthetic academic data. 
                  Select a role below to explore different user experiences. 
                  No authentication required for demo purposes.
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Role selection */}
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
            Select Your Role
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {roleInfo.map((item) => {
              const Icon = item.icon;
              return (
                <Card
                  key={item.role}
                  className="cursor-pointer transition-all hover:shadow-lg"
                  hover
                  onClick={() => handleRoleSelect(item.role)}
                >
                  <div className="text-center">
                    <div
                      className={`w-16 h-16 mx-auto mb-4 rounded-full ${item.bgColor} flex items-center justify-center`}
                    >
                      <Icon className={item.color} size={32} />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">
                      {item.description}
                    </p>
                    <Button fullWidth size="sm">
                      Enter Portal
                    </Button>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Features */}
        <div className="max-w-4xl mx-auto mt-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
            Platform Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="text-center">
              <h3 className="font-semibold text-gray-900 mb-2">
                📊 Academic Analytics
              </h3>
              <p className="text-sm text-gray-600">
                Real-time tracking of attendance, assessments, and performance trends
              </p>
            </Card>
            <Card className="text-center">
              <h3 className="font-semibold text-gray-900 mb-2">
                🤖 ML Predictions
              </h3>
              <p className="text-sm text-gray-600">
                Random Forest model with SHAP explainability for academic risk assessment
              </p>
            </Card>
            <Card className="text-center">
              <h3 className="font-semibold text-gray-900 mb-2">
                🎯 Smart Interventions
              </h3>
              <p className="text-sm text-gray-600">
                Coordinated support workflow from alerts to case closure
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
