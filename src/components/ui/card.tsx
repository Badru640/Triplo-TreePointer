import { cn } from '@/utils/cn';
import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, className }) => (
  <div className={cn("bg-white shadow rounded-lg p-4", className)}>
    {children}
  </div>
);

export const CardContent: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="mt-2">{children}</div>
);

export const CardHeader: React.FC<{ title: string }> = ({ title }) => (
  <h2 className="text-lg font-bold">{title}</h2>
);
