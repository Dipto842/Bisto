import "./OURMENU.css";
import '../../GoogleFont/Font.css'
import Usemenu from "../../../castsomgug/Usemenu/Usemenu";
import { Link, useNavigate } from "react-router-dom";

const OURMENU = () => {
  
    const [menu] = Usemenu();
  const filtar = menu.filter((item) => item.category === "popular");
  return (


    <div className="backroundImges font1">
      <div>
        <div className="lg:pt-20">
          <h1 className="text-[#D99904] text-center">---Check it out---</h1>
          <h1 className="border border-b-2 lg:w-[424px] mx-auto mb-2"></h1>
          <p className="text-[40px] uppercase font-bold text-center">
            FROM OUR MENU
          </p>
          <p className="border border-b-2 lg:w-[424px] mx-auto mb-2"></p>
        </div>

        <div className="lg:flex justify-around mx-auto items-center w-[90%] lg:mt-[13%] mt-5 ">
          {/* Images */}
          <div className="lg:w-[50%]">
            {" "}
            <img src="../../../../public/Rectangle 14.png" alt="" />{" "}
          </div>

          {/* text */}
          <div className="lg:w-2/5 ">
            <p className=" text-white">
              <p className="text-[24px]">March 20, 2023</p> 
              <p className="text-[24px]">WHERE CAN I GET SOME?</p> 
              Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Error voluptate facere, deserunt
              dolores maiores quod nobis quas quasi. Eaque repellat recusandae
              ad laudantium tempore consequatur consequuntur omnis ullam maxime
              tenetur.
            </p>
            <div  className="card-actions ">
             <Link to={'/men'} > <button  className="hover:border-b-2 hover:bg-inherit hover:border-b-[#ffff] btn border-0 bg-inherit text-[#fff]    border-b-4 border-b-[#ffff]   text-center mx-auto w-[128px] mt-4 h-[24px]">
                Read More
              </button></Link>
            </div>
          </div>

         
        </div>
      </div>
    </div>
  );
};

export default OURMENU;
