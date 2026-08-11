import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import { FormError } from './form-error';

interface FormFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  registration: UseFormRegisterReturn;
}

/**
 * Standard data-entry input shell with reactive error styling rules.
 */
export const FormField = React.forwardRef<HTMLInputElement, FormFieldProps>(
  ({ label, error, registration, type = 'text', className = '', ...props }, ref) => {
    return (
      <div className="w-full space-y-1.5">
        <label className="block text-xs font-bold tracking-tight text-zinc-700">{label}</label>
        <input
          {...registration}
          {...props}
          type={type}
          ref={ref}
          className={`w-full rounded-lg border bg-white p-2.5 text-sm text-zinc-900 transition-all outline-none focus:border-zinc-950 focus:ring-2 focus:ring-zinc-950 disabled:bg-zinc-50 disabled:text-zinc-400 ${error ? 'border-red-400 focus:border-red-500 focus:ring-red-200' : 'border-zinc-200'} ${className}`}
        />
        <FormError message={error} />
      </div>
    );
  }
);

FormField.displayName = 'FormField';
