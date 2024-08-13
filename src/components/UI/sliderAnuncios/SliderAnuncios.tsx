import "../sliderAnuncios/SliderAnunciosStyle.css";

type Props = {
  sliderText: string;
};

const SliderAnuncios = (props: Props) => {
  return (
    <div className="slider">
      <div className="slide-track">
        <div className="slide">
          <h3>{props.sliderText}</h3>
        </div>
      </div>
    </div>
  );
};

export default SliderAnuncios;
