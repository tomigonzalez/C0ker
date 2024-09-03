import { useEffect, useState } from "react";
import Footer from "../components/UI/footer/Footer";
import Nav from "../components/UI/nav/Nav";
import Aos from "aos";
import "aos/dist/aos.css";
interface LayoutProps {
  children: React.ReactNode; //significa que puede recibir y renderizar una variedad de contenido.
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };
  useEffect(() => {
    Aos.init({
      duration: 1000, // Duración de la animación en milisegundos
      offset: 200, // Distancia en píxeles desde el fondo antes de activar la animación
      once: false, // Si `true`, la animación solo ocurre una vez al hacer scroll
    });
  }, []);
  return (
    <article className="w-full h-full bg-primary-white flex flex-col items-center text-tertiary-black">
      <Nav toggleMenu={toggleMenu} isOpen={isOpen}></Nav>
      <section className="w-full flex flex-col items-center mt-14 mb-4">
        {children}
      </section>
      <Footer></Footer>
    </article>
  );
};

export default Layout;
