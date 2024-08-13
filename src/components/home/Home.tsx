import Stream from "../UI/stream/Stream";

type Props = {};

const Home = (props: Props) => {
  return (
    <section>
      <Stream />
      <h2 className="text-xs">Anuncios</h2>
    </section>
  );
};

export default Home;
