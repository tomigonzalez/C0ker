import { Suspense } from "react";
import { crosby, crosbyRelojes, toshiGang } from "../../data/Anuncios";
import CardProduct from "../UI/cardProduct/CardProduct";
import SliderAnuncios from "../UI/sliderAnuncios/SliderAnuncios";
import Stream from "../UI/stream/Stream";
import ToshiGang from "../UI/toshiGang/ToshiGang";
import YoutubeVideos from "../UI/youtube/YoutubeVideos";
import { VideoItem } from "../../types/types";

import { apiDat } from "../../utils/utils";

const Home = () => {
  const data = crosby;
  const relojes = crosbyRelojes;
  const toshi = toshiGang;

  const dataYoutube = apiDat.read();

  const filteredItems = dataYoutube.items
    .filter((item: VideoItem) => item.snippet.description !== "")
    .slice(0, 2);

  return (
    <>
      <Stream />
      <h2 className="text-xs mt-6 mb-6">Anuncios</h2>

      <SliderAnuncios data={data} />

      <CardProduct relojes={relojes}></CardProduct>

      {/* <h2 className="text-xs">Challenge semanal</h2> */}
      <h2 className="text-xs xl:mt-6 xl:mb-6 mt-3 mb-2">Youtube</h2>

      <Suspense fallback={<div>loading</div>}>
        <YoutubeVideos filteredItems={filteredItems} />
      </Suspense>

      <h2 className="text-xs xl:mt-4 xl:mb-4 mt-3 mb-0">Toshi Gang</h2>
      <ToshiGang toshi={toshi} />
    </>
  );
};

export default Home;
