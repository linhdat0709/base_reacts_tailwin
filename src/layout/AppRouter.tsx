import React, { ComponentType, lazy, Suspense } from "react";
import { Navigate, RouteObject, useRoutes } from "react-router-dom";
import SuspenseLoader from "src/components/SuspenseLoader";

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
    element: <LayoutContainer />,
    children: [
      {
        element: <DashboardPage />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
  {
    path: ROUTES.LOGIN,
    element: <LoginPage />,
  },
];

export default function AppRouter() {
  return useRoutes(router);
}
