import axios from "axios";



 const axiosnew =axios.create({
    baseURL:import.meta.env.VITE_API_URL
})
const Axios = () => {
  // const {logout}=useContext(Athcontes)
  // const nebeget= useNavigate()
  axiosnew.interceptors.request.use(function(config){
    const token = localStorage.getItem('access-token')   
  config.headers.authorization= `Bearer ${token}`
    return config
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

axiosnew.interceptors.response.use(function(response){
return response
},async (error)=>{
  const status = error.response.status
    if (status === 401) {
     
      // এখানে চাইলে logout বা refresh token logic বসাও
    }

  return Promise.reject(error)
})

  return axiosnew
};

export default Axios;