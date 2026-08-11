"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  updateProfileSchema,
  UpdateProfileSchemaInput,
} from "../schemas/users.schema";
import { useUsers } from "../hooks/use-users";
import { FormField } from "@/components";
import { useCurrentUser } from "@/features/auth/hooks/use-current-user";

export function ProfileForm() {
  const { user } = useCurrentUser();
  const { updateProfile, isUpdating, updateError } = useUsers();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UpdateProfileSchemaInput>({
    resolver: zodResolver(updateProfileSchema),
    defaultValues: { name: user?.name || "" },
  });

  const onSubmit = async (data: UpdateProfileSchemaInput) => {
    try {
      await updateProfile(data);
      alert("Profile parameters updated securely!");
    } catch (err) {}
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 p-5 border bg-white rounded-xl shadow-sm"
    >
      <h3 className="font-bold text-sm tracking-tight text-zinc-900">
        Live Profile Engine (PATCH)
      </h3>

      {updateError && (
        <div className="p-3 text-xs bg-red-50 text-red-600 rounded-md border border-red-100">
          {updateError.message}
        </div>
      )}

      <button
        type="submit"
        disabled={isUpdating}
        className="w-full bg-zinc-950 text-white text-xs font-semibold p-2.5 rounded-lg disabled:bg-zinc-300 transition-colors"
      >
        {isUpdating ? "Saving Profile Configuration..." : "Commit Changes"}
      </button>
    </form>
  );
}
