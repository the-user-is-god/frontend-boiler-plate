// src/app/page.tsx
import { env } from "@/config/env";
import { APP_CONFIG } from "@/config/app";

export default function HomePage() {
  return (
    <main className="p-8 font-sans">
      <h1 className="text-2xl font-bold mb-4">{APP_CONFIG.name}</h1>

      <div className="p-4 bg-gray-50 border rounded-lg max-w-md">
        <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
          Environment Checkpoint
        </h2>
        <p className="text-sm mb-1">
          <strong>Environment Mode:</strong> {env.environment}
        </p>
        <p className="text-sm">
          <strong>Connected API Target:</strong> {env.apiUrl}
        </p>
      </div>
    </main>
  );
}
