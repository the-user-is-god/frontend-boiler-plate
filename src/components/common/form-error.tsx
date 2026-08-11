import React from "react";

interface FormErrorProps {
  message?: string;
}

export function FormError({ message }: FormErrorProps) {
  if (!message) return null;
  return (
    <p className="text-xs font-semibold text-red-500 mt-1 animate-in fade-in slide-in-from-top-1 duration-150">
      {message}
    </p>
  );
}
