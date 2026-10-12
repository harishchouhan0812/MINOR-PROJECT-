import React from 'react';

type BadgeVariant =
  | 'default'
  | 'success'
  | 'warning'
  | 'error'
  | 'info'
  | 'purple'
  | 'gray';

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
  size?: 'sm' | 'md';
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  className = '',
  size = 'md',
}) => {
  const baseClasses =
    'inline-flex items-center font-medium rounded-full';

  const sizeClasses = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-2.5 py-0.5 text-sm',
  };

  const variantClasses: Record<BadgeVariant, string> = {
    default: 'bg-gray-100 text-gray-800',
    success: 'bg-green-100 text-green-800',
    warning: 'bg-yellow-100 text-yellow-800',
    error: 'bg-red-100 text-red-800',
    info: 'bg-blue-100 text-blue-800',
    purple: 'bg-purple-100 text-purple-800',
    gray: 'bg-gray-100 text-gray-600',
  };

  return (
    <span
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </span>
  );
};

// Status-specific badge components
interface StatusBadgeProps {
  status: string;
  className?: string;
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({
  status,
  className = '',
}) => {
  const getVariant = (status: string): BadgeVariant => {
    const statusLower = status.toLowerCase();
    if (
      statusLower.includes('completed') ||
      statusLower.includes('resolved') ||
      statusLower.includes('active')
    )
      return 'success';
    if (
      statusLower.includes('progress') ||
      statusLower.includes('open') ||
      statusLower.includes('acknowledged')
    )
      return 'info';
    if (
      statusLower.includes('pending') ||
      statusLower.includes('review') ||
      statusLower.includes('new')
    )
      return 'warning';
    if (
      statusLower.includes('cancelled') ||
      statusLower.includes('dismissed') ||
      statusLower.includes('closed')
    )
      return 'gray';
    return 'default';
  };

  return (
    <Badge variant={getVariant(status)} className={className}>
      {status}
    </Badge>
  );
};
