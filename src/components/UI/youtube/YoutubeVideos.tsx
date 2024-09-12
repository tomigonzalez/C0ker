import { formatDistanceToNow } from "date-fns";
import { VideoItem } from "../../../types/types";
import { es } from "date-fns/locale";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
interface YoutubeVideosProps {
  filteredItems: VideoItem[];
}

const YoutubeVideos = (props: YoutubeVideosProps) => {
  return (
    <section className="w-11/12 h-full  flex flex-row justify-evenly mt-6 mb-6">
      <div className="w-full xl:flex-row xl:gap-0  lg:gap-0 lg:flex-row  items-center gap-6 flex flex-col justify-around ">
        {props.filteredItems.map((video: VideoItem) => {
          const publishedAt = new Date(video.snippet.publishedAt);

          const relativeTime = formatDistanceToNow(publishedAt, {
            addSuffix: true,
            locale: es,
          });

          return (
            <div className=" xl:w-[43%] lg:w-[43%] w-[80%] relative cursor-pointer rounded-lg overflow-hidden grid transition-transform duration-500 transform hover:scale-105 ">
              <LiteYouTubeEmbed
                id={video.snippet.resourceId.videoId}
                title={video.snippet.title}
                poster={"maxresdefault"}
              ></LiteYouTubeEmbed>
              <div className="absolute font-[arial] font-bold top-2 left-2 text-[0.4rem] text-primary-white bg-black bg-opacity-50 rounded px-1 py-0">
                {relativeTime.toUpperCase()}
              </div>
              <div className="absolute bottom-0 text-white font-bold text-2xl pl-3 pr-3 right-1  ">
                <h3 className="text-[0.5rem] font-[arial] flex justify-end ">
                  @C0ker
                </h3>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default YoutubeVideos;
