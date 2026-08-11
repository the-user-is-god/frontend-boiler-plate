// src/app/(dashboard)/profile/page.tsx
"use client";

import { PageContainer, PageHeader } from "@/components";
import { ExampleManager } from "@/features/example"; // Pure, encapsulated boundary import

export default function ProfilePage() {
  return (
    <PageContainer>
      <PageHeader
        title="Reference Sandbox Canvas"
        description="Verify component composition and clean form abstraction metrics."
      />

      <ExampleManager />
    </PageContainer>
  );
}
