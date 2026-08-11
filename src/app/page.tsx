// src/app/page.tsx
'use client';

import { useCurrentUser } from '@/features/auth/hooks/use-current-user';
import { useAuthUiStore } from '@/features/auth/store/auth-ui.store';

export default function HomePage() {
  // Server State Managed by TanStack via HTTP-Only Cookies
  const { user, isAuthenticated } = useCurrentUser();

  // Client UI State Managed by Zustand
  const { isAuthModalOpen, setAuthModalOpen } = useAuthUiStore();

  return (
    <main className="mx-auto max-w-md space-y-4 p-8">
      <h1 className="text-xl font-bold">State Separation Core</h1>

      <div className="space-y-2 rounded-xl border bg-white p-4 text-black">
        <p className="text-sm">
          <strong>Server Cache (User Authenticated):</strong>{' '}
          {isAuthenticated ? `Yes (${user?.name})` : 'No'}
        </p>
        <p className="text-sm">
          <strong>Zustand Store (Auth Overlay Visible):</strong> {isAuthModalOpen ? 'Yes' : 'No'}
        </p>
      </div>

      <div className="flex gap-2">
        <button
          onClick={() => setAuthModalOpen(!isAuthModalOpen)}
          className="rounded bg-zinc-900 px-3 py-1.5 text-xs font-medium text-white"
        >
          Toggle Zustand Modal Flag
        </button>
      </div>
    </main>
  );
}
