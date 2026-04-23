import { useContext } from "react";
import { Athcontes } from "../../../../../Provadar/AthoProvadar";
import Axios from "../../../../../castsomgug/axios/axios";
import Useten from "../../../../../castsomgug/axios/tenstack/Useten";

const Foot = ({ item,hendelBooking }) => {
  const { image, name, price, recipe, _id, category } = item;
  const { user } = useContext(Athcontes);

  const [, refetch] = Useten();
  const axiospat = Axios();
  const hendelclick = (foot) => {
   
    if (user && user.email) {
     
      const criditem = {
        menuid: _id,
        category: category,
        email: user.email,
        name,
        price,
        image,
      };
      axiospat.post("/crids", criditem).then((res) => {
        
        if (res.data.insertedId) {
          alert("Add the  crid");
        }

        refetch();
      });
    }
  };
  return (
    <div>
      <div className="card card-compact  h-[400px] bg-[#f3f3f3] shadow-xl ">
        <figure className="w-full ">
          <img
            width={"100%"}
            src={image}
            alt="Shoes"
            className="rounded-xl bg-cover h-[150px]  "
          />
        </figure>
        <div className="card-body items-center text-start    ">
          <h2 className="card-title text-black font-bold text-[25px] flex gap-2 items-center  justify-center ">
            {name}{" "}
            <span className="card-title  text-[25px] text-[#BB8506]">
              ${price}
            </span>
          </h2>

          <p className="text-[12px] mb-3 mt-2 text-[#8b8b8b] font-semibold">
            {recipe}
          </p>
          <div className="card-actions">
            <button
              onClick={hendelclick}
              className="btn border-b-4 font-bold  border-b-[#BB8506] border-0 hover:bg-[#1F2937] hover:text-[#BB8506] bg-[#E8E8E8] text-[#BB8506]"
            >
              add to cart
            </button>
            {/* Booking */}
            <button
              onClick={() => hendelBooking(item)}
              className="btn border-b-4 font-bold  border-b-[#BB8506] border-0 hover:bg-[#1F2937] hover:text-[#BB8506] bg-[#E8E8E8] text-[#BB8506]"
            >
            <div> <i className="fa-solid fa-heart-circle-plus"></i></div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Foot;
