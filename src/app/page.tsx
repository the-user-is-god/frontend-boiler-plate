// src/app/page.tsx
"use client";

import { LoginForm } from "@/features/auth/components/login-form";
import { useCurrentUser } from "@/features/auth/hooks/use-current-user";

export default function HomePage() {
  const { isAuthenticated, user, isLoading } = useCurrentUser();

  if (isLoading)
    return (
      <div className="p-8 text-center text-sm">
        Validating cookie matrices...
      </div>
    );

  return (
    <main className="min-h-screen bg-zinc-50 flex flex-col items-center justify-center p-4">
      {isAuthenticated ? (
        <div className="p-6 bg-white border rounded-xl shadow-sm text-sm text-center">
          Authenticated as <strong>{user?.name}</strong>. Core session
          boilerplate ready.
        </div>
      ) : (
        <LoginForm />
      )}
    </main>
  );
}
