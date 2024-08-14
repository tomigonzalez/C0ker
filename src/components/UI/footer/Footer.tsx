import { FaInstagram, FaYoutube } from "react-icons/fa";
import { IoDocumentAttachOutline } from "react-icons/io5";
import { RiKickLine, RiTiktokLine } from "react-icons/ri";
import { SlSocialLinkedin } from "react-icons/sl";

const Footer = () => {
  return (
    <footer className=" w-full h-full bg-cover bg-center bg-transparent-to-gray flex flex-row justify-center">
      <div className="w-11/12 h-full flex flex-row justify-between">
        <div className="flex flex-col m-2">
          <h1 className="text-4xl text-secondary-orange">C0ker</h1>
          <div className="flex flex-row justify-between">
            <a
              href="https://www.instagram.com/c0ker_/?hl=es"
              className=" hover:text-secondary-orange"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.youtube.com/@c0ker"
              className=" hover:text-secondary-orange"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube />
            </a>
            <a
              href="https://www.tiktok.com/@c0ker2?lang=es"
              className=" hover:text-secondary-orange"
              target="_blank"
              rel="noopener noreferrer"
            >
              <RiTiktokLine />
            </a>
            <a
              href="https://kick.com/c0ker"
              className=" hover:text-secondary-orange"
              target="_blank"
              rel="noopener noreferrer"
            >
              <RiKickLine />
            </a>
          </div>
        </div>
        <div className="flex flex-col">
          <ul className="flex flex-col text-[0.4rem] font-uzusi">
            <li className=" hover:text-secondary-orange">
              <a href="#" target="_blank" rel="noopener noreferrer">
                INICIO
              </a>
            </li>
            <li className=" hover:text-secondary-orange">
              <a href="#" target="_blank" rel="noopener noreferrer">
                SOBRE MI
              </a>
            </li>
            <li className=" hover:text-secondary-orange">
              <a href="#" target="_blank" rel="noopener noreferrer">
                PROYECTOS
              </a>
            </li>
            <li className=" hover:text-secondary-orange">
              <a href="#" target="_blank" rel="noopener noreferrer">
                CONTENIDO
              </a>
            </li>
            <li className=" hover:text-secondary-orange">
              <a href="#" target="_blank" rel="noopener noreferrer">
                TOSHI
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col self-end p-6">
          <p className="text-[0.5rem] font-sans m-0">Powered by</p>
          <a
            href="https://portafolio-indol.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className="text-xl text-tertiary-black m-0  hover:text-secondary-orange">
              TMGC
            </h2>
          </a>
          <div className="flex flex-row justify-between">
            <a
              href="https://www.instagram.com/tomigonnzalez1/?hl=es"
              target="_blank"
              rel="noopener noreferrer"
              className=" hover:text-secondary-orange"
            >
              <FaInstagram fontSize={20} />
            </a>
            <a
              href="https://portafolio-indol.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className=" hover:text-secondary-orange"
            >
              <IoDocumentAttachOutline fontSize={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/tomigonzalez/"
              target="_blank"
              rel="noopener noreferrer"
              className=" hover:text-secondary-orange"
            >
              <SlSocialLinkedin fontSize={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
