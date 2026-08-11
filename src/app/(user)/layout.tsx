import { AuthGuard } from "@/features/auth/components/auth-guard";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <AuthGuard>
      <div className="min-h-screen bg-white">
        {/* You can add global shell headers, sidebars, or navbars safely here */}
        <header className="border-b px-6 py-4 flex justify-between bg-zinc-50/50">
          <span className="text-sm font-bold tracking-tight">
            Application Canvas
          </span>
        </header>

        {children}
      </div>
    </AuthGuard>
  );
}
