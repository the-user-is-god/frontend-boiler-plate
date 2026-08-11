import { AuthGuard } from '@/features/auth/components/auth-guard';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <AuthGuard>
      <div className="min-h-screen bg-white">
        {/* You can add global shell headers, sidebars, or navbars safely here */}
        <header className="flex justify-between border-b bg-zinc-50/50 px-6 py-4">
          <span className="text-sm font-bold tracking-tight">Application Canvas</span>
        </header>

        {children}
      </div>
    </AuthGuard>
  );
}
