import { useContext } from "react";
import { Athcontes } from "../../../../../Provadar/AthoProvadar";
import Axios from "../../../../../castsomgug/axios/axios";
import Useten from "../../../../../castsomgug/axios/tenstack/Useten";



const Foot = ({ item }) => {

    const { image, name, price, recipe, _id ,category} = item
    const { user } = useContext(Athcontes)

    const [, refetch] = Useten()
    const axiospat = Axios()
    const hendelclick = (foot) => {
        console.log(user)
        if (user && user.email) {
            console.log(user.email,)
            const criditem = {
                menuid: _id,
                category:category,
                email: user.email,
                name,
                price,
                image

            }
            axiospat.post('/crids', criditem)
                .then(res => {
                    console.log(res.data)
                    if (res.data.insertedId) {
                        alert('jjjjj')
                    }

                    refetch()
                })
        }

    }
    return (
        <div>

            <div className="card card-compact   bg-base-100 shadow-xl ">
                <figure className=" ">
                    <img src={image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-[25px]">{name}</h2>
                    <h2 className="card-title  text-[25px] text-[#BB8506]">${price}</h2>
                    <p className="text-[12px] mb-3 mt-2">{recipe}</p>
                    <div className="card-actions">
                        <button onClick={hendelclick} className="btn  border-b-[#BB8506] hover:bg-[#1F2937] hover:text-[#BB8506] bg-[#E8E8E8] text-[#BB8506]">add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Foot;