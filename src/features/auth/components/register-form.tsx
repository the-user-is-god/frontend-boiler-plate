/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { registerSchema, RegisterSchemaInput } from '../schemas/register.schema';
import { useRegister } from '../hooks/use-register';
import { authApi } from '../api/auth.api';
import { toast } from '@/utils/toast';

export function RegisterForm() {
  const { registerUser, isLoading, error, isSuccess } = useRegister();

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<RegisterSchemaInput>({
    resolver: zodResolver(registerSchema),
    defaultValues: { name: '', email: '', password: '' },
  });

  const onSubmit = async (data: RegisterSchemaInput) => {
    try {
      await registerUser(data);
    } catch (err) {}
  };

  // if (isSuccess) {
  //   return (
  //     <div className="max-w-md rounded-xl border border-green-200 bg-green-50 p-6 text-center">
  //       <h3 className="font-bold text-green-900">Registration Initiated!</h3>
  //       <p className="mt-1 text-xs text-green-700">
  //         Please inspect your email dashboard inbox to verify your account link.
  //       </p>
  //     </div>
  //   );
  // }

  // Insert into src/features/auth/components/register-form.tsx inside the success conditional state
  if (isSuccess) {
    return (
      <div className="animate-in fade-in w-full max-w-md space-y-4 rounded-xl border bg-white p-6 text-center shadow-sm duration-200">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-zinc-100 text-xl font-bold text-zinc-900">
          ✓
        </div>
        <div>
          <h3 className="text-lg font-bold text-zinc-900">Verification Issued</h3>
          <p className="mt-1 text-xs leading-relaxed text-zinc-500">
            We have generated your verification link. Check your email inbox to activate your
            account.
          </p>
        </div>

        {/* Resend Verification Handler */}
        <div className="border-t pt-2 text-center">
          <p className="text-[11px] text-zinc-400">Didn&apos;t catch our transmission link?</p>
          <button
            onClick={async () => {
              try {
                // Extract original form input value directly via react-hook-form's state mapping
                await authApi.resendVerification({ email: getValues('email') });
                toast.success('Token Re-Issued', 'A fresh validation email has been fired.');
              } catch (err) {
                toast.error(err);
              }
            }}
            className="mt-1 text-xs font-semibold text-zinc-900 hover:underline"
          >
            Resend Verification Link
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-md space-y-4 rounded-xl border bg-white p-6 shadow-sm"
    >
      <h2 className="text-xl font-bold tracking-tight text-zinc-900">Create Account</h2>

      {error && (
        <div className="rounded-md border border-red-100 bg-red-50 p-3 text-xs text-red-600">
          {error.message}
        </div>
      )}

      <div className="space-y-1">
        <label className="block text-xs font-semibold text-zinc-700">Full Name</label>
        <input
          {...register('name')}
          className="w-full rounded-md border p-2 text-sm outline-none"
        />
        {errors.name && <p className="text-xs font-medium text-red-500">{errors.name.message}</p>}
      </div>

      <div className="space-y-1">
        <label className="block text-xs font-semibold text-zinc-700">Email Address</label>
        <input
          {...register('email')}
          type="email"
          className="w-full rounded-md border p-2 text-sm outline-none"
        />
        {errors.email && <p className="text-xs font-medium text-red-500">{errors.email.message}</p>}
      </div>

      <div className="space-y-1">
        <label className="block text-xs font-semibold text-zinc-700">Password</label>
        <input
          {...register('password')}
          type="password"
          className="w-full rounded-md border p-2 text-sm outline-none"
        />
        {errors.password && (
          <p className="text-xs font-medium text-red-500">{errors.password.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full rounded-md bg-zinc-900 p-2 text-sm font-medium text-white hover:bg-zinc-800 disabled:bg-zinc-300"
      >
        {isLoading ? 'Creating Account...' : 'Register'}
      </button>
    </form>
  );
}
