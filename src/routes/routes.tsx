import { Route, Routes } from "react-router-dom";
import { routes } from "../pagesLazy/routerConfig";
import { Suspense } from "react";
interface RouteConfig {
  path: string;
  element: JSX.Element;
}
export const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {routes.map((route: RouteConfig, index: number) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </Suspense>
  );
};
