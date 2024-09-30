import { cn } from "@/lib/utils";
import { forwardRef, HTMLAttributes } from "react";
import { useLayoutContext } from "./AppLayout";

interface HeaderProps extends HTMLAttributes<HTMLDivElement> {
  sticky?: boolean;
}

const Header = forwardRef<HTMLDivElement, HeaderProps>(
  ({ className, sticky, ...props }, ref) => {
    const { fixed, offset } = useLayoutContext()!;

    return (
      <div
        ref={ref}
        data-layout="header"
        className={cn(
          `z-10 flex h-[var(--header-height)] items-center gap-4 bg-background p-4 md:px-8`,
          offset > 10 && sticky ? "shadow" : "shadow-none",
          fixed && "flex-none",
          sticky && "sticky top-0",
          className
        )}
        {...props}
      />
    );
  }
);

export default Header;
