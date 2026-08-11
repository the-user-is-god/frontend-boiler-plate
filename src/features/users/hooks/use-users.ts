import * as React from "react";
import {
  useUsersListQuery,
  useUpdateProfileMutation,
  useDeleteUserMutation,
} from "../api/users.queries";
import { UpdateProfileSchemaInput } from "../schemas/users.schema";
import { AppApiError } from "@/lib/api";

export function useUsers() {
  const [page, setPage] = React.useState(1);
  const limit = 5;

  const listQuery = useUsersListQuery(page, limit);
  const updateMutation = useUpdateProfileMutation();
  const deleteMutation = useDeleteUserMutation();

  return {
    // List state tracking metrics
    users: listQuery.data?.items ?? [],
    pagination: listQuery.data?.meta ?? null,
    isLoading: listQuery.isLoading,
    isError: listQuery.isError,
    error: listQuery.error as AppApiError | null,

    // Page controls
    nextPage: () => listQuery.data?.meta.hasNextPage && setPage((p) => p + 1),
    prevPage: () =>
      listQuery.data?.meta.hasPreviousPage && setPage((p) => p - 1),
    currentPage: page,

    // Mutations
    updateProfile: async (data: UpdateProfileSchemaInput) => {
      return updateMutation.mutateAsync(data);
    },
    isUpdating: updateMutation.isPending,
    updateError: updateMutation.error as AppApiError | null,

    deleteUser: async (id: string) => {
      if (confirm("Are you sure you want to drop this user entity?")) {
        return deleteMutation.mutateAsync(id);
      }
    },
    isDeleting: deleteMutation.isPending,
  };
}
