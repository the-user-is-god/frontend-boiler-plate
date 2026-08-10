"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, LoginSchemaInput } from "../schemas/login.schema";
import { useLogin } from "../hooks/use-login";

export function LoginForm() {
  const { login, isLoading, error } = useLogin();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchemaInput>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: "", password: "" },
  });

  const onSubmit = async (data: LoginSchemaInput) => {
    try {
      await login(data);
      alert("Logged in successfully!");
    } catch (err) {
      // Caught handled and normalized by custom error system
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 p-6 bg-white border rounded-xl shadow-sm max-w-md w-full"
    >
      <h2 className="text-xl font-bold tracking-tight text-zinc-900">
        Sign In
      </h2>

      {error && (
        <div className="p-3 text-xs bg-red-50 text-red-600 rounded-md border border-red-100">
          {error.message}
        </div>
      )}

      <div className="space-y-1">
        <label className="text-xs font-semibold text-zinc-700 block">
          Email Address
        </label>
        <input
          {...register("email")}
          type="email"
          className="w-full border p-2 rounded-md text-sm outline-none focus:ring-2 focus:ring-zinc-900"
        />
        {errors.email && (
          <p className="text-xs text-red-500 font-medium">
            {errors.email.message}
          </p>
        )}
      </div>

      <div className="space-y-1">
        <label className="text-xs font-semibold text-zinc-700 block">
          Password
        </label>
        <input
          {...register("password")}
          type="password"
          className="w-full border p-2 rounded-md text-sm outline-none focus:ring-2 focus:ring-zinc-900"
        />
        {errors.password && (
          <p className="text-xs text-red-500 font-medium">
            {errors.password.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-zinc-900 hover:bg-zinc-800 text-white p-2 rounded-md font-medium text-sm transition-colors disabled:bg-zinc-300"
      >
        {isLoading ? "Signing In..." : "Continue"}
      </button>
    </form>
  );
}
