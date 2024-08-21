import { useContext, useEffect, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { Athcontes } from '../Provadar/AthoProvadar';
import GooleLogin from './Sign Up/BeforLogin/GooleLogin';

const Login = () => {
  const { singin, user } = useContext(Athcontes)


  const [dijebol, setdejebol] = useState(true)
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, [])
  const hendellogin = (e) => {
    e.preventDefault()
    const from = e.target
    const email = from.email.value
    const password = from.password.value
    const total = { email, password }
    singin(email, password)
    
      .then((res) => {
        alert(' ok')
      
      })
      .catch(() => {
        alert('it is not ok')
      })
      Navigate('/')
  }

  const hendelcepcarvelu = (e) => {
    const cepcar = e.target.value
    if (validateCaptcha(cepcar)) {
      setdejebol(false)
    }
    else {

      alert('hahaha')
      setdejebol(true)
    }
   

  }


  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>

          </div>
          <div className="card w-[500px] shrink-0  shadow-2xl bg-base-100">
            <form onSubmit={hendellogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <LoadCanvasTemplate />
                </label>
                <input onBlur={hendelcepcarvelu} type="text" placeholder="Intar your Capchar" className="input input-bordered" required />

              </div>
              <div className="form-control mt-6">
                <input disabled={dijebol} type="submit" className='btn btn-primary' value={'Login'} />
              </div>
              <div>

              </div>
            </form>
   
            <div className="divider">OR</div>
            <div className='mb-7 ml-5 mr-4'>
              <button className='w-full'>   <GooleLogin></GooleLogin></button>
            </div>
          </div>
          <Link to={'/Singup'}><button className='btn'> SingUp</button></Link>
        </div>

      </div>
     
    </div>
    
  );
};

export default Login;