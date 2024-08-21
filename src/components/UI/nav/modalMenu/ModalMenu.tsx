import { Link } from "react-router-dom";
import { routes } from "../../../../pagesLazy/routerConfig";
import AtroposFichas from "../atroposFichas/AtroposFichas";
import "../atroposFichas/AtroposStyle.css";
type Props = { toggleMenu: () => void; isOpen: boolean };

const ModalMenu = (props: Props) => {
  return (
    <>
      {props.isOpen && (
        <div className=" h-full fixed inset-0 bg-primary bg-primary-white flex flex-col items-center justify-center z-20 modal-enter">
          <AtroposFichas></AtroposFichas>
          <div className="relative z-20">
            <ul className=" flex flex-col justify-center text-center font-usuzi gap-4">
              {routes.map((item, index) => (
                <li key={index}>
                  <Link to={item.path} className=" text-xs">
                    {item.nombre && (
                      <h1 className="font-uzusi hover:text-secondary-orange">
                        {item.nombre}
                      </h1>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalMenu;
