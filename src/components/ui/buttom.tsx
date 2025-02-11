import { cn } from '@/utils/cn';
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

export const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', className, ...props }) => {
  const baseClasses = cn(
    "px-4 py-2 rounded-md font-semibold",
    variant === 'primary' ? 'bg-blue-500 text-white' : 'bg-gray-300',
    className
  );

  return (
    <button {...props} className={baseClasses}>
      {children}
    </button>
  );
};
