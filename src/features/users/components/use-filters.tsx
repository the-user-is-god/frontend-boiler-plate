"use client";

import * as React from "react";
import { useUsersFilters } from "../hooks/use-users-filters";

export function UserFilters() {
  const { search, setFilters } = useUsersFilters();
  const [localSearch, setLocalSearch] = React.useState(search);

  // Synchronize local input state instantly if the URL parameter changes externally
  React.useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLocalSearch(search);
  }, [search]);

  // Handle a simple input debounce
  React.useEffect(() => {
    const timer = setTimeout(() => {
      if (localSearch !== search) {
        setFilters({ search: localSearch });
      }
    }, 400); // Wait 400 milliseconds before appending search to the URL bar

    return () => clearTimeout(timer);
  }, [localSearch, search, setFilters]);

  return (
    <div className="p-4 border bg-zinc-50/50 rounded-xl flex gap-3 items-center">
      <div className="flex-1 space-y-1">
        <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider block">
          Search Node Query
        </label>
        <input
          type="text"
          value={localSearch}
          onChange={(e) => setLocalSearch(e.target.value)}
          placeholder="Filter by name, email coordinates..."
          className="w-full text-xs p-2 border border-zinc-200 rounded-lg outline-none bg-white focus:ring-2 focus:ring-zinc-950 transition-all"
        />
      </div>
    </div>
  );
}
