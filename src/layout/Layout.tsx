import Footer from "../components/UI/footer/Footer";
import Nav from "../components/UI/nav/Nav";

interface LayoutProps {
  children: React.ReactNode; //significa que puede recibir y renderizar una variedad de contenido.
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <section className="w-full h-screen bg-primary-white flex flex-col items-center text-tertiary-black">
      <Nav></Nav>
      {children}
      <Footer></Footer>
    </section>
  );
};

export default Layout;
