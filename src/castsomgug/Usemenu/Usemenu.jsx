
import { useQuery } from "@tanstack/react-query"
import { useEffect } from "react"
import { useState } from "react"
import AxiosPublis from "../axios/AxiosPublis/AxiosPublis"

 const  Usemenu =()=>{
    // const [menu,setmenu]=useState([])
    // useEffect(()=>{
    //     fetch('https://bistro-boss-restaurant-resources-sarvar.vercel.app/menu')
    //     .then(res=>res.json())
    //     .then(data=>{
    //         setmenu(data)
    //     })
    // },[])
    const ax=AxiosPublis()

    const {data:menu=[],refetch}=useQuery({
queryKey:['menu'],
queryFn:async()=>{
const res = await ax.get('/menu')
return res.data
}
    })


    return [menu,refetch]
 }
 export default Usemenu