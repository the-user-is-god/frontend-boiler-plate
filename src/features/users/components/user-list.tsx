"use client";

import { useUsers } from "../hooks/use-users";
import { StatusDisplay } from "@/components";

export function UserList() {
  const {
    users,
    pagination,
    isLoading,
    isError,
    error,
    nextPage,
    prevPage,
    deleteUser,
  } = useUsers();

  if (isLoading)
    return <StatusDisplay variant="loading" title="Syncing User Manifest..." />;
  if (isError)
    return <StatusDisplay variant="error" description={error?.message} />;
  if (users.length === 0)
    return (
      <StatusDisplay
        variant="empty"
        title="No matching entries caught on data nodes."
      />
    );

  return (
    <div className="space-y-4 p-5 border bg-white rounded-xl shadow-sm">
      <h3 className="font-bold text-sm tracking-tight text-zinc-900">
        Reference Framework View (CRUD)
      </h3>

      <div className="divide-y border rounded-lg overflow-hidden bg-zinc-50/50">
        {users.map((item) => (
          <div
            key={item.id}
            className="p-3.5 flex items-center justify-between text-xs hover:bg-zinc-50 transition-colors"
          >
            <div>
              <p className="font-semibold text-zinc-900">{item.name}</p>
              <p className="text-zinc-500 mt-0.5">
                {item.email} •{" "}
                <span className="font-mono text-[10px] text-zinc-400">
                  {item.id}
                </span>
              </p>
            </div>
            <button
              onClick={() => deleteUser(item.id)}
              className="text-red-600 hover:text-red-700 font-medium px-2 py-1 border border-red-200 rounded hover:bg-red-50 transition-colors"
            >
              Delete
            </button>
          </div>
        ))}
      </div>

      {/* Standard Pagination Bar Wrapper */}
      <div className="flex items-center justify-between pt-2">
        <span className="text-[11px] text-zinc-500 font-medium">
          Page <strong>{pagination?.currentPage}</strong> of{" "}
          {pagination?.totalPages}
        </span>
        <div className="flex gap-1.5">
          <button
            onClick={prevPage}
            disabled={!pagination?.hasPreviousPage}
            className="px-2.5 py-1 text-xs border rounded font-medium disabled:opacity-40 disabled:hover:bg-transparent hover:bg-zinc-50 transition-colors"
          >
            Previous
          </button>
          <button
            onClick={nextPage}
            disabled={!pagination?.hasNextPage}
            className="px-2.5 py-1 text-xs border rounded font-medium disabled:opacity-40 disabled:hover:bg-transparent hover:bg-zinc-50 transition-colors"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
