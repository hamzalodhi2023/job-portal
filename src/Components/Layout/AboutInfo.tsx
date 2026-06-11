function AboutInfo() {
  return (
    <div className="w-full py-15 flex items-center justify-center flex-col">
      <div className="w-full lg:px-18 px-5 py-10 flex items-center justify-between gap-10 flex-col lg:flex-row">
        <h2 className="lg:w-1/2 w-full text-[40px] text-center lg:text-left font-semibold">
          Et nunc ut tempus duis nisl sed massa
        </h2>
        <p className="lg:w-1/2 w-full text-[16px] font-normal text-center lg:text-justify">
          Nunc sed a nisl purus. Nibh dis faucibus proin lacus tristique. Sit
          congue non vitae odio sit erat in. Felis eu ultrices a sed massa.
          Commodo fringilla sed tempor risus laoreet ultricies ipsum. Habitasse
          morbi faucibus in iaculis lectus. Nisi enim feugiat enim volutpat. Sem
          quis viverra viverra odio mauris nunc.
        </p>
      </div>
      <img src="./AboutInfo.png" alt="" className="w-full px-5 lg:px-18" />
    </div>
  );
}

export default AboutInfo;
