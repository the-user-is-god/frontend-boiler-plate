// src/app/page.tsx
"use client";

import { useCurrentUser } from "@/features/auth/hooks/use-current-user";
import { useAuthUiStore } from "@/features/auth/store/auth-ui.store";

export default function HomePage() {
  // Server State Managed by TanStack via HTTP-Only Cookies
  const { user, isAuthenticated } = useCurrentUser();

  // Client UI State Managed by Zustand
  const { isAuthModalOpen, setAuthModalOpen } = useAuthUiStore();

  return (
    <main className="p-8 max-w-md mx-auto space-y-4">
      <h1 className="text-xl font-bold">State Separation Core</h1>

      <div className="p-4 border rounded-xl bg-white space-y-2 text-black">
        <p className="text-sm">
          <strong>Server Cache (User Authenticated):</strong>{" "}
          {isAuthenticated ? `Yes (${user?.name})` : "No"}
        </p>
        <p className="text-sm">
          <strong>Zustand Store (Auth Overlay Visible):</strong>{" "}
          {isAuthModalOpen ? "Yes" : "No"}
        </p>
      </div>

      <div className="flex gap-2">
        <button
          onClick={() => setAuthModalOpen(!isAuthModalOpen)}
          className="bg-zinc-900 text-white px-3 py-1.5 rounded text-xs font-medium"
        >
          Toggle Zustand Modal Flag
        </button>
      </div>
    </main>
  );
}
