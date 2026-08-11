/* eslint-disable @typescript-eslint/no-explicit-any */
import { api, ApiResponse, PaginatedData } from '@/lib/api';
import { User, UpdateProfileInput } from '../types';

export const usersApi = {
  // Live Endpoint from your backend contract
  updateProfile: async (data: UpdateProfileInput): Promise<ApiResponse<{ user: User }>> => {
    return api.patch('/user/profile', data);
  },

  // Planned endpoints modeled for full validation
  list: async (page: number, limit: number): Promise<ApiResponse<PaginatedData<User>>> => {
    // For now, safely proxying a mock response that matches your standard pagination format
    const mockUsers: User[] = Array.from({ length: limit }).map((_, i) => ({
      id: `usr_${(page - 1) * limit + i + 1}`,
      name: `Developer ${(page - 1) * limit + i + 1}`,
      email: `dev${(page - 1) * limit + i + 1}@boilerplate.com`,
      isVerified: true,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }));

    return {
      success: true,
      message: 'Users fetched successfully',
      data: {
        items: mockUsers,
        meta: {
          currentPage: page,
          totalPages: 5,
          pageSize: limit,
          totalItems: 25,
          hasNextPage: page < 5,
          hasPreviousPage: page > 1,
        },
      },
    } as any; // Cast as any just to fulfill the wrapper requirements while testing
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  delete: async (id: string): Promise<ApiResponse<void>> => {
    return {
      success: true,
      message: 'User deleted successfully',
      data: undefined,
    };
  },
};
