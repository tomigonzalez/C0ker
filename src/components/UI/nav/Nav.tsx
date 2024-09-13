import { HiMenuAlt3, HiX } from "react-icons/hi";
import CircleRec from "./circleRec/CircleRec";
import ModalMenu from "./modalMenu/ModalMenu";
import "../nav/atroposFichas/AtroposStyle.css";
import { useEffect, useState } from "react";
type Props = {
  isOpen: boolean;
  toggleMenu: () => void;
};
const Nav = (props: Props) => {
  const [showNav, setShowNav] = useState(true); // Estado para controlar la visibilidad del nav
  const [lastScrollY, setLastScrollY] = useState(0); // Para almacenar la última posición de scroll

  // Función que controla la visibilidad del nav en función del scroll
  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      setShowNav(false); // Ocultar el nav cuando hacemos scroll hacia abajo
    } else {
      setShowNav(true); // Mostrar el nav cuando hacemos scroll hacia arriba
    }
    setLastScrollY(window.scrollY); // Actualizar la posición del scroll
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar); // Limpiar el listener
    };
  }, [lastScrollY]);

  return (
    <>
      <nav
        className={`w-full h-12 fixed z-50 flex flex-col items-center bg-cover bg-center bg-gray-to-transparent transition-transform duration-300 ${
          showNav ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="w-11/12  h-full flex flex-row justify-between items-center">
          <div className="w-1/4 flex xl:text-[0.95rem] sm:text-[0.9rem] text-[0.6rem]">
            <div className="w-3.5">
              <CircleRec />
            </div>
            <h3>NLINE</h3>
          </div>
          <div className="w-1/4 h-full flex flex-col items-center justify-center xl:text-xs sm:text-[0.7rem] text-[0.6rem]">
            <div className="h-7 w-7">
              <img
                className="w-full h-full"
                src="assets/c0ker.png"
                alt="C0kerrrr"
                title="C0kerrrr"
              />
            </div>
            <h1>C0KER</h1>
          </div>
          <div className="w-1/4 flex flex-row justify-end">
            {props.isOpen ? (
              <button
                onClick={props.toggleMenu}
                className="transition hover:text-secondary-orange"
              >
                <HiX className="xl:w-[45px] xl:h-[45px]  sm:w-[40px] sm:h-[40px] w-[30px] h-[30px]" />
              </button>
            ) : (
              <button
                onClick={props.toggleMenu}
                className="transition2 hover:text-secondary-orange"
              >
                <HiMenuAlt3 className="xl:w-[45px] xl:h-[45px]  sm:w-[40px] sm:h-[40px] w-[30px] h-[30px]" />
              </button>
            )}
          </div>
        </div>
      </nav>
      {props.isOpen && (
        <ModalMenu toggleMenu={props.toggleMenu} isOpen={props.isOpen} />
      )}
    </>
  );
};

export default Nav;
