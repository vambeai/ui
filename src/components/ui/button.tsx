import { Slot } from "@radix-ui/react-slot";
import { type VariantProps, cva } from "class-variance-authority";
import * as React from "react";

import { cn } from "@ui/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 disabled:pointer-events-none disabled:bg-slate-100 disabled:text-slate-400",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-primary/80 disabled:bg-primary/50 disabled:text-primary-foreground/50",
        "danger-secondary":
          "bg-danger-secondary text-danger hover:bg-danger-secondary/80",
        danger: "bg-danger text-danger-foreground hover:bg-danger/80",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline:
          "border border-border bg-background text-primary disabled:border-slate-400 hover:border-primary",
        secondary:
          "bg-secondary text-secondary-foreground hover:text-primary-hover active:text-primary-pressed",
        ghost:
          "hover:bg-secondary hover:text-primary-hover active:text-primary-pressed disabled:bg-transparent",
        link: "text-primary underline-offset-4 hover:underline",
        muted: "bg-[#f0f3f6] text-[#505d6f] hover:bg-slate-200",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, disabled, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={disabled}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
