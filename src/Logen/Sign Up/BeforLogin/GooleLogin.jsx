import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AxiosPublis from "../../../castsomgug/axios/AxiosPublis/AxiosPublis";
import { Athcontes } from "../../../Provadar/AthoProvadar";
import { useContext } from "react";
import { Navigate } from "react-router-dom";


const GooleLogin = () => {
  const axios = AxiosPublis()
  const { Google } = useContext(Athcontes)
  const Gooolhendel = () => {
    Google()
      .then((res) => {
        console.log(res)
        Navigate('/')
        const userinfo = {
          name: res.user?.displayName,
          email: res.user?.email
        }

        axios.post('/users', userinfo)
          .then(res => {
            console.log(res, 'add')
      
           
          })

      })
  }

  return (
    <div >


      < button onClick={Gooolhendel} className="btn bg-orange-400 w-full "><FontAwesomeIcon icon={faGoogle} ></FontAwesomeIcon> Gollle</button>


    </div>
  );
};

export default GooleLogin;