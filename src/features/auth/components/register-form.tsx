"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  registerSchema,
  RegisterSchemaInput,
} from "../schemas/register.schema";
import { useRegister } from "../hooks/use-register";

export function RegisterForm() {
  const { registerUser, isLoading, error, isSuccess } = useRegister();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterSchemaInput>({
    resolver: zodResolver(registerSchema),
    defaultValues: { name: "", email: "", password: "" },
  });

  const onSubmit = async (data: RegisterSchemaInput) => {
    try {
      await registerUser(data);
    } catch (err) {}
  };

  if (isSuccess) {
    return (
      <div className="p-6 bg-green-50 border border-green-200 rounded-xl max-w-md text-center">
        <h3 className="font-bold text-green-900">Registration Initiated!</h3>
        <p className="text-xs text-green-700 mt-1">
          Please inspect your email dashboard inbox to verify your account link.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 p-6 bg-white border rounded-xl shadow-sm max-w-md w-full"
    >
      <h2 className="text-xl font-bold tracking-tight text-zinc-900">
        Create Account
      </h2>

      {error && (
        <div className="p-3 text-xs bg-red-50 text-red-600 rounded-md border border-red-100">
          {error.message}
        </div>
      )}

      <div className="space-y-1">
        <label className="text-xs font-semibold text-zinc-700 block">
          Full Name
        </label>
        <input
          {...register("name")}
          className="w-full border p-2 rounded-md text-sm outline-none"
        />
        {errors.name && (
          <p className="text-xs text-red-500 font-medium">
            {errors.name.message}
          </p>
        )}
      </div>

      <div className="space-y-1">
        <label className="text-xs font-semibold text-zinc-700 block">
          Email Address
        </label>
        <input
          {...register("email")}
          type="email"
          className="w-full border p-2 rounded-md text-sm outline-none"
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
          className="w-full border p-2 rounded-md text-sm outline-none"
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
        className="w-full bg-zinc-900 hover:bg-zinc-800 text-white p-2 rounded-md font-medium text-sm disabled:bg-zinc-300"
      >
        {isLoading ? "Creating Account..." : "Register"}
      </button>
    </form>
  );
}
