import React from "react";

interface PageContainerProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Standard content wrapper enforcing global canvas width rules across all dashboard modules.
 */
export function PageContainer({
  children,
  className = "",
}: PageContainerProps) {
  return (
    <div
      className={`w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 ${className}`}
    >
      {children}
    </div>
  );
}
