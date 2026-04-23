

const Cover = ({ img, title, p, t, pp }) => {
  return (
    <div>
      <div
        className="hero min-h-screen font-extralight  h-[572px] mx-auto "
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="hero-overlay bg-opacity-[-4.4]"></div>
        <div className="hero-content text-center text-neutral-content ">
          <div className="lg:max-w-[1096px] bg-[#151515] bg-opacity-40 text-white h-[333.67px] mt-[10px]">
            <h1 className="mb-5 text-5xl font-extrabold mt-[70px] opacity-90">{title}</h1>
            <p className="mb-5 lg:w-[762px] mt-[30px] ml-6 mr-7">{p}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cover;
