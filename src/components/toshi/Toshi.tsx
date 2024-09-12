import { toshiGang } from "../../data/Anuncios";
import EnConstruccion from "../UI/enConstruccion/enConstruccion";

import ToshiGang from "../UI/toshiGang/ToshiGang";

const Toshi = () => {
  const toshi = toshiGang;

  return (
    <>
      <h2 className="text-xs mt-4 mb-4">Toshi Gang</h2>
      <ToshiGang toshi={toshi} />
      <h2 className="text-xs mt-4 mb-4">Toshi eventos</h2>
      <EnConstruccion />
    </>
  );
};

export default Toshi;
