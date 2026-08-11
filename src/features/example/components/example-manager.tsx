"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useExample } from "../hooks/use-example";
import { useExampleUiStore } from "../store/example-ui.store";
import { exampleSchema, ExampleSchemaInput } from "../schemas/example.schema";
import { FormField, StatusDisplay } from "@/components";

export function ExampleManager() {
  const { items, isLoading, createItem, isCreating } = useExample();
  const { isPanelExpanded, setPanelExpanded } = useExampleUiStore();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ExampleSchemaInput>({
    resolver: zodResolver(exampleSchema),
  });

  const onSubmit = async (data: ExampleSchemaInput) => {
    try {
      await createItem(data);
      reset();
    } catch (err) {}
  };

  return (
    <div className="space-y-6 max-w-xl">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold">Feature Workspace</h2>
        <button
          onClick={() => setPanelExpanded(!isPanelExpanded)}
          className="text-xs bg-zinc-100 hover:bg-zinc-200 px-3 py-1.5 rounded-md font-medium"
        >
          {isPanelExpanded ? "Collapse View" : "Expand Options"}
        </button>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 p-5 border bg-zinc-50/50 rounded-xl"
      >
        <FormField
          label="Item Name Identifier"
          registration={register("title")}
          error={errors.title?.message}
          placeholder="Enter unique title..."
        />
        <FormField
          label="Core Description Parameters"
          registration={register("description")}
          error={errors.description?.message}
          placeholder="Describe element metrics..."
        />

        <button
          type="submit"
          disabled={isCreating}
          className="w-full bg-zinc-950 text-white text-sm font-medium p-2.5 rounded-lg disabled:bg-zinc-300"
        >
          {isCreating ? "Processing Transaction..." : "Commit Data Matrix"}
        </button>
      </form>

      {isLoading ? (
        <StatusDisplay variant="loading" />
      ) : items.length === 0 ? (
        <StatusDisplay
          variant="empty"
          description="No workspace resources initialized yet."
        />
      ) : (
        <ul className="divide-y border rounded-xl overflow-hidden bg-white">
          {items.map((item) => (
            <li key={item.id} className="p-4 text-sm">
              <strong>{item.title}</strong> — {item.description}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
