import { cn } from "@/lib/utils";
import { createContext, useContext, useEffect, useRef, useState } from "react";
import Header from "./Header";
import Body from "./Body";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import useBoolean, { BooleanHandlers } from "@/hooks/useBoolean";

const LayoutContext = createContext<{
  offset: number;
  fixed: boolean;
  setIsCollapsed: BooleanHandlers;
  isCollapsed: boolean;
} | null>(null);

type LayoutProps = {
  fixed?: boolean;
  className?: string;
  children?: React.ReactNode;
};

export const useLayoutContext = () => {
  const context = useContext(LayoutContext);

  if (context === undefined)
    throw new Error("useTheme must be used within a LayoutProvider");

  return context;
};

const AppLayout = ({ className, fixed = false }: LayoutProps) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  const [_isCollapsed, setIsCollapsed] = useBoolean(false);

  useEffect(() => {
    const div = divRef.current;

    if (!div) return;
    const onScroll = () => setOffset(div.scrollTop);

    // clean up code
    div.removeEventListener("scroll", onScroll);
    div.addEventListener("scroll", onScroll, { passive: true });
    return () => div.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <LayoutContext.Provider
      value={{ offset, fixed, isCollapsed: _isCollapsed, setIsCollapsed }}
    >
      <Header></Header>
      {/* <Sidebar /> */}
      <Body>
        <div
          ref={divRef}
          data-layout="layout"
          className={cn(
            "h-full overflow-auto",
            fixed && "flex flex-col",
            className
          )}
          // {...props}
        >
          <Outlet />
        </div>
      </Body>
    </LayoutContext.Provider>
  );
};
AppLayout.displayName = "AppLayout";

export default AppLayout;
