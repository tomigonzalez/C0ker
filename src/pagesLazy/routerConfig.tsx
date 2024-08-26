import Contenido from "../components/contenido/Contenido";
import { Home, SobreMi, Proyectos, Toshi } from "./LazyComponents";

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
    path: "/contenido",
    nombre: "CONTENIDO",
    element: <Contenido />,
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
