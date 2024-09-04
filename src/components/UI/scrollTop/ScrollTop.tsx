import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();  // Detecta cambios en la ruta

  useEffect(() => {
    window.scrollTo(0, 0);  // Desplaza la página al tope cada vez que cambia la ruta
  }, [pathname]);  // Este efecto se dispara cada vez que cambia 'pathname'

  return null;
};

export default ScrollToTop;