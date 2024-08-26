import { Suspense } from "react";
import { toshiGang } from "../../data/Anuncios";
import { VideoItem } from "../../types/types";
import { apiDat } from "../../utils/utils";
import ToshiGang from "../UI/toshiGang/ToshiGang";
import YoutubeVideos from "../UI/youtube/YoutubeVideos";

const Toshi = () => {
  const toshi = toshiGang;
  const dataYoutube = apiDat.read();

  const filteredItems = dataYoutube.items
    .filter((item: VideoItem) => item.snippet.description !== "")
    .slice(0, 2);
  return (
    <>
      <h2 className="text-xs mt-4 mb-4">Toshi Gang</h2>
      <ToshiGang toshi={toshi} />
      <h2 className="text-xs mt-4 mb-4">Max Win</h2>
      <Suspense fallback={<div>loading</div>}>
        <YoutubeVideos filteredItems={filteredItems} />
      </Suspense>
    </>
  );
};

export default Toshi;
