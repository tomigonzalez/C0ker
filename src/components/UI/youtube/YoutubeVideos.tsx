import { VideoItem } from "../../../types/types";

interface YoutubeVideosProps {
  filteredItems: VideoItem[];
}
const YoutubeVideos = (props: YoutubeVideosProps) => {
  return (
    <section className="w-11/12 h-full flex flex-row justify-evenly mt-10 mb-10">
      <div className="w-full flex flex-row justify-around ">
        {props.filteredItems.map((video: VideoItem) => (
          <div className="w-2/5 flex flex-col " key={video.id}>
            <img
              className="w-full rounded-xl"
              src={video.snippet.thumbnails.maxres.url}
              alt={video.snippet.title}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default YoutubeVideos;
