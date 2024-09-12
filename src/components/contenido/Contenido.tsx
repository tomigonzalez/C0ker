import { Suspense } from "react";
import Stream from "../UI/stream/Stream";
import YoutubeVideos from "../UI/youtube/YoutubeVideos";
import { VideoItem } from "../../types/types";
import { apiDat } from "../../utils/utils";
import EnConstruccion from "../UI/enConstruccion/enConstruccion";

const Contenido = () => {
  const dataYoutube = apiDat.read();

  const filteredItems = dataYoutube.items
    .filter((item: VideoItem) => item.snippet.description !== "")
    .slice(0, 2);
  return (
    <>
      <h2 className="text-xs ">Contenido</h2>
      <Stream />
      <h2 className="text-xs mt-6 mb-6">Youtube </h2>
      <Suspense fallback={<div>loading</div>}>
        <YoutubeVideos filteredItems={filteredItems} />
      </Suspense>
      <h2 className="text-xs ">CHALLENGE</h2>
      <EnConstruccion />
    </>
  );
};

export default Contenido;
