'use client';

import * as React from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useVerifyEmailMutation } from '@/features/auth/api/auth.queries';
import { LoadingState, ErrorState } from '@/components';
import { toast } from '@/utils/toast';
import { ROUTES } from '@/config/routes';

export default function VerifyEmailPage() {
  const router = useRouter();
  const params = useParams<{ token: string }>();
  const verifyMutation = useVerifyEmailMutation();
  const triggerRun = React.useRef(false);

  React.useEffect(() => {
    // React 18+ strict mode safety double-trigger guard
    if (triggerRun.current) return;
    if (!params.token) return;

    triggerRun.current = true;

    // Use mutateAsync to get a pure, un-swallowable Promise chain
    verifyMutation
      .mutateAsync(params.token)
      .then(() => {
        toast.success('Account Verified!', 'Your email has been confirmed. Welcome onboard.');
        router.replace(ROUTES.dashboard.home);
      })
      .catch((err) => {
        toast.error(err, 'Email verification failed.');
      });
  }, [params.token, router, verifyMutation]);

  if (verifyMutation.isPending) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-zinc-50">
        <LoadingState message="Processing cryptographic verification token..." />
      </div>
    );
  }

  if (verifyMutation.isError) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-zinc-50 p-4">
        <ErrorState
          title="Verification Token Invalid"
          message="The link may be expired, altered, or already processed by our servers."
          onRetry={() => window.location.reload()}
        />
      </div>
    );
  }

  return null;
}
