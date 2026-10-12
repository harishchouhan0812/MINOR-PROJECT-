import React from 'react';
import { PageHeader, SyntheticDataLabel, StatCard } from '../../../components/shared';
import { Users, BookOpen, TrendingUp, Briefcase } from 'lucide-react';
import { students, subjects, initialCases } from '../../../data';

export const HODOverview: React.FC = () => {
  const deptStudents = students.filter(s => s.department === 'CSE');
  const deptSubjects = subjects.filter(s => s.department === 'CSE');
  const avgCGPA = deptStudents.reduce((sum, s) => sum + (s.cgpa || 0), 0) / deptStudents.length;

  return (
    <div>
      <PageHeader title="HOD Dashboard" description="Department Overview" action={<SyntheticDataLabel />} />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <StatCard title="Total Students" value={deptStudents.length} icon={Users} iconColor="text-blue-600" />
        <StatCard title="Subjects" value={deptSubjects.length} icon={BookOpen} iconColor="text-purple-600" />
        <StatCard title="Average CGPA" value={avgCGPA.toFixed(2)} icon={TrendingUp} iconColor="text-green-600" />
        <StatCard title="Active Cases" value={initialCases.length} icon={Briefcase} iconColor="text-orange-600" />
      </div>
    </div>
  );
};
