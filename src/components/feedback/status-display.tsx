import React from "react";

interface StatusDisplayProps {
  variant: "loading" | "error" | "empty";
  title?: string;
  description?: string;
  action?: React.ReactNode;
}

/**
 * Centrally managed status visual layout.
 * Ensures consistent look and feel across tables, charts, and content panels.
 */
export function StatusDisplay({
  variant,
  title,
  description,
  action,
}: StatusDisplayProps) {
  const defaults = {
    loading: {
      title: "Loading...",
      description: "Fetching fresh data from our servers.",
    },
    error: {
      title: "Something went wrong",
      description: "We failed to retrieve this content. Please try again.",
    },
    empty: {
      title: "No results found",
      description: "There is nothing to display here right now.",
    },
  };

  const current = defaults[variant];

  return (
    <div className="flex flex-col items-center justify-center p-8 text-center border-2 border-dashed rounded-lg bg-card/50 min-h-60">
      {variant === "loading" && (
        <div className="w-8 h-8 mb-4 border-4 border-primary border-t-transparent rounded-full animate-spin" />
      )}

      <h3 className="text-lg font-semibold tracking-tight text-foreground">
        {title || current.title}
      </h3>

      <p className="mt-1 text-sm text-muted-foreground max-w-sm">
        {description || current.description}
      </p>

      {action && <div className="mt-4">{action}</div>}
    </div>
  );
}
