import { formatDistanceToNow } from "date-fns";
import { VideoItem } from "../../../types/types";
import { es } from "date-fns/locale";

interface YoutubeVideosProps {
  filteredItems: VideoItem[];
}

const YoutubeVideos = (props: YoutubeVideosProps) => {
  return (
    <section className="w-11/12 h-full flex flex-row justify-evenly mt-6 mb-6">
      <div className="w-full flex flex-row justify-around ">
        {props.filteredItems.map((video: VideoItem) => {
          const publishedAt = new Date(video.snippet.publishedAt);
          const relativeTime = formatDistanceToNow(publishedAt, {
            addSuffix: true,
            locale: es,
          });

          return (
            <figure
              key={video.id}
              className="w-[43%] relative cursor-pointer rounded-lg overflow-hidden grid transition-transform duration-500 transform hover:scale-110 shadow-lg"
            >
              <a
                href={`https://www.youtube.com/watch?v=${video.snippet.resourceId.videoId}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="w-full h-auto"
                  src={video.snippet.thumbnails.maxres.url}
                  alt={video.snippet.title}
                />
                <div className="absolute font-[arial] font-bold top-2 left-2 text-[0.4rem] text-primary-white bg-black bg-opacity-50 rounded px-1 py-0">
                  {relativeTime.toUpperCase()}
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12 text-white opacity-80 hover:opacity-100"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M3 22V2l18 10-18 10z" />
                  </svg>
                </div>
                <figcaption className="absolute bottom-0 w-full text-white font-bold text-2xl pl-3 pr-3 bg-black bg-opacity-60 transition-transform duration-400 clip-text mask-mask-composite-xor hover:clip-text-inset-0">
                  <h5 className="text-xs">{video.snippet.title}</h5>
                  <h3 className="text-[0.5rem] font-[arial] flex justify-end ">
                    @C0ker
                  </h3>
                </figcaption>
              </a>
            </figure>
          );
        })}
      </div>
    </section>
  );
};

export default YoutubeVideos;
