import type { ReactNode } from 'react'

type FormFieldProps = {
  id: string
  label: string
  required?: boolean
  error?: string
  children: ReactNode
}

export function FormField({ id, label, required = false, error, children }: FormFieldProps) {
  return (
    <div className="flex flex-col gap-2.5">
      <label htmlFor={id} className="text-[14.4px] font-medium leading-[18px]">
        {label}
        {required && <span aria-hidden="true"> *</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="text-[13px] leading-[18px] text-error">
          {error}
        </p>
      )}
    </div>
  )
}