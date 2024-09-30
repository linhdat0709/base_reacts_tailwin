import { cn } from "@/lib/utils";
import { createContext, useContext, useEffect, useRef, useState } from "react";
import Header from "./Header";
import Body from "./Body";
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import useBoolean, { BooleanHandlers } from "@/hooks/useBoolean";
import { ROUTER } from "@/consts";
import AdminPanelLayout from "@/components/admin-panel/admin-panel-layout";

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
  const navigate = useNavigate();

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
      <AdminPanelLayout>
        <Outlet />
      </AdminPanelLayout>
    </LayoutContext.Provider>
  );
};
AppLayout.displayName = "AppLayout";

export default AppLayout;
