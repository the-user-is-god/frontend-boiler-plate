import React from "react";

interface ErrorStateProps {
  title?: string;
  message?: string;
  onRetry?: () => void;
}

export function ErrorState({
  title = "Network synchronization breakdown",
  message,
  onRetry,
}: ErrorStateProps) {
  return (
    <div className="flex flex-col items-center justify-center p-8 text-center rounded-xl border border-red-100 bg-red-50/30 min-h-[200px]">
      <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center text-red-600 font-bold text-sm">
        !
      </div>
      <h4 className="mt-3 text-xs font-bold text-zinc-900 tracking-tight">
        {title}
      </h4>
      {message && (
        <p className="mt-1 text-xs text-zinc-500 max-w-xs">{message}</p>
      )}
      {onRetry && (
        <button
          onClick={onRetry}
          className="mt-4 text-[11px] font-semibold bg-white border border-zinc-200 px-3 py-1.5 rounded-md hover:bg-zinc-50 transition-colors shadow-sm"
        >
          Re-evaluate Connection
        </button>
      )}
    </div>
  );
}
