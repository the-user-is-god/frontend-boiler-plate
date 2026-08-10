// src/app/page.tsx
export default function HomePage() {
  return (
    <main className="p-8 font-sans transition-colors duration-200 dark:bg-zinc-900 dark:text-zinc-100">
      <h1 className="text-2xl font-bold">Theme & Query Framework Stacked</h1>
      <p className="text-gray-500 dark:text-gray-400 mt-2">
        Change your operating system theme to dark mode to see this component
        switch themes smoothly.
      </p>
    </main>
  );
}
