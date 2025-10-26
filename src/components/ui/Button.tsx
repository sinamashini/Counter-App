import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "destructive" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  children?: React.ReactNode;
  "aria-label"?: string;
  icon?: React.ReactNode;
  title?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      children,
      "aria-label": ariaLabel,
      icon,
      title,
      disabled,
      ...props
    },
    ref
  ) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center rounded-full text-sm font-medium ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          "min-h-[44px] min-w-[44px]",
          {
            "bg-gradient-to-r from-primary/90 to-primary text-primary-foreground hover:from-primary hover:shadow-lg hover:shadow-primary/25":
              variant === "primary",
            "bg-gradient-to-r from-secondary/90 to-secondary text-secondary-foreground hover:from-secondary hover:shadow-lg hover:shadow-secondary/25":
              variant === "secondary",
            "bg-gradient-to-r from-destructive/90 to-destructive text-destructive-foreground hover:from-destructive hover:shadow-lg hover:shadow-destructive/25":
              variant === "destructive",
            "border border-input/50 bg-background/80 backdrop-blur-sm hover:bg-accent/80 hover:text-accent-foreground hover:border-accent/50":
              variant === "outline",
          },
          {
            "h-10 w-10 p-0": size === "sm" && !children,
            "h-12 w-12 p-3": size === "md" && !children,
            "h-14 w-14 p-4 text-base": size === "lg" && !children,
            "px-4 py-2 gap-2": !!children,
          },
          className
        )}
        ref={ref}
        aria-label={ariaLabel}
        title={title}
        disabled={disabled}
        {...props}
        onKeyDown={(e) => {
          if ((e.key === "Enter" || e.key === " ") && !disabled) {
            e.preventDefault();
            (e.currentTarget as HTMLButtonElement).click();
          }
        }}
      >
        {icon && <span className="flex-shrink-0">{icon}</span>}
        {children && <span className="sr-only sm:not-sr-only">{children}</span>}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button, type ButtonProps };
