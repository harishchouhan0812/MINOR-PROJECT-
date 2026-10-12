import React from 'react';
import { PageHeader, SyntheticDataLabel, StatCard } from '../../../components/shared';
import { Users, Database, Activity, Shield } from 'lucide-react';
import { demoUsers, students, subjects } from '../../../data';

export const AdminOverview: React.FC = () => {
  return (
    <div>
      <PageHeader title="Admin Dashboard" description="System Overview" action={<SyntheticDataLabel />} />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <StatCard title="Total Users" value={demoUsers.length} icon={Users} iconColor="text-blue-600" />
        <StatCard title="Students" value={students.length} icon={Database} iconColor="text-purple-600" />
        <StatCard title="Subjects" value={subjects.length} icon={Activity} iconColor="text-green-600" />
        <StatCard title="System Status" value="Active" icon={Shield} iconColor="text-teal-600" />
      </div>
    </div>
  );
};
