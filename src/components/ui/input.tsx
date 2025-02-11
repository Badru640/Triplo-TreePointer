import React from "react";

export const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = ({ className, ...props }) => (
  <input
    {...props}
    className={`border border-gray-300 rounded-lg p-2 w-full ${className || ""}`}
  />
);
