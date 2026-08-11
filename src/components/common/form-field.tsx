import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { FormError } from "./form-error";

interface FormFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  registration: UseFormRegisterReturn;
}

/**
 * Standard data-entry input shell with reactive error styling rules.
 */
export const FormField = React.forwardRef<HTMLInputElement, FormFieldProps>(
  (
    { label, error, registration, type = "text", className = "", ...props },
    ref,
  ) => {
    return (
      <div className="space-y-1.5 w-full">
        <label className="text-xs font-bold text-zinc-700 tracking-tight block">
          {label}
        </label>
        <input
          {...registration}
          {...props}
          type={type}
          ref={ref}
          className={`w-full text-sm border p-2.5 rounded-lg bg-white text-zinc-900 outline-none transition-all
            focus:ring-2 focus:ring-zinc-950 focus:border-zinc-950
            disabled:bg-zinc-50 disabled:text-zinc-400
            ${error ? "border-red-400 focus:ring-red-200 focus:border-red-500" : "border-zinc-200"} 
            ${className}`}
        />
        <FormError message={error} />
      </div>
    );
  },
);

FormField.displayName = "FormField";
