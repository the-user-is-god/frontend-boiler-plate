'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { authApi } from '../api/auth.api';
import { forgotPasswordSchema, ForgotPasswordSchemaInput } from '../schemas/forgot-password.schema';

export function ForgotPasswordForm() {
  const mutation = useMutation({ mutationFn: authApi.forgotPassword });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordSchemaInput>({
    resolver: zodResolver(forgotPasswordSchema),
  });

  if (mutation.isSuccess) {
    return (
      <div className="max-w-md rounded-xl border bg-zinc-50 p-6 text-center text-sm">
        If an account matches that email, a password reset link has been issued.
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit((data) => mutation.mutate(data))}
      className="w-full max-w-md space-y-4 rounded-xl border bg-white p-6 shadow-sm"
    >
      <div>
        <h2 className="text-lg font-bold text-zinc-900">Recover Password</h2>
        <p className="mt-0.5 text-xs text-zinc-500">
          Provide account email coordinates downstream.
        </p>
      </div>

      <div className="space-y-1">
        <input
          {...register('email')}
          placeholder="name@example.com"
          className="w-full rounded-md border p-2 text-sm outline-none"
        />
        {errors.email && <p className="text-xs text-red-500">{errors.email.message}</p>}
      </div>

      <button
        type="submit"
        disabled={mutation.isPending}
        className="w-full rounded-md bg-zinc-900 p-2 text-sm font-medium text-white disabled:bg-zinc-300"
      >
        {mutation.isPending ? 'Sending recovery link...' : 'Send Recovery Instructions'}
      </button>
    </form>
  );
}
