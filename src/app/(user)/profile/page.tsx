// src/app/(dashboard)/profile/page.tsx
"use client";

import { PageContainer, PageHeader } from "@/components";
import { ExampleManager } from "@/features/example"; // Pure, encapsulated boundary import
import { ProfileForm, UserList } from "@/features/users";
import { UserFilters } from "@/features/users/components/use-filters";

export default function ProfilePage() {
  return (
    <PageContainer>
      <PageHeader
        title="Reference Sandbox Canvas"
        description="Verify component composition and clean form abstraction metrics."
      />

      <ExampleManager />

      <div className="grid gap-6 md:grid-cols-2 items-start">
        {/* Validates Live Axios Interceptors, Zod validation and React Hook Form workflows */}
        <ProfileForm />

        {/* Validates TanStack Query, Status Displays, custom Error Normalizers and Pagination state systems */}
        <div className="space-y-4">
          <UserFilters /> {/* Inject Input controls */}
          <UserList />
        </div>
      </div>
    </PageContainer>
  );
}
