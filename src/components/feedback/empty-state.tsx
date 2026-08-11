import React from "react";

interface EmptyStateProps {
  title?: string;
  description?: string;
  action?: React.ReactNode;
}

export function EmptyState({
  title = "No operational entities discovered",
  description,
  action,
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center p-12 text-center rounded-xl border-2 border-dashed border-zinc-200 bg-white min-h-[200px]">
      <h4 className="text-xs font-bold text-zinc-900 tracking-tight">
        {title}
      </h4>
      {description && (
        <p className="mt-1 text-xs text-zinc-400 max-w-xs">{description}</p>
      )}
      {action && <div className="mt-4">{action}</div>}
    </div>
  );
}
