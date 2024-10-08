import { FaInstagram } from "react-icons/fa";
import { IoLogoTwitch } from "react-icons/io5";
import { RiKickLine } from "react-icons/ri";
import "../toshiGang/ToshiGangStyle.css";

type Product = {
  id: number;
  ig: string;
  twitch: string;
  kick: string;
  img: string;
  name: string;
  desc: string;
};

type Props = {
  toshi: Product[];
};

const ToshiGang = (props: Props) => {
  return (
    <section className="w-11/12 h-full flex flex-wrap justify-evenly">
      {props.toshi.map((item, index) => (
        <div
          className="m-6"
          key={index}
          data-aos="fade-up"
          data-aos-delay={index * 100}
        >
          <div className="w-28 h-28 cards">
            <figure className="cardss">
              <img className="w-full h-full" src={item.img} />
            </figure>
          </div>
          <div className="flex flex-col items-center ">
            <h4>{item.name}</h4>
            <div className="flex flex-row justify-between w-full">
              <a
                href={item.ig}
                className=" hover:text-secondary-orange"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
              <a
                href={item.twitch}
                className=" hover:text-secondary-orange"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IoLogoTwitch />
              </a>
              <a
                href={item.kick}
                className=" hover:text-secondary-orange"
                target="_blank"
                rel="noopener noreferrer"
              >
                <RiKickLine />
              </a>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ToshiGang;
