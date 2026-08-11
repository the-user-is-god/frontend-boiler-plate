'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useSearchParams } from 'next/navigation';
import { useResetPasswordMutation } from '../api/auth.queries';
import { resetPasswordSchema, ResetPasswordSchemaInput } from '../schemas/reset-password.schema';

export function ResetPasswordForm() {
  const searchParams = useSearchParams();
  const token = searchParams.get('token') || '';
  const mutation = useResetPasswordMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetPasswordSchemaInput>({
    resolver: zodResolver(resetPasswordSchema),
  });

  const onSubmit = (data: ResetPasswordSchemaInput) => {
    if (!token) return alert('Missing active validation payload token from parameters.');
    mutation.mutate({ token, data: { newPassword: data.newPassword } });
  };

  if (mutation.isSuccess) {
    return (
      <div className="max-w-md rounded-xl border border-green-200 bg-green-50 p-6 text-center text-sm text-green-900">
        Password updated successfully. You can now use your new password to sign in.
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-md space-y-4 rounded-xl border bg-white p-6 shadow-sm"
    >
      <h2 className="text-lg font-bold text-zinc-900">Set New Password</h2>

      <div className="space-y-1">
        <label className="block text-xs font-semibold text-zinc-700">Choose Password</label>
        <input
          {...register('newPassword')}
          type="password"
          className="w-full rounded-md border p-2 text-sm outline-none"
        />
        {errors.newPassword && <p className="text-xs text-red-500">{errors.newPassword.message}</p>}
      </div>

      <div className="space-y-1">
        <label className="block text-xs font-semibold text-zinc-700">Re-type Password</label>
        <input
          {...register('confirmPassword')}
          type="password"
          className="w-full rounded-md border p-2 text-sm outline-none"
        />
        {errors.confirmPassword && (
          <p className="text-xs text-red-500">{errors.confirmPassword.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={mutation.isPending}
        className="w-full rounded-md bg-zinc-900 p-2 text-sm font-medium text-white disabled:bg-zinc-300"
      >
        {mutation.isPending ? 'Updating password...' : 'Apply New Password'}
      </button>
    </form>
  );
}
