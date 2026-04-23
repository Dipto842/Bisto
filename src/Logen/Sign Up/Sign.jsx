import { useContext } from "react";
import { Athcontes } from "../../Provadar/AthoProvadar";

import { useForm } from "react-hook-form"
import Swal from "sweetalert2";
import AxiosPublis from "../../castsomgug/axios/AxiosPublis/AxiosPublis";
import { useNavigate } from "react-router-dom";



const Sign = () => {
  const axiosPublis = AxiosPublis()
  const { singup, updateProfil } = useContext(Athcontes)
  const neveget = useNavigate()
  const {
    register,
    handleSubmit,
    reset,
    
  } = useForm()
  const onSubmit = (data) => {
    singup(data.email, data.password, data.name)
      .then((re) => {
       

        updateProfil(data.name)
          .then(() => {
            const userInpho = {
              name: data.name,
              email: data.email
            }
            axiosPublis.post('/users', userInpho)
              .then(res => {
               
                if (res.data.insertedId) {
                  reset()
                  Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Sing Success",
                    showConfirmButton: false,
                    timer: 1500
                  });
                }

              })


          })
          .catch((e) => {
            
          })
          

           Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Sing Up success",
        showConfirmButton: false,
        timer: 1500
      });
        neveget('/login')

      })
      .catch(errors => {
        alert(errors.message.slice(22, -2))
      } 
      )

    

  }

       

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">sing up now!</h1>

          </div>
          <div className="card w-[500px] shrink-0  shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">




              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name='name' {...register("name")} placeholder="Inter your name" className="input input-bordered" required />
              </div>




              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" {...register("email")} name='email' placeholder="email" className="input input-bordered" required />
              </div>






              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input {...register("password")} type="password" name='password' placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>

              <input type="submit" className='btn btn-primary' value={'SingUp'} />
            </form>
          </div>
        </div>
      </div>
    
    </div>
  );
};

export default Sign;