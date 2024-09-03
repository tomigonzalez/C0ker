import { useState } from "react";

type Product = {
  id: number;
  name: string;
  url: string;
  desc: string;
};

type Props = {
  dataEclipseImg: Product[];
};

const EclipseGalery = (props: Props) => {
  const [selectedImage, setSelectedImage] = useState("");

  const handleImageClick = (url: string) => {
    setSelectedImage(url);
  };

  const handleCloseModal = () => {
    setSelectedImage("");
  };
  return (
    <div className="w-9/12 h-full mt-6 flex justify-evenly flex-row ">
      {props.dataEclipseImg.map((item, index) => {
        const isLastItem = index === props.dataEclipseImg.length - 1;

        return (
          <>
            {isLastItem ? (
              <div className=" w-[300px] flex flex-col items-center">
                <div
                  className="h-3/2 w-full rounded-lg overflow-hidden shadow-md transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
                  onClick={() => handleImageClick(item.url)}
                  data-aos-delay={index * 100}
                  data-aos="fade-out"
                >
                  <img
                    src={item.url}
                    className="w-full h-full bg-cover cursor-pointer"
                  />
                </div>
                <div className="h-1/4 w-full text-center content-center">
                  <a
                    href="https://www.instagram.com/eclipse.techno/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-secondary-orange "
                  >
                    VER MAS
                  </a>
                </div>
              </div>
            ) : (
              <div
                onClick={() => handleImageClick(item.url)}
                className="w-[300px] h-full flex flex-col  rounded-lg overflow-hidden shadow-md transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
                data-aos-delay={index * 100}
                data-aos="fade-out"
              >
                <img src={item.url} className="w-full h-full bg-cover" />
              </div>
            )}
            {selectedImage && (
              <div
                className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50"
                onClick={handleCloseModal}
              >
                <div className="relative">
                  <img src={selectedImage} className="max-w-full max-h-full" />
                  <button
                    className="absolute top-0 right-0 text-white  p-2 rounded"
                    onClick={handleCloseModal}
                  >
                    x
                  </button>
                </div>
              </div>
            )}
          </>
        );
      })}
    </div>
  );
};

export default EclipseGalery;
