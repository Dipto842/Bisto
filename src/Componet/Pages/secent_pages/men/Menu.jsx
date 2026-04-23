import Cover from "../../../Shear/menucovar/Cover";
import img1 from "../../../../assets/menu/banner3.jpg";
import img2 from "../../../../assets/home/chef-service.jpg";
import Usemenu from "../../../../castsomgug/Usemenu/Usemenu";
import "../../popularitem/PopularItem.css";
import "../../../GoogleFont/Font.css";
import "./Menu.css";
import { useContext, useState } from "react";
import Useten from "../../../../castsomgug/axios/tenstack/Useten";
import { Athcontes } from "../../../../Provadar/AthoProvadar";
import Axios from "../../../../castsomgug/axios/axios";
import Swal from "sweetalert2";
const Menu = () => {
  const [menu] = Usemenu();
  const offered = menu.filter((item) => item.discount);
  const salad = menu.filter((item) => item.category === "salad");
  const dessert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const [show, setsho] = useState(4);

  const [, refetch] = Useten();
  const { user } = useContext(Athcontes);
  const axiospat = Axios();

  const hendelShow = () => {
    setsho((add) => add + 4);
  };

  // Add to cart function
  const hedelAdd = (data) => {
    if (user && user.email) {
      const Data = {
        menuid: data._id,
        category: data.category,
        email: user.email,
        name: data.name,
        price: data.price,
        image: data.image,
        discount: data.discount,
      };

      axiospat.post("/crids", Data).then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Add the  crid",

            showConfirmButton: false,
            timer: 1500,
          });
        }

        refetch();
      });
    }
  };
  // Show details function
  const hendelDiscount = (id) => {
    Swal.fire({
      imageUrl: id.image,
      title: id.name + " - " + "$" + id.discount,
      text: id.recipe,
      imageWidth: 510,
      imageHeight: 300,
      imageAlt: { id },
      confirmButtonText: "Add to cart",
    }).then((result) => {
      if (result.isConfirmed) {
        hedelAdd(id);
      }
    });
  };

  

  return (
    <div className="">
      <Cover
        img={img1}
        title={"OUR MENU"}
        p={"Would you like to try a dish?"}
      ></Cover>
      <div className="text-center mt-24 ">
        <h1 className="mt-5 mb-3 text-[#D99904]">---Don't miss----</h1>
        <h1 className="border border-b-2 w-[424px] mx-auto mb-2"></h1>
        <h1 className="text-[30px] font-bold">TODAY'S OFFERU</h1>
        <h1 className="border border-b-2 w-[424px] mx-auto mt-4"></h1>
      </div>
      <div>
        <div>
          <div className="responsebeliti grid lg:grid-cols-2 gap-9 justify-center items-center mt-24 w-[90%] mx-auto mb-10 ">
            {offered.slice(0, show).map((item) => (
              <div
                onClick={() => hendelDiscount(item)}
                key={item.id}
                className="flex gap-6 items-center cursor-pointer"
              >
                {/* img */}
                <div className="   ">
                  <img className="PopularItem" src={item.image} alt="" />
                </div>
                {/* text */}
                <div>
                  {/* hedar */}
                  <div className="flex gap-10 items-center ">
                    <h1 className="font1 font-bold text-[20px] text-black">
                      {item.name}-------
                    </h1>
                    <p className="font1 font-bold   text-[18px] text-[#BB8506]">
                      <span className="line-through decoration-slate-800 decoration-4">
                        {" "}
                        ${item.price}
                      </span>{" "}
                      <span>${item.discount}</span>
                    </p>
                  </div>

                  {/* peragirap */}

                  <p className="text-black opacity-80 lg:w-[450px]  font-sans text-[16px]">
                    {item.recipe}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <button
            className="hover:border-b-2 hover:bg-inherit hover:border-b-black btn border-0 bg-inherit text-black lg:relative left-[50%]    border-b-4 border-b-black   text-center mx-auto w-[128px]
         mt-4 mb-10 h-[24px] "
            onClick={hendelShow}
          >
            {" "}
            View More
          </button>
        </div>
      </div>

      <div>
        <Cover
          img={img2}
          title={"DESSERTS"}
          p={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
        ></Cover>
      </div>
      {/* dessert */}
      <div className="responsebeliti grid lg:grid-cols-2 gap-9 justify-center w-[90%] mx-auto items-center mt-24 mb-10 ">
        {dessert.slice(0, show).map((item) => (
          <div
            onClick={() => hendelDiscount(item)}
            key={item.id}
            className="flex gap-6 items-center cursor-pointer"
          >
            {/* img */}
            <div>
              <img className="  PopularItem " src={item.image} alt="" />
            </div>
            {/* text */}
            <div>
              {/* hedar */}
              <div className="flex gap-10 items-center ">
                <h1 className="font1 font-bold text-[20px] text-black">
                  {item.name}-------
                </h1>
                <p className="font1 font-bold   text-[18px] text-[#BB8506]">
                  {item.price}
                </p>
              </div>

              {/* peragirap */}

              <p className="text-black opacity-80 lg:w-[450px]  font-sans text-[16px]">
                {item.recipe}
              </p>
            </div>
          </div>
        ))}

        <button
          className="hover:border-b-2 hover:bg-inherit hover:border-b-black btn border-0 bg-inherit text-black lg:relative left-[50%]    border-b-4 border-b-black   text-center mx-auto w-[128px]
         mt-4 h-[24px] "
          onClick={hendelShow}
        >
          {" "}
          View More
        </button>
      </div>
      <div>
        <Cover
          img={img2}
          title={"PIZZA"}
          p={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
        ></Cover>
      </div>

      {/* pizza */}

      <div className="responsebeliti grid lg:grid-cols-2 gap-9 justify-center items-center mt-24 w-[90%] mx-auto mb-8">
        {pizza.slice(0, show).map((item) => (
          <div
            onClick={() => hendelDiscount(item)}
            key={item.id}
            className="flex gap-6 items-center cursor-pointer "
          >
            {/* img */}
            <div className="   ">
              <img className="PopularItem" src={item.image} alt="" />
            </div>
            {/* text */}
            <div>
              {/* hedar */}
              <div className="flex gap-10 items-center ">
                <h1 className="font1 font-bold text-[20px] text-black">
                  {item.name}-------
                </h1>
                <p className="font1 font-bold   text-[18px] text-[#BB8506]">
                  {item.price}
                </p>
              </div>

              {/* peragirap */}

              <p className="text-black opacity-80 lg:w-[450px]  font-sans text-[16px]">
                {item.recipe}
              </p>
            </div>
          </div>
        ))}
        <button
          className="hover:border-b-2 hover:bg-inherit hover:border-b-black btn border-0 bg-inherit text-black lg:relative left-[50%]    border-b-4 border-b-black   text-center mx-auto w-[128px]
         mt-4 h-[24px] "
          onClick={hendelShow}
        >
          {" "}
          View More
        </button>
      </div>
      <div className="">
        <Cover
          img={img2}
          title={"SALADS"}
          p={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
        ></Cover>
      </div>

      {/* salad */}

      <div className="responsebeliti grid lg:grid-cols-2 sm:grid-cols-1 gap-9 justify-center items-center mt-24 w-[90%] mx-auto ">
        {salad.slice(0, show).map((item) => (
          <div
            onClick={() => hendelDiscount(item)}
            key={item.id}
            className="flex gap-6 items-center space-y-4 cursor-pointer"
          >
            {/* img */}
            <div className="   ">
              <img className="PopularItem" src={item.image} alt="" />
            </div>
            {/* text */}
            <div>
              {/* hedar */}
              <div className="flex gap-10 items-center mb-2">
                <h1 className="font1 font-bold text-[20px] text-black">
                  {item.name}-------
                </h1>
                <p className="font1 font-bold   text-[18px] text-[#BB8506]">
                  {item.price}
                </p>
              </div>

              {/* peragirap */}

              <p className="text-black opacity-80 lg:w-[450px]  font-sans text-[16px]">
                {item.recipe}
              </p>
            </div>
          </div>
        ))}
        <button
          className="hover:border-b-2 hover:bg-inherit hover:border-b-black btn border-0 bg-inherit text-black lg:relative left-[50%]    border-b-4 border-b-black   text-center mx-auto w-[128px]
         mt-4 h-[24px] "
          onClick={hendelShow}
        >
          {" "}
          View More
        </button>
      </div>
    </div>
  );
};

export default Menu;
