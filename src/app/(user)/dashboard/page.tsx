'use client';

import React, { useState } from 'react';
import {
  Heart,
  Sparkles,
  ShieldCheck,
  Zap,
  CheckCircle2,
  Lock,
  Layers,
  Cpu,
  User,
  Code2,
  Copy,
  Check,
  RefreshCw,
  Bell,
  Terminal,
} from 'lucide-react';
import { useQueryClient } from '@tanstack/react-query';
import { useCurrentUser } from '@/features/auth/hooks/use-current-user';
import { toast } from '@/utils/toast';

export default function DashboardPage() {
  const { user } = useCurrentUser();
  const queryClient = useQueryClient();
  const [copiedCommand, setCopiedCommand] = useState<string | null>(null);

  const handleCopyCommand = (command: string) => {
    navigator.clipboard.writeText(command);
    setCopiedCommand(command);
    toast.success('Copied to Clipboard', `Command "${command}" ready to execute.`);
    setTimeout(() => {
      setCopiedCommand(null);
    }, 2000);
  };

  const handleInvalidateCache = () => {
    queryClient.invalidateQueries();
    toast.info('Cache Refreshed', 'TanStack Query cache invalidated successfully.');
  };

  const cliCommands = [
    { label: 'Start Dev Server', cmd: 'npm run dev' },
    { label: 'Build Production', cmd: 'npm run build' },
    { label: 'Run Linter', cmd: 'npm run lint' },
  ];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-3 duration-500">
      {/* Welcome & Gratitude Hero Card */}
      <section className="relative overflow-hidden rounded-3xl border border-zinc-800/80 bg-zinc-900/60 p-6 shadow-2xl backdrop-blur-xl sm:p-8">
        <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-indigo-500/10 blur-3xl opacity-30" />
        <div className="pointer-events-none absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-purple-500/10 blur-3xl opacity-30" />

        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3.5 py-1.5 text-xs font-semibold text-indigo-300 backdrop-blur-md">
            <Heart className="h-3.5 w-3.5 text-rose-400 fill-rose-400/30 animate-pulse" />
            <span>Gratitude & Welcome Note</span>
          </div>

          <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Welcome back,{' '}
            <span className="text-indigo-400">
              {user?.name || user?.email || 'Valued Tester'}
            </span>
            !
          </h1>

          <p className="text-sm sm:text-base leading-relaxed text-zinc-300">
            Thank you so much for logging in and exploring our starter template! We appreciate your testing and evaluation of this enterprise foundation.
          </p>

          <p className="text-sm text-zinc-400 leading-relaxed">
            This boilerplate is engineered with secure HTTP-only cookie authentication, Zod validation, TanStack Query caching, and normalized error gateways.
          </p>

          <div className="pt-2 flex flex-wrap gap-3">
            <div className="flex items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-950/60 px-4 py-2.5 text-xs font-semibold text-emerald-400 shadow-sm">
              <CheckCircle2 className="h-4 w-4 text-emerald-400" />
              <span>Authentication Session Active</span>
            </div>
            <div className="flex items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-950/60 px-4 py-2.5 text-xs font-semibold text-indigo-300 shadow-sm">
              <Zap className="h-4 w-4 text-indigo-400" />
              <span>All Systems Operational</span>
            </div>
          </div>
        </div>
      </section>

      {/* Row 1: Identity & Context Card + Interactive Architecture Sandbox */}
      <section className="grid gap-6 md:grid-cols-3">
        {/* Identity & Context Card */}
        <div className="rounded-2xl border border-zinc-800/80 bg-zinc-900/60 p-6 shadow-xl backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:border-zinc-700 md:col-span-1 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-400 ring-1 ring-indigo-500/20">
                <User className="h-6 w-6" />
              </div>
              <div>
                <h2 className="text-base font-bold text-white">Tester Identity</h2>
                <p className="text-xs text-zinc-400 font-semibold">Active Session Specs</p>
              </div>
            </div>

            <div className="mt-6 space-y-4 border-t border-zinc-800/80 pt-4">
              <div>
                <span className="text-xs font-semibold text-zinc-400 block">User Name</span>
                <span className="text-sm font-semibold text-zinc-200">{user?.name || 'Not Specified'}</span>
              </div>
              <div>
                <span className="text-xs font-semibold text-zinc-400 block">Registered Email</span>
                <span className="text-sm font-semibold text-zinc-200 truncate block">{user?.email || 'Unknown'}</span>
              </div>
              <div>
                <span className="text-xs font-semibold text-zinc-400 block mb-1">Session Security</span>
                <span className="inline-flex items-center gap-2 rounded-lg bg-emerald-500/10 px-3 py-1.5 text-xs font-semibold text-emerald-400 ring-1 ring-emerald-500/20">
                  <Lock className="h-3.5 w-3.5" />
                  HTTP-Only Cookie Protected
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Architecture Sandbox Card */}
        <div className="rounded-2xl border border-zinc-800/80 bg-zinc-900/60 p-6 shadow-xl backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:border-zinc-700 md:col-span-2 space-y-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400 ring-1 ring-purple-500/20">
                  <Zap className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="text-base font-bold text-white">Interactive System Inspector</h2>
                  <p className="text-xs text-zinc-400 font-semibold">Test runtime hooks & global feedback gatekeeper</p>
                </div>
              </div>
              <span className="rounded-full border border-zinc-800 bg-zinc-950 px-3 py-1 text-xs font-semibold text-zinc-300">
                Sandbox Mode
              </span>
            </div>

            <p className="text-sm text-zinc-300 leading-relaxed mt-4">
              Use these interactive utility actions to test the unified Sonner toast notifications and TanStack Query state engine in real-time.
            </p>

            <div className="grid gap-3 sm:grid-cols-3 pt-4">
              <button
                type="button"
                onClick={() => toast.success('Success Event', 'Operation completed without errors.')}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-zinc-800 bg-zinc-950/80 px-4 py-2.5 text-xs font-semibold text-emerald-400 transition-all duration-200 hover:bg-emerald-950/30 hover:border-emerald-500/40 hover:-translate-y-0.5"
              >
                <Bell className="h-4 w-4" />
                <span>Test Success Toast</span>
              </button>

              <button
                type="button"
                onClick={() => toast.error(new Error('Sample API validation error simulation'))}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-zinc-800 bg-zinc-950/80 px-4 py-2.5 text-xs font-semibold text-rose-400 transition-all duration-200 hover:bg-rose-950/30 hover:border-rose-500/40 hover:-translate-y-0.5"
              >
                <Bell className="h-4 w-4" />
                <span>Test Error Toast</span>
              </button>

              <button
                type="button"
                onClick={handleInvalidateCache}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-zinc-800 bg-zinc-950/80 px-4 py-2.5 text-xs font-semibold text-indigo-300 transition-all duration-200 hover:bg-indigo-950/30 hover:border-indigo-500/40 hover:-translate-y-0.5"
              >
                <RefreshCw className="h-4 w-4 text-indigo-400" />
                <span>Invalidate Query Cache</span>
              </button>
            </div>
          </div>

          <div className="rounded-xl border border-zinc-800/80 bg-zinc-950/40 p-3 text-xs text-zinc-400 flex items-center justify-between mt-4">
            <span>Query Client Status: Active</span>
            <span className="text-emerald-400 font-semibold flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
              Synced
            </span>
          </div>
        </div>
      </section>

      {/* Row 2: Built-in Stack Highlights + Quick Commands CLI Card */}
      <section className="grid gap-6 md:grid-cols-3">
        {/* Built-in Stack Pillars */}
        <div className="rounded-2xl border border-zinc-800/80 bg-zinc-900/60 p-6 shadow-xl backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:border-zinc-700 md:col-span-2 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400 ring-1 ring-purple-500/20">
                <Layers className="h-5 w-5" />
              </div>
              <div>
                <h2 className="text-base font-bold text-white">Built-in Stack Pillars</h2>
                <p className="text-xs text-zinc-400 font-semibold">Core architecture modules</p>
              </div>
            </div>
            <span className="rounded-full border border-zinc-800 bg-zinc-950 px-3 py-1 text-xs font-semibold text-zinc-300">
              v1.0 Ready
            </span>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 pt-2">
            <div className="rounded-xl border border-zinc-800/80 bg-zinc-950/60 p-4 transition-all duration-200 hover:border-indigo-500/40">
              <div className="flex items-center gap-2 text-indigo-400 mb-2">
                <ShieldCheck className="h-4 w-4" />
                <h3 className="text-xs font-bold text-white">Auth & Protection</h3>
              </div>
              <p className="text-xs text-zinc-300 leading-relaxed">
                AuthGuard client wrappers, JWT cookie verification, and automatic session restoration.
              </p>
            </div>

            <div className="rounded-xl border border-zinc-800/80 bg-zinc-950/60 p-4 transition-all duration-200 hover:border-purple-500/40">
              <div className="flex items-center gap-2 text-purple-400 mb-2">
                <Code2 className="h-4 w-4" />
                <h3 className="text-xs font-bold text-white">Zod Form Schemas</h3>
              </div>
              <p className="text-xs text-zinc-300 leading-relaxed">
                Strict type safety and real-time input error rendering using uniform FormField primitives.
              </p>
            </div>

            <div className="rounded-xl border border-zinc-800/80 bg-zinc-950/60 p-4 transition-all duration-200 hover:border-emerald-500/40">
              <div className="flex items-center gap-2 text-emerald-400 mb-2">
                <Cpu className="h-4 w-4" />
                <h3 className="text-xs font-bold text-white">TanStack Query</h3>
              </div>
              <p className="text-xs text-zinc-300 leading-relaxed">
                Smart caching layer, optimistic updates, and clean async data fetching lifecycle management.
              </p>
            </div>

            <div className="rounded-xl border border-zinc-800/80 bg-zinc-950/60 p-4 transition-all duration-200 hover:border-sky-500/40">
              <div className="flex items-center gap-2 text-sky-400 mb-2">
                <Zap className="h-4 w-4" />
                <h3 className="text-xs font-bold text-white">Normalized Errors</h3>
              </div>
              <p className="text-xs text-zinc-300 leading-relaxed">
                Centralized Axios error handling with automatic toast dispatching and status state feedback.
              </p>
            </div>
          </div>
        </div>

        {/* Quick Commands / CLI Reference Card */}
        <div className="rounded-2xl border border-zinc-800/80 bg-zinc-900/60 p-6 shadow-xl backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:border-zinc-700 md:col-span-1 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400 ring-1 ring-indigo-500/20">
                <Terminal className="h-5 w-5" />
              </div>
              <div>
                <h2 className="text-base font-bold text-white">CLI Reference</h2>
                <p className="text-xs text-zinc-400 font-semibold">Quick dev commands</p>
              </div>
            </div>

            <div className="space-y-3">
              {cliCommands.map((item) => (
                <div key={item.cmd} className="rounded-xl border border-zinc-800/80 bg-zinc-950/60 p-3 space-y-1.5">
                  <div className="flex items-center justify-between text-xs text-zinc-400 font-semibold">
                    <span>{item.label}</span>
                  </div>
                  <div className="flex items-center justify-between bg-zinc-900/90 rounded-lg px-3 py-2 border border-zinc-800/90">
                    <code className="text-xs font-mono text-zinc-200">{item.cmd}</code>
                    <button
                      type="button"
                      onClick={() => handleCopyCommand(item.cmd)}
                      className="text-zinc-400 hover:text-white transition-colors p-1"
                      title="Copy command"
                    >
                      {copiedCommand === item.cmd ? (
                        <Check className="h-3.5 w-3.5 text-emerald-400" />
                      ) : (
                        <Copy className="h-3.5 w-3.5" />
                      )}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Special Thanks Footer Card */}
      <section className="rounded-2xl border border-zinc-800/80 bg-zinc-900/60 p-6 text-center shadow-lg backdrop-blur-md transition-all hover:border-zinc-700">
        <div className="mx-auto flex max-w-xl flex-col items-center justify-center space-y-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-500/10 text-purple-400 ring-1 ring-purple-500/20">
            <Sparkles className="h-5 w-5" />
          </div>
          <h3 className="text-base font-bold text-white">Happy Coding & Building!</h3>
          <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
            Your testing and feedback mean a lot to us. Feel free to explore the authentication flows, test form validations, or evaluate the protected dashboard routes.
          </p>
        </div>
      </section>
    </div>
  );
}

