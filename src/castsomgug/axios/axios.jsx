import axios from "axios";



 const axiosnew =axios.create({
    baseURL:'https://bistro-boss-restaurant-resources-sarvar.vercel.app'
})
const Axios = () => {
  // const {logout}=useContext(Athcontes)
  // const nebeget= useNavigate()
  axiosnew.interceptors.request.use(function(config){
    const token = localStorage.getItem('access-token')
    config.headers.authorization= `benar ${token}`
    return config
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

axiosnew.interceptors.response.use(function(response){
return response
},async (error)=>{
  const status = error.response.status
  console.log('rrrrrrrr',status)

  return Promise.reject(error)
})

  return axiosnew
};

export default Axios;