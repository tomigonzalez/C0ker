import { FaInstagram, FaYoutube } from "react-icons/fa";
import { IoDocumentAttachOutline } from "react-icons/io5";
import { RiKickLine, RiTiktokLine } from "react-icons/ri";
import { SlSocialLinkedin } from "react-icons/sl";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className=" w-full h-full bg-cover bg-center bg-transparent-to-gray flex flex-row justify-center">
      <div className="w-11/12 h-full flex xl:flex-row xl:justify-between lg:flex-row lg:justify-between md:flex-row md:justify-between sm:flex-col flex-col  items-center">
        <div className="flex flex-col m-2">
          <h1 className=" text-4xl text-secondary-orange">C0ker</h1>
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
        <div className="flex flex-col justify-center">
          <ul className="flex flex-col gap-[0.3rem] font-uzusi xl:text-[0.4rem] xl:items-start sm:text-[0.5rem] md:items-start lg:items-start items-center  text-[0.55rem]">
            <li className=" hover:text-secondary-orange">
              <Link to="/" rel="noopener noreferrer">
                INICIO
              </Link>
            </li>
            <li className=" hover:text-secondary-orange">
              <Link to="sobremi" rel="noopener noreferrer">
                SOBRE MI
              </Link>
            </li>
            <li className=" hover:text-secondary-orange">
              <Link to="proyectos" rel="noopener noreferrer">
                PROYECTOS
              </Link>
            </li>
            <li className=" hover:text-secondary-orange">
              <Link to="contenido" rel="noopener noreferrer">
                CONTENIDO
              </Link>
            </li>
            <li className=" hover:text-secondary-orange">
              <Link to="toshi" rel="noopener noreferrer">
                TOSHI
              </Link>
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
