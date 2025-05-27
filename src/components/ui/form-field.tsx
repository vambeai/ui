import { ReactNode } from "react";
import { Input } from "@ui/components/ui/input";
import { Label } from "@ui/components/ui/label";
import { cn } from "@ui/lib/utils";

interface FormFieldProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  onBlur: () => void;
  error?: string;
  disabled?: boolean;
  children?: ReactNode;
  className?: string;
  labelClassName?: string;
  inputClassName?: string;
  errorClassName?: string;
}

export function FormField({
  label,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  onBlur,
  error,
  disabled,
  children,
  className,
  labelClassName,
  inputClassName,
  errorClassName,
}: FormFieldProps) {
  return (
    <div className={cn("space-y-2", className)}>
      <Label htmlFor={name} className={labelClassName}>
        {label}
      </Label>
      {children || (
        <Input
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onBlur={onBlur}
          disabled={disabled}
          className={cn(error ? "border-destructive" : "", inputClassName)}
        />
      )}
      {error && (
        <p className={cn("text-sm text-destructive", errorClassName)}>
          {error}
        </p>
      )}
    </div>
  );
}
