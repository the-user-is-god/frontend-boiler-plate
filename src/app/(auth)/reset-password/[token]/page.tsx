// src/app/reset-password/page.tsx
import { ResetPasswordForm } from '@/features/auth/components/reset-password-form';
import { Suspense } from 'react';

// 2. Wrap that content in a Suspense boundary inside your main page export
export default function ResetPasswordPage() {
  return (
    <main className="mx-auto max-w-md p-8">
      <Suspense fallback={<p className="text-muted-foreground">Loading form configuration...</p>}>
        <ResetPasswordForm />
      </Suspense>
    </main>
  );
}
