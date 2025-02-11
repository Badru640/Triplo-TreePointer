import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input: React.FC<InputProps> = ({ className, ...props }) => (
  <input
    {...props}
    className={`border border-gray-300 rounded-lg p-2 w-full ${className}`}
  />
);
