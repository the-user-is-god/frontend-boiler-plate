/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema, LoginSchemaInput } from '../schemas/login.schema';
import { useLogin } from '../hooks/use-login';

export function LoginForm() {
  const { login, isLoading, error } = useLogin();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchemaInput>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: '', password: '' },
  });

  const onSubmit = async (data: LoginSchemaInput) => {
    try {
      await login(data);
      alert('Logged in successfully!');
    } catch (err) {
      // Caught handled and normalized by custom error system
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-md space-y-4 rounded-xl border bg-white p-6 shadow-sm"
    >
      <h2 className="text-xl font-bold tracking-tight text-zinc-900">Sign In</h2>

      {error && (
        <div className="rounded-md border border-red-100 bg-red-50 p-3 text-xs text-red-600">
          {error.message}
        </div>
      )}

      <div className="space-y-1">
        <label className="block text-xs font-semibold text-zinc-700">Email Address</label>
        <input
          {...register('email')}
          type="email"
          className="w-full rounded-md border p-2 text-sm outline-none focus:ring-2 focus:ring-zinc-900"
        />
        {errors.email && <p className="text-xs font-medium text-red-500">{errors.email.message}</p>}
      </div>

      <div className="space-y-1">
        <label className="block text-xs font-semibold text-zinc-700">Password</label>
        <input
          {...register('password')}
          type="password"
          className="w-full rounded-md border p-2 text-sm outline-none focus:ring-2 focus:ring-zinc-900"
        />
        {errors.password && (
          <p className="text-xs font-medium text-red-500">{errors.password.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full rounded-md bg-zinc-900 p-2 text-sm font-medium text-white transition-colors hover:bg-zinc-800 disabled:bg-zinc-300"
      >
        {isLoading ? 'Signing In...' : 'Continue'}
      </button>
    </form>
  );
}
