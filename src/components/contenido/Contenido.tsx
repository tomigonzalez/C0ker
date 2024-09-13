import { Suspense } from "react";
import Stream from "../UI/stream/Stream";
import YoutubeVideos from "../UI/youtube/YoutubeVideos";
import { VideoItem } from "../../types/types";
import { apiDat } from "../../utils/utils";
import EnConstruccion from "../UI/enConstruccion/EnConstruccion";

const Contenido = () => {
  const dataYoutube = apiDat.read();

  const filteredItems = dataYoutube.items
    .filter((item: VideoItem) => item.snippet.description !== "")
    .slice(0, 2);
  return (
    <>
      <h2 className="text-xs ">Contenido</h2>
      <Stream />
      <h2 className="text-xs xl:mt-6 lg:mt-6 xl:mb-6 lg:mb-6 mb-2 mt-2">
        Youtube{" "}
      </h2>
      <Suspense fallback={<div>loading</div>}>
        <YoutubeVideos filteredItems={filteredItems} />
      </Suspense>
      <h2 className="text-xs ">Clips</h2>
      <EnConstruccion />
    </>
  );
};

export default Contenido;
