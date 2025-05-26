import * as React from 'react';
import { PhoneInput as ReactPhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import { cn } from '@ui/lib/utils';
import type { PhoneInputRefType } from 'react-international-phone';

export interface PhoneInputProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    'onChange' | 'value'
  > {
  value: string;
  onChange: (value: string) => void;
  className?: string;
  inputClassName?: string;
}

// Map of country codes to their corresponding locales
const countryLocaleMap: Record<string, string[]> = {
  cl: ['es-CL', 'es'],
  ar: ['es-AR', 'es'],
  mx: ['es-MX', 'es'],
  co: ['es-CO', 'es'],
  pe: ['es-PE', 'es'],
  ec: ['es-EC', 'es'],
  ve: ['es-VE', 'es'],
  py: ['es-PY', 'es'],
  uy: ['es-UY', 'es'],
  br: ['pt-BR', 'pt'],
};

const getDefaultCountry = (): string => {
  // Get user's preferred language
  const userLanguage = navigator.language || navigator.languages[0] || '';

  // Find the matching country code
  for (const [countryCode, locales] of Object.entries(countryLocaleMap)) {
    if (
      locales.some((locale) =>
        userLanguage.toLowerCase().startsWith(locale.toLowerCase()),
      )
    ) {
      return countryCode;
    }
  }
  // Default to Chile if no match is found
  return 'cl';
};

const PhoneInput = React.forwardRef<PhoneInputRefType, PhoneInputProps>(
  ({ className, inputClassName, onChange, value, ...props }, ref) => {
    const [defaultCountry] = React.useState(getDefaultCountry());

    return (
      <div
        className={cn(
          'flex rounded-md border border-input focus-within:border-border focus-within:ring-1 focus-within:ring-ring focus-within:ring-inset pl-2',
          className,
        )}
      >
        <ReactPhoneInput
          defaultCountry={defaultCountry}
          ref={ref}
          value={value}
          onChange={(phone) => {
            onChange(phone);
          }}
          style={{
            width: '100%',
            gap: '6px',
          }}
          countries={[
            ['Chile', 'cl', '56'],
            ['Argentina', 'ar', '54'],
            ['Mexico', 'mx', '52'],
            ['Colombia', 'co', '57'],
            ['Peru', 'pe', '51'],
            ['Ecuador', 'ec', '593'],
            ['Venezuela', 've', '58'],
            ['Paraguay', 'py', '595'],
            ['Uruguay', 'uy', '598'],
            ['Brazil', 'br', '55'],
          ]}
          inputClassName={cn(
            'flex h-9 w-full !rounded-md !border-none focus:!border-none focus:!ring-0 !bg-transparent !text-foreground px-3 py-1 text-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground placeholder:opacity-50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
            inputClassName,
          )}
          countrySelectorStyleProps={{
            buttonClassName: '!border-none !bg-transparent',
          }}
          {...props}
        />
      </div>
    );
  },
);
PhoneInput.displayName = 'PhoneInput';

export default PhoneInput;
export { PhoneInput };
