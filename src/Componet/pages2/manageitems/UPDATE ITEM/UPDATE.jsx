import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import Axios from "../../../../castsomgug/axios/axios";



const Update = () => {
    const {name,price,recipe,category,_id} = useLoaderData()

    const ax = Axios()

    const { register, handleSubmit } = useForm()
    const onSubmit = async(data) => {
const menuitme = {
    name: data.name,
    category:data.category,
    price:data.price,
    recipe :data.recipe

}
console.log(_id)
const res = await ax.patch(`/menu/${_id}`,menuitme)

    console.log(res.data)
    }
  

    return (
        <div>
            <h1 className="text-center mt-7 text-[40px]">UPDATE ITEM</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className="w-[992px]  bg-[#f3f3f3] mt-24 rounded-lg">
            <div className="mx-12">
                <div className="" > 
                    <label className="form-control w-full ml-14 mb-8 mt-9">
                        <div className="label mt-9">
                            <span className="label-text">Recipe name*</span>

                        </div>
                        <input  {...register("name")} type="text" placeholder={name} className="input input-bordered w-[775px]   " />

                    </label>
                </div>

                <div className="flex gap-16 ml-14">
                    <div>
                        <label {...register("category")} defaultValue={category} className="form-control w-[387.5px] max-w-xs">
                            <div className="label">
                                <span className="label-text">Category*</span>

                            </div>
                            <select  className="select select-bordered ">
                                <option disabled value={'defolt'}>Category</option>
                                <option>salad</option>
                                <option>pizza</option>
                                <option>soup</option>
                                <option>dessert</option>
                                <option>drinks</option>
                            </select>

                        </label>
                    </div>
                    <div>
                        <label className="form-control w-full ">
                            <div className="label">
                                <span className="label-text">Price*</span>

                            </div>
                            <input {...register("price")} type="number" placeholder={price} className="input input-bordered w-[387.5px]" />

                        </label>
                    </div>
                </div>

                <div className=" mt-14 mr-12 ml-14">
                <div className="label">
                                <span className="label-text">Recipe Details*</span>

                            </div>
                    <textarea
{...register("recipe")}
                        placeholder={recipe}
                        className="textarea textarea-bordered textarea-lg  w-[775px] mb-7"></textarea>
                </div>
            </div>
            <div>
                <button className="btn">Update Recipe Details</button>
            </div>
        </div>
        </form>
        </div>
    );
};

export default Update;