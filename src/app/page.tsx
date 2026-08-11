'use client';

import Link from 'next/link';
import { PageContainer } from '@/components';
import { ROUTES } from '@/config/routes';
import { APP_CONFIG } from '@/config/app';

/**
 * Clean, generic landing view shell for the boilerplate template workspace.
 * Devoid of arbitrary test loops and context dependencies.
 */
export default function HomePage() {
  return (
    <PageContainer className="flex min-h-[80vh] flex-col items-center justify-center text-center">
      <div className="max-w-md space-y-4">
        <h1 className="text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl">
          {APP_CONFIG.name}
        </h1>
        <p className="text-sm leading-relaxed text-zinc-500">{APP_CONFIG.description}</p>

        <div className="flex flex-col justify-center gap-2 pt-4 sm:flex-row">
          <Link
            href={ROUTES.auth.login}
            className="inline-flex items-center justify-center rounded-lg bg-zinc-950 px-5 py-2.5 text-xs font-semibold text-white shadow-sm transition-colors hover:bg-zinc-800"
          >
            Access Gateway Console
          </Link>
          <Link
            href={ROUTES.auth.register}
            className="inline-flex items-center justify-center rounded-lg border border-zinc-200 bg-white px-5 py-2.5 text-xs font-semibold text-zinc-700 transition-colors hover:bg-zinc-50"
          >
            Create Developer Space
          </Link>
        </div>
      </div>
    </PageContainer>
  );
}
