import "../enConstruccion/construccion.css";
const EnConstruccion = () => {
  return (
    <section className="w-11/12 h-full  flex flex-row justify-evenly mt-6 mb-6">
      <div className="w-full xl:flex-row xl:gap-0  lg:gap-0 lg:flex-row  items-center gap-6 flex flex-col justify-around ">
        <div className=" xl:w-[43%] lg:w-[43%] w-[80%] justify-center bg-tertiary-black relative cursor-pointer rounded-lg overflow-hidden grid transition-transform duration-500 transform hover:scale-105 ">
          <div className="construction"></div>
        </div>
        <div className=" xl:w-[43%] lg:w-[43%] w-[80%] justify-center bg-tertiary-black relative cursor-pointer rounded-lg overflow-hidden grid transition-transform duration-500 transform hover:scale-105 ">
          <div className="construction"></div>
        </div>
      </div>
    </section>
  );
};

export default EnConstruccion;
