import { faUtensils } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useForm } from "react-hook-form";
import AxiosPublis from "../../../castsomgug/axios/AxiosPublis/AxiosPublis";
import Axios from "../../../castsomgug/axios/axios";



const img_hosti_key = import.meta.env.VITE_IMG_HOSTIG;
const Img_host =`https://api.imgbb.com/1/upload?key=${img_hosti_key}`

const Additems = () => {
    const axpub = AxiosPublis()
    const ax = Axios()
    const { register, handleSubmit,  } = useForm();
    const onSubmit =async (data) => {
        console.log(data);
        const img = {image:data.imge[0]}
        const res = await axpub.post(Img_host,img,{
            headers:{
                'Content-Type' : 'multipart/form-data'
            }
        })

        if(res.data.success){
const menuItem ={
    name:data.name,
    recipe: data.Recipe,
    price:data.Price,
    category: data.Category,
    image:res.data.data.display_url
}

const  menuitme =  await ax.post('/menu',menuItem)
console.log(menuitme.data);
if(menuitme.data.insertedId){
    // 
}
        }

        // console.log(res.data);
    };
    return (
        <div className="bg-[#f3f3f3] w-[992px] mt-[20%] ml-[10%] ">
            <div className="">

            </div>

            <div >
                <form className="" onSubmit={handleSubmit(onSubmit)}>
                    {/* register your input into the hook by invoking the "register" function */}


                    <label className="form-control w-full mx-20">
                        <div className="label">
                            <span className="label-text">Recipe name*</span>

                        </div>
                        <input  {...register("name" ,{required:true})} type="text" placeholder="Recipe name" className="input input-bordered w-[701px]" />

                    </label>

                    <div className="flex gap-[59px] ">
                        <div> <label className="form-control ">
                            <div className="label ml-20">
                                <span className="label-text">Category*</span>

                            </div>
                            <select  defaultValue={'defolt'} {...register("Category" ,{required:true})} className="select select-bordered ml-20 w-[20rem]">
                                <option disabled value={'defolt'}>Category</option>
                                <option>salad</option>
                                <option>pizza</option>
                                <option>soup</option>
                                <option>dessert</option>
                                <option>drinks</option>

                            </select>

                        </label></div>
                        <div>
                            <label className="form-control w-52 ">
                                <div className="label">
                                    <span className="label-text">Price*</span>

                                </div>
                                <input  {...register("Price" ,{required:true})} type="number" placeholder="Price" className="input input-bordered w-[20rem]" />

                            </label>
                        </div>
                    </div>



                    <label className="form-control">
                        <div className="label">
                            <span className="label-text ml-20">Recipe Details*</span>

                        </div>
                        <textarea  {...register("Recipe" ,{required:true})} className="textarea ml-20 textarea-bordered w-[701px] h-24" placeholder="Recipe Details"></textarea>

                    </label>


                    <div className="  w-[20rem] mt-5 ml-20">
                        <input
                            {...register("imge" ,{required:true})}
                            type="file"
                            placeholder="You can't touch this"
                            className="file-input file-input-bordered w-full "
                        />

                    </div>

            

                  <button className="btn  ml-20 w-[180px] bg-gradient-to-r from-[#835D23] to-[#B58130] text-white mt-7 mb-11 text-[20px]" > Add Item <FontAwesomeIcon icon={faUtensils}></FontAwesomeIcon></button>
                </form>
            </div>
        </div>
    );
};

export default Additems;