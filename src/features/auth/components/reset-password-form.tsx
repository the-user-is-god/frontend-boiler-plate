"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSearchParams } from "next/navigation";
import { useResetPasswordMutation } from "../api/auth.queries";
import {
  resetPasswordSchema,
  ResetPasswordSchemaInput,
} from "../schemas/reset-password.schema";

export function ResetPasswordForm() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token") || "";
  const mutation = useResetPasswordMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetPasswordSchemaInput>({
    resolver: zodResolver(resetPasswordSchema),
  });

  const onSubmit = (data: ResetPasswordSchemaInput) => {
    if (!token)
      return alert("Missing active validation payload token from parameters.");
    mutation.mutate({ token, data: { newPassword: data.newPassword } });
  };

  if (mutation.isSuccess) {
    return (
      <div className="p-6 bg-green-50 text-green-900 border border-green-200 rounded-xl max-w-md text-center text-sm">
        Password updated successfully. You can now use your new password to sign
        in.
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 p-6 bg-white border rounded-xl shadow-sm max-w-md w-full"
    >
      <h2 className="text-lg font-bold text-zinc-900">Set New Password</h2>

      <div className="space-y-1">
        <label className="text-xs font-semibold text-zinc-700 block">
          Choose Password
        </label>
        <input
          {...register("newPassword")}
          type="password"
          className="w-full border p-2 rounded-md text-sm outline-none"
        />
        {errors.newPassword && (
          <p className="text-xs text-red-500">{errors.newPassword.message}</p>
        )}
      </div>

      <div className="space-y-1">
        <label className="text-xs font-semibold text-zinc-700 block">
          Re-type Password
        </label>
        <input
          {...register("confirmPassword")}
          type="password"
          className="w-full border p-2 rounded-md text-sm outline-none"
        />
        {errors.confirmPassword && (
          <p className="text-xs text-red-500">
            {errors.confirmPassword.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={mutation.isPending}
        className="w-full bg-zinc-900 text-white p-2 rounded-md text-sm font-medium disabled:bg-zinc-300"
      >
        {mutation.isPending ? "Updating password..." : "Apply New Password"}
      </button>
    </form>
  );
}
