import { HiMenuAlt3 } from "react-icons/hi";
import CircleRec from "./circleRec/CircleRec";

const Nav = () => {
  return (
    <nav className="w-full h-12  flex flex-col items-center bg-cover bg-center bg-gray-to-transparent">
      <div className="w-11/12 h-full flex flex-row justify-between items-center">
        <div className="w-1/4 flex">
          <div className="w-3.5">
            <CircleRec />
          </div>
          <h3>ONLINE</h3>
        </div>
        <div className="w-1/4 h-full flex flex-col items-center justify-center">
          <div className="h-7 w-7">
            <img
              className="w-full h-full"
              src="public/assets/c0ker.png"
              alt="C0kerrrr"
              title="C0kerrrr"
            />
          </div>
          <h1 className="text-xs">C0KER</h1>
        </div>
        <div className="w-1/4 flex flex-row justify-end">
          <HiMenuAlt3 size={35} className="" />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
