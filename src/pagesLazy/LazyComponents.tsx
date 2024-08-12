import React from "react";

export const Home = React.lazy(() => import("../components/home/Home"));
export const SobreMi = React.lazy(
  () => import("../components/sobreMi/SobreMi")
);
export const Proyectos = React.lazy(
  () => import("../components/proyectos/Proyectos")
);
export const Eventos = React.lazy(
  () => import("../components/eventos/Eventos")
);
export const Toshi = React.lazy(() => import("../components/toshi/Toshi"));
