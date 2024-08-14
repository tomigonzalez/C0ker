import "../sliderAnuncios/SliderAnunciosStyle.css";

type Props = {
  data: string[];
};

const SliderAnuncios = (props: Props) => {
  return (
    <div className="flex h-6 w-full slider bg-cuarto-gray text-white overflow-hidden">
      <div className="slide-track autoplay">
        {props.data.map((item) => (
          <div className="slide">{item}</div>
        ))}
      </div>
    </div>
  );
};

export default SliderAnuncios;
