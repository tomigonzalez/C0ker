import "../cardProduct/CardProductStyle.css";

type Product = {
  id: number;
  name: string;
  url: string;
  desc: string;
};

type Props = {
  relojes: Product[];
};

const CardProduct = (props: Props) => {
  return (
    <ul className="w-11/12 h-full flex flex-row justify-center uls">
      {props.relojes.map((item) => (
        <li key={item.id}>
          <section
            className="product-container product-3"
            data-aos="fade-up"
            data-aos-delay={item.id * 100}
          >
            <div className="card">
              <div className="photo">
                <img src={item.url} alt="product" />
              </div>
              <div className="content">
                <h1 className="title">{item.name}</h1>
                <h2 className="bg-title">{item.name}</h2>
                <div className="feature text-[15px]">
                  <h3>{item.desc}</h3>
                </div>

                <a
                  className="btn-buy bg-white mt-2 font-semibold cursor-pointer text-[25px] p-1"
                  href="https://crosby.com.ar/"
                >
                  Ir a la web
                </a>
              </div>
            </div>
          </section>
        </li>
      ))}
    </ul>
  );
};

export default CardProduct;
