"use client";

import { PageContainer, PageHeader } from "@/components";
import { useCurrentUser } from "@/features/auth/hooks/use-current-user";

export default function ProfilePage() {
  const { user } = useCurrentUser();

  return (
    <PageContainer>
      <PageHeader
        title="Account Configuration"
        description="Securely manage your personal developer parameters."
      />
      <div className="p-6 border rounded-xl bg-zinc-50/50 max-w-md text-black">
        <h3 className="font-semibold text-sm text-zinc-500 uppercase tracking-wide">
          Identity Verified
        </h3>
        <p className="mt-2 text-sm">
          <strong>Account Name:</strong> {user?.name}
        </p>
        <p className="text-sm">
          <strong>Email Node:</strong> {user?.email}
        </p>
      </div>
    </PageContainer>
  );
}
