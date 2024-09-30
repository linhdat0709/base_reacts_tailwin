import React, { ComponentType, lazy, Suspense } from "react";
import { RouteObject, useRoutes } from "react-router-dom";
import AppLayout from "./AppLayout";
import NotFoundError from "@/pages/errors/page";
import { ROUTER } from "@/consts";
import SuspenseLoader from "@/components/SuspenseLoader";

function Loadable<T extends JSX.IntrinsicAttributes>(
  WrappedComponent: ComponentType<T>
) {
  const displayName =
    WrappedComponent.displayName || WrappedComponent.name || "Component";
  const ComponentWithTheme: React.FC<T> = (props) => {
    return (
      <Suspense fallback={<SuspenseLoader />}>
        <WrappedComponent {...props} />
      </Suspense>
    );
  };
  ComponentWithTheme.displayName = `withLoadable(${displayName})`;

  return ComponentWithTheme;
}

const DashboardPage = Loadable(lazy(() => import("@/pages/dashboard/page")));

const router: RouteObject[] = [
  {
    path: "",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
      {
        path: "*",
        element: <NotFoundError />,
      },
    ],
  },
  {
    path: ROUTER.LOGIN,
    element: <></>,
  },
];

export default function AppRouter() {
  return useRoutes(router);
}
