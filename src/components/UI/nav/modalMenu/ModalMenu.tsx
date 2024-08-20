import { IoClose } from "react-icons/io5";
import { routes } from "../../../../pagesLazy/routerConfig";

type Props = { toggleMenu: () => void };

const ModalMenu = (props: Props) => {
  return (
    <div className="fixed inset-0 bg-primary bg-primary-white flex flex-col items-center justify-center z-20">
      <button
        onClick={props.toggleMenu}
        className="absolute top-4 right-4 text-4xl hover:text-secondary-orange"
      >
        <IoClose />
      </button>
      <div>
        <ul className=" flex flex-col justify-center text-center font-usuzi">
          {routes.map((item, index) => (
            <li key={index}>
              <a href={item.path} className=" text-xs">
                {item.nombre && (
                  <h1 className="font-uzusi hover:text-secondary-orange">
                    {item.nombre}
                  </h1>
                )}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ModalMenu;
