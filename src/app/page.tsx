// Temporary verification step in src/app/page.tsx
"use client";

import { registerSchema } from "@/features/auth/schemas/register.schema";

export default function HomePage() {
  const runValidationCheck = () => {
    // Intentionally testing empty inputs to check error parsing boundaries
    const parsed = registerSchema.safeParse({
      name: "",
      email: "not-valid",
      password: "123",
    });

    if (!parsed.success) {
      console.log(
        "Schema Guard Active. Caught Validation Errors:",
        parsed.error.flatten().fieldErrors,
      );
    }
  };

  return (
    <main className="p-8">
      <button
        onClick={runValidationCheck}
        className="px-4 py-2 bg-blue-600 text-white rounded text-sm font-medium"
      >
        Run Validation Test
      </button>
    </main>
  );
}
