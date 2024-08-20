import { Home, SobreMi, Proyectos, Eventos, Toshi } from "./LazyComponents";

export const routes = [
  {
    path: "/",
    nombre: "INICIO",
    element: <Home />,
  },
  {
    path: "/sobremi",
    nombre: "SOBRE MI",
    element: <SobreMi />,
  },
  {
    path: "/proyectos",
    nombre: "PROYECTOS",
    element: <Proyectos />,
  },
  {
    path: "/eventos",
    nombre: "EVENTOS",
    element: <Eventos />,
  },
  {
    path: "/toshi",
    nombre: "TOSHI",
    element: <Toshi />,
  },
  {
    path: "*",
    nombre: "",
    element: <div>error</div>,
  },
];
