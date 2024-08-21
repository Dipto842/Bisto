import { useQuery } from "@tanstack/react-query";


import Axios from "../../../../castsomgug/axios/axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";






const Allusers = () => {
    const Axio =Axios()
    const {data: user= [],refetch}=useQuery({
        queryKey: ['user'],
        queryFn: async () =>{
           
            const res= await Axio.get('/users',{
                headers: {
                    authorization: `Benar ${localStorage.getItem('access-token')}`
                }
            })
            return res.data

  
    }
    
    })
    const hendeluser = (user)=>{
      
        Axio.patch(`/users/addmin/${user._id}`)
        .then(res=>{
            console.log(res.data)
            if(res.data.modifiedCount>0){
                refetch()
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "new admin add",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })
    }
    const hendelDilet=(user)=>{


        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {

            if (result.isConfirmed) {
                Axio.delete(`/users/${user._id}`)
            .then(data=>{
                refetch()
                if(data.data.isConfirmed > 0){
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                      });
                }
            })
            }
          });

    }

    
    return (
        <div>
            <div className="flex gap-72 mx-28 my-7">
                <h1>All User</h1>
                <h1>Total User: {user.length}</h1>
            </div>
            <div>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>NAME</th>
       
        <th>EMAIL</th>
      
        <th>ROLE</th>
        <th>ACTION</th>
       
      </tr>
    </thead>
    <tbody>

{
    user.map((user,nam)=> <tr key={user._id}>
        <th>{nam+1}</th>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td> { user.role==='admin'?'Admin': <button 
        onClick={() => hendeluser(user)} className="btn  bg-[#D1A054] rounded-{14px} ">
            <FontAwesomeIcon className="text-white" icon={faUsers} />
        </button>}</td>
        <td> 
             <button onClick={() => hendelDilet(user)} className="btn  bg-red-500 rounded-{14px} ">
                <FontAwesomeIcon className="text-white" icon={faTrashCan} />
             </button></td>

      </tr>)
}

     
     
     
    </tbody>
  </table>
</div>
            </div>
        </div>
    );
};

export default Allusers;