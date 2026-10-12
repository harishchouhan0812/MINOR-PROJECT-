export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validateMarks = (marks: number, maxMarks: number): boolean => {
  return marks >= 0 && marks <= maxMarks;
};

export const validatePercentage = (percentage: number): boolean => {
  return percentage >= 0 && percentage <= 100;
};

export const validateDate = (dateString: string): boolean => {
  const date = new Date(dateString);
  return date instanceof Date && !isNaN(date.getTime());
};

export const validateFutureDate = (dateString: string): boolean => {
  if (!validateDate(dateString)) return false;
  const date = new Date(dateString);
  const now = new Date();
  return date > now;
};

export const validateRequiredField = (value: any): boolean => {
  if (value === null || value === undefined) return false;
  if (typeof value === 'string') return value.trim().length > 0;
  return true;
};

export const validateRange = (value: number, min: number, max: number): boolean => {
  return value >= min && value <= max;
};
