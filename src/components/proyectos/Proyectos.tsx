import SliderAnuncios from "../UI/sliderAnuncios/SliderAnuncios";
import { crosby, crosbyRelojes, eclipse } from "../../data/Anuncios";
import CardProduct from "../UI/cardProduct/CardProduct";

const Proyectos = () => {
  const data = crosby;
  const dataFiesta = eclipse;
  const relojes = crosbyRelojes;
  return (
    <>
      <h2 className="text-xs mt-6 mb-6">Anuncios</h2>
      <SliderAnuncios data={data} />
      <CardProduct relojes={relojes}></CardProduct>
      <SliderAnuncios data={dataFiesta} />
    </>
  );
};

export default Proyectos;
