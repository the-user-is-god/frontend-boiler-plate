'use client';

import React from 'react';
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
} from 'lucide-react';
import { useCurrentUser } from '@/features/auth/hooks/use-current-user';

export default function DashboardPage() {
  const { user } = useCurrentUser();

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-300">
      {/* Gratitude & Welcome Hero Card */}
      <section className="relative overflow-hidden rounded-3xl border border-indigo-500/20 bg-gradient-to-b from-indigo-950/40 via-zinc-900/90 to-zinc-900/90 p-6 shadow-2xl backdrop-blur-xl sm:p-10">
        <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-indigo-500/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-purple-500/10 blur-3xl" />

        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3.5 py-1.5 text-xs font-semibold text-indigo-300 backdrop-blur-md">
            <Heart className="h-3.5 w-3.5 text-pink-400 fill-pink-400/30 animate-pulse" />
            <span>Gratitude & Welcome Note</span>
          </div>

          <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Welcome aboard,{' '}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-400 bg-clip-text text-transparent">
              {user?.name || user?.email || 'Valued Tester'}
            </span>
            !
          </h1>

          <p className="text-sm sm:text-base leading-relaxed text-zinc-300">
            Thank you so much for logging in and taking the time to test our platform! We are genuinely happy and deeply grateful for your effort and support in evaluating this starter system.
          </p>

          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
            This boilerplate is engineered to serve as a high-performance foundation for modern web applications—combining secure HTTP-only cookie authentication, type-safe Zod schema validation, TanStack Query cache handling, and seamless user experiences.
          </p>

          <div className="pt-2 flex flex-wrap gap-3">
            <div className="flex items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-900/80 px-4 py-2.5 text-xs font-semibold text-emerald-400">
              <CheckCircle2 className="h-4 w-4 text-emerald-400" />
              <span>Authentication Session Active</span>
            </div>
            <div className="flex items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-900/80 px-4 py-2.5 text-xs font-semibold text-indigo-300">
              <Zap className="h-4 w-4 text-indigo-400" />
              <span>All Systems Operational</span>
            </div>
          </div>
        </div>
      </section>

      {/* User Session Profile & Identity Overview */}
      <section className="grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl border border-zinc-800/80 bg-zinc-900/80 p-6 shadow-xl backdrop-blur-md transition-all hover:border-zinc-700/80 md:col-span-1">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-400 ring-1 ring-indigo-500/20">
              <User className="h-6 w-6" />
            </div>
            <div>
              <h2 className="text-base font-bold text-white">Tester Identity</h2>
              <p className="text-xs text-zinc-400">Current Session Specs</p>
            </div>
          </div>

          <div className="mt-5 space-y-3 border-t border-zinc-800/80 pt-4 text-xs">
            <div>
              <span className="text-zinc-500 block text-[11px] font-medium">User Name</span>
              <span className="font-semibold text-zinc-200">{user?.name || 'Not Specified'}</span>
            </div>
            <div>
              <span className="text-zinc-500 block text-[11px] font-medium">Registered Email</span>
              <span className="font-semibold text-zinc-200 truncate block">{user?.email || 'Unknown'}</span>
            </div>
            <div>
              <span className="text-zinc-500 block text-[11px] font-medium">Session Security</span>
              <span className="inline-flex items-center gap-1.5 mt-1 rounded-md bg-emerald-500/10 px-2 py-1 text-[11px] font-semibold text-emerald-400 ring-1 ring-emerald-500/20">
                <Lock className="h-3 w-3" />
                HTTP-Only Cookie Protected
              </span>
            </div>
          </div>
        </div>

        {/* Core Architecture Capabilities Grid */}
        <div className="rounded-2xl border border-zinc-800/80 bg-zinc-900/80 p-6 shadow-xl backdrop-blur-md md:col-span-2 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400 ring-1 ring-purple-500/20">
                <Layers className="h-5 w-5" />
              </div>
              <div>
                <h2 className="text-base font-bold text-white">Built-in Stack Highlights</h2>
                <p className="text-xs text-zinc-400">Integrated features inside this boilerplate</p>
              </div>
            </div>
            <span className="rounded-full bg-zinc-800 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-zinc-400">
              v1.0 Ready
            </span>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 pt-2">
            <div className="rounded-xl border border-zinc-800/60 bg-zinc-950/40 p-4 transition-colors hover:border-indigo-500/30">
              <div className="flex items-center gap-2 text-indigo-400 mb-1.5">
                <ShieldCheck className="h-4 w-4" />
                <h3 className="text-xs font-bold text-white">Auth & Protection</h3>
              </div>
              <p className="text-[11px] text-zinc-400 leading-relaxed">
                AuthGuard client wrappers, JWT cookie boundary verification, and automatic session restoration.
              </p>
            </div>

            <div className="rounded-xl border border-zinc-800/60 bg-zinc-950/40 p-4 transition-colors hover:border-purple-500/30">
              <div className="flex items-center gap-2 text-purple-400 mb-1.5">
                <Code2 className="h-4 w-4" />
                <h3 className="text-xs font-bold text-white">Zod Form Schemas</h3>
              </div>
              <p className="text-[11px] text-zinc-400 leading-relaxed">
                Strict type safety, real-time input error rendering using uniform FormField primitives.
              </p>
            </div>

            <div className="rounded-xl border border-zinc-800/60 bg-zinc-950/40 p-4 transition-colors hover:border-pink-500/30">
              <div className="flex items-center gap-2 text-pink-400 mb-1.5">
                <Cpu className="h-4 w-4" />
                <h3 className="text-xs font-bold text-white">TanStack Query</h3>
              </div>
              <p className="text-[11px] text-zinc-400 leading-relaxed">
                Smart caching layer, optimistic updates, and clean asynchronous data fetching state rules.
              </p>
            </div>

            <div className="rounded-xl border border-zinc-800/60 bg-zinc-950/40 p-4 transition-colors hover:border-emerald-500/30">
              <div className="flex items-center gap-2 text-emerald-400 mb-1.5">
                <Zap className="h-4 w-4" />
                <h3 className="text-xs font-bold text-white">Normalized Errors</h3>
              </div>
              <p className="text-[11px] text-zinc-400 leading-relaxed">
                Centralized Axios error normalizers with automatic toast dispatching and status state feedback.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Special Thanks Footer Card */}
      <section className="rounded-2xl border border-zinc-800/80 bg-zinc-900/60 p-6 text-center shadow-lg backdrop-blur-md">
        <div className="mx-auto flex max-w-xl flex-col items-center justify-center space-y-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-tr from-pink-500/20 to-purple-500/20 text-pink-400 ring-1 ring-pink-500/30">
            <Sparkles className="h-5 w-5" />
          </div>
          <h3 className="text-base font-bold text-white">Happy Coding & Building!</h3>
          <p className="text-xs text-zinc-400 leading-relaxed">
            Your testing and feedback mean a lot. Feel free to explore the authentication flows, test form validations, or sign out whenever you wish.
          </p>
        </div>
      </section>
    </div>
  );
}
