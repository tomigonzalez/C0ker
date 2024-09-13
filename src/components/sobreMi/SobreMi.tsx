const SobreMi = () => {
  return (
    <>
      <h2 className="text-xs mt-2 mb-6">Sobre Mi</h2>
      <div className="w-11/12 flex flex-col gap-4 ">
        <div className="flex xl:flex-row lg:flex-row items-center text-center flex-col w-full xl:gap-14 lg:gap-14 gap-6">
          <div className="w-[80%] xl:w-11/12 lg:w-11/12">
            <img
              src="assets/c0kersobremi2.png"
              className="rounded-2xl w-full shadow-lg"
              alt="C0ker"
            />
          </div>
          <div className="  w-full xl:text-xs lg:text-xs text-[0.5rem] content-center">
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
              similique iusto, unde nam, aperiam quod ratione minima omnis,
              vitae harum quas nostrum non voluptatem obcaecati quibusdam illum
              eveniet rem modi!
            </p>
          </div>
        </div>
        <div className="flex xl:flex-row lg:flex-row items-center text-center  flex-col-reverse  w-full xl:gap-14 lg:gap-14 gap-6">
          <div className="w-full xl:text-xs lg:text-xs text-[0.5rem] content-center">
            <p className=" ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
              similique iusto, unde nam, aperiam quod ratione minima omnis,
              vitae harum quas nostrum non voluptatem obcaecati quibusdam illum
              eveniet rem modi!
            </p>
          </div>
          <div className="w-[80%] xl:w-11/12 lg:w-11/12">
            <img
              src="assets/c0kersobremi.png"
              className="rounded-2xl w-full shadow-lg"
              alt="C0ker"
            />
          </div>
        </div>
        <div className="flex xl:flex-row lg:flex-row items-center text-center flex-col  w-full xl:gap-14 lg:gap-14 gap-6">
          <div className="w-[80%] xl:w-full lg:w-full ">
            <img
              src="assets/c0kersobremi1.png"
              className="rounded-2xl w-full h-full shadow-lg "
              alt="C0ker"
            />
          </div>
          <div className="w-full  xl:text-xs lg:text-xs text-[0.5rem] content-center">
            <p className=" ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
              similique iusto, unde nam, aperiam quod ratione minima omnis,
              vitae
            </p>{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default SobreMi;
