import { Route, Routes } from "react-router-dom";
import { routes } from "../pagesLazy/routerConfig";
import { Suspense } from "react";
import Skeleton from "../components/UI/skeleton/Skeleton";
import ScrollToTop from "../components/UI/scrollTop/ScrollTop";

interface RouteConfig {
  path: string;
  element: JSX.Element;
}
export const AppRouter = () => {
  return (
    <Suspense fallback={<Skeleton />}>
      <ScrollToTop />
      <Routes>
        {routes.map((route: RouteConfig, index: number) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </Suspense>
  );
};
