import { useState } from "react";
import Footer from "../components/UI/footer/Footer";
import Nav from "../components/UI/nav/Nav";

interface LayoutProps {
  children: React.ReactNode; //significa que puede recibir y renderizar una variedad de contenido.
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <article className="w-full h-full bg-primary-white flex flex-col items-center text-tertiary-black">
      <Nav></Nav>
      {children}
      <Footer></Footer>
    </article>
  );
};

export default Layout;
