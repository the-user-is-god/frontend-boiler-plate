import React from "react";

interface LoadingStateProps {
  message?: string;
}

export function LoadingState({
  message = "Synchronizing secure data structures...",
}: LoadingStateProps) {
  return (
    <div className="flex flex-col items-center justify-center p-12 text-center rounded-xl border border-zinc-100 bg-zinc-50/50 min-h-[200px] animate-in fade-in duration-200">
      <div className="w-6 h-6 border-2 border-zinc-950 border-t-transparent rounded-full animate-spin" />
      <p className="mt-3 text-xs font-medium text-zinc-500 tracking-tight">
        {message}
      </p>
    </div>
  );
}
