// src/app/page.tsx
import { PageContainer, PageHeader, StatusDisplay } from "@/components";

export default function HomePage() {
  return (
    <PageContainer>
      <PageHeader
        title="Inventory Matrix"
        description="Monitor system analytics and data connections downstream."
        action={
          <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-medium hover:bg-primary/90 transition-colors">
            Trigger Action
          </button>
        }
      />

      <div className="grid gap-6">
        <StatusDisplay
          variant="empty"
          title="No Active Connection Pools"
          description="Initialize your Express backend endpoint configs before scaling migrations."
        />
      </div>
    </PageContainer>
  );
}
