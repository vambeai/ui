"use client";

import { Input } from "@ui/components/ui/input";
import React, {
  type ChangeEvent,
  type ComponentProps,
  forwardRef,
  useEffect,
  useState,
} from "react";

export interface ChileanRutInputProps
  extends Omit<ComponentProps<"input">, "onChange" | "value"> {
  value?: string;
  onChange?: (value: string) => void;
  showValidationState?: boolean;
}

export const formatRut = (value: string): string => {
  // Remove all non-alphanumeric characters
  const cleaned = value.replace(/[^0-9kK]/g, "");

  if (cleaned.length === 0) return "";

  // Extract verification digit (last digit)
  const verificationDigit = cleaned.slice(-1);
  const numbers = cleaned.slice(0, -1);

  // Format the numbers with dots
  const formatted = numbers.replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  // Add the hyphen and verification digit
  return `${formatted}-${verificationDigit}`;
};

export const cleanRut = (rut: string): string => {
  return rut.replace(/[^0-9kK]/g, "");
};

export const validateRut = (rut: string): boolean => {
  if (!rut) return false;

  // Clean the RUT
  const cleaned = rut.replace(/[^0-9kK]/g, "");

  if (cleaned.length < 2) return false;

  let body = cleaned.slice(0, -1);
  const dv = cleaned.slice(-1).toUpperCase();

  // Remove leading zeros
  body = body.replace(/^0+/, "");

  if (body.length < 1) return false;

  // Calculate verification digit
  let sum = 0;
  let multiplier = 2;

  // Loop through body digits from right to left
  for (let i = body.length - 1; i >= 0; i--) {
    sum += Number.parseInt(body.charAt(i), 10) * multiplier;
    multiplier = multiplier === 7 ? 2 : multiplier + 1;
  }

  const expectedDV = 11 - (sum % 11);
  let expectedDVString = "";

  if (expectedDV === 11) {
    expectedDVString = "0";
  } else if (expectedDV === 10) {
    expectedDVString = "K";
  } else {
    expectedDVString = expectedDV.toString();
  }

  return dv === expectedDVString;
};

export const ChileanRutInput = forwardRef<
  HTMLInputElement,
  ChileanRutInputProps
>(
  (
    { value = "", onChange, showValidationState = false, className, ...props },
    ref
  ) => {
    const [inputValue, setInputValue] = useState(value);
    const [isValid, setIsValid] = useState(false);

    useEffect(() => {
      // Format initial value if provided
      if (value) {
        const formattedValue = formatRut(value);
        setInputValue(formattedValue);
        setIsValid(validateRut(formattedValue));
      }
    }, [value]);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      const inputText = e.target.value;

      // Only process if input is empty or contains valid characters
      if (inputText === "" || /^[0-9kK.\\-]*$/.test(inputText)) {
        const formattedValue = formatRut(inputText);
        const isValidRut = validateRut(formattedValue);

        setInputValue(formattedValue);
        setIsValid(isValidRut);

        if (onChange) {
          onChange(formattedValue);
        }
      }
    };

    // Determine border color based on validation state
    const validationClassName = showValidationState
      ? isValid && inputValue
        ? "border-green-500 focus-visible:ring-green-500"
        : inputValue
        ? "border-red-500 focus-visible:ring-red-500"
        : ""
      : "";

    return (
      <Input
        ref={ref}
        value={inputValue}
        onChange={handleChange}
        placeholder="12.345.678-9"
        className={`${validationClassName} ${className || ""}`}
        {...props}
      />
    );
  }
);

ChileanRutInput.displayName = "ChileanRutInput";
