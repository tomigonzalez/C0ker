const Stream = () => {
  return (
    <div className="w-4/5 flex justify-center ">
      <div className="w-4/5 relative " style={{ paddingBottom: "46.25%" }}>
        <iframe
          src="https://player.kick.com/c0ker"
          className="rounded-xl absolute top-0 left-0 w-full h-full"
          style={{
            border: "none",
            overflow: "hidden",
          }}
        ></iframe>
      </div>
    </div>
  );
};

export default Stream;
