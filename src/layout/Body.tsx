import { cn } from "@/lib/utils";
import { forwardRef, HTMLAttributes } from "react";
import { useLayoutContext } from "./AppLayout";

const Body = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    // Check if Layout.Body is used within Layout
    const contextVal = useLayoutContext();

    return (
      <div
        ref={ref}
        data-layout="body"
        className={cn(
          "px-4 py-6 md:overflow-hidden md:px-8",
          contextVal && contextVal.fixed && "flex-1",
          className
        )}
        {...props}
      />
    );
  }
);
export default Body;
