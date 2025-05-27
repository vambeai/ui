import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx,md,mdx}", "!./node_modules/**"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-primary)"],
      },
      colors: {
        border: "hsl(var(--border))",
        slate: {
          "25": "#f9fafb",
          "50": "#f8fafc",
          "100": "#f1f5f9",
          "150": "#eaeff4",
          "200": "#e2e8f0",
          "250": "#d8e0ea",
          "300": "#cbd5e1",
          "350": "#b9c6d7",
          "400": "#94a3b8",
          "450": "#7f91a8",
          "500": "#64748b",
          "550": "#556379",
          "600": "#475569",
          "700": "#334155",
          "800": "#1e293b",
          "900": "#0f172a",
          "950": "#020617",
        },
        input: {
          DEFAULT: "hsl(var(--input))",
          disabled: "hsl(var(--input-disabled))",
          background: "hsl(var(--input-background))",
        },
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          hover: "hsl(var(--primary-hover))",
          pressed: "hsl(var(--primary-pressed))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        danger: {
          DEFAULT: "hsl(var(--danger))",
          secondary: "hsl(var(--danger-secondary))",
          foreground: "hsl(var(--danger-foreground))",
        },
        destructive: "hsl(var(--destructive))",
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
