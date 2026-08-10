// src/app/page.tsx
"use client";

import {
  useMeQuery,
  useLogoutMutation,
} from "@/features/auth/api/auth.queries";
import { StatusDisplay } from "@/components";

export default function HomePage() {
  const { data: user, isLoading, isError } = useMeQuery();
  const logoutMutation = useLogoutMutation();

  if (isLoading) {
    return (
      <StatusDisplay variant="loading" title="Authenticating Session..." />
    );
  }

  return (
    <main className="p-8 max-w-md mx-auto space-y-4">
      <h1 className="text-xl font-bold">Current-User Session Matrix</h1>

      {user ? (
        <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-900">
          <p>
            <strong>Status:</strong> Authenticated securely via HTTP-Only Cookie
          </p>
          <p className="mt-2 text-sm">
            Welcome back, <strong>{user.name}</strong> ({user.email})
          </p>

          <button
            onClick={() => logoutMutation.mutate()}
            className="mt-4 bg-red-600 hover:bg-red-700 text-white text-xs px-3 py-1.5 rounded transition-colors"
            disabled={logoutMutation.isPending}
          >
            {logoutMutation.isPending ? "Wiping Session..." : "Sign Out"}
          </button>
        </div>
      ) : (
        <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg text-amber-900">
          <p>
            <strong>Status:</strong> Guest Mode
          </p>
          <p className="text-sm mt-1">
            No active HTTP-only session token caught by the backend.
          </p>
        </div>
      )}
    </main>
  );
}
