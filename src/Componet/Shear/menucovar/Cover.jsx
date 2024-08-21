

const Cover = ({img,title,p,t,pp}) => {
    return (
        <div>
             <div className="hero min-h-screen  h-[572px] mx-auto mt-14" style={{ backgroundImage: `url(${img})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-[1096px] bg-[#151515] opacity-50 text-white h-[333.67px] mt-[140px]">
                        <h1 className="mb-5 text-5xl font-bold mt-[70px] ">{title}</h1>
                        <p className="mb-5 w-[762px] mt-[30px] ml-6 mr-7">{p}</p>
                        
                    </div>
                </div>
            </div>
           
        </div>
    );
};

export default Cover;