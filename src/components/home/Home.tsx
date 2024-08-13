import { crosby } from "../../data/Anuncios";
import SliderAnuncios from "../UI/sliderAnuncios/SliderAnuncios";
import Stream from "../UI/stream/Stream";

const Home = () => {
  const data = crosby;
  return (
    <section className="flex flex-col items-center">
      <Stream />
      <h2 className="text-xs">Anuncios</h2>
      <SliderAnuncios data={data} />
    </section>
  );
};

export default Home;
