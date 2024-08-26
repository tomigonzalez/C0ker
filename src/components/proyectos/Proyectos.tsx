import SliderAnuncios from "../UI/sliderAnuncios/SliderAnuncios";
import {
  crosby,
  crosbyRelojes,
  eclipse,
  eclipseImg,
} from "../../data/Anuncios";
import CardProduct from "../UI/cardProduct/CardProduct";
import EclipseGalery from "../UI/eclipse/EclipseGalery";

const Proyectos = () => {
  const data = crosby;
  const dataFiesta = eclipse;
  const relojes = crosbyRelojes;
  const dataEclipseImg = eclipseImg;
  return (
    <>
      <h2 className="text-xs mt-4 mb-6">Anuncios</h2>
      <SliderAnuncios data={data} />
      <CardProduct relojes={relojes} />
      <SliderAnuncios data={dataFiesta} />
      <EclipseGalery dataEclipseImg={dataEclipseImg} />
    </>
  );
};

export default Proyectos;
