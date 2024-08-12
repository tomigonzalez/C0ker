import { Home, SobreMi, Proyectos, Eventos, Toshi } from "./LazyComponents";

export const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/sobremi",
    element: <SobreMi />,
  },
  {
    path: "/proyectos",
    element: <Proyectos />,
  },
  {
    path: "/eventos",
    element: <Eventos />,
  },
  {
    path: "/toshi",
    element: <Toshi />,
  },
  {
    path: "*",
    element: <div>error</div>,
  },
];
