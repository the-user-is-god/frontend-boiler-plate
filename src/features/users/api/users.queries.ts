import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { usersApi } from "./users.api";
import { usersKeys } from "./users.keys";
import { authKeys } from "@/features/auth/api/auth.keys";

export function useUsersListQuery(page: number, limit: number) {
  return useQuery({
    queryKey: usersKeys.list(page, limit),
    queryFn: async () => {
      const response = await usersApi.list(page, limit);
      return response.data;
    },
  });
}

export function useUpdateProfileMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: usersApi.updateProfile,
    onSuccess: (response) => {
      // Keep the core auth user cache fresh and synchronized across layouts
      queryClient.setQueryData(authKeys.me(), response.data.user);
    },
  });
}

export function useDeleteUserMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: usersApi.delete,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: usersKeys.lists() });
    },
  });
}
