import React,{useState} from 'react'
import { useRouter } from 'next/navigation';

const Modal =() => {
    const [show, setShow] = useState(false);
    const router = useRouter();
    const showModal=()=>{
      setShow(true)
    }
  return (
    <>
     <button onClick={showModal} className="btn  bg-red-500 ">Add to Cart</button>
    {show ?
   <div className="modal-box bg-slate-100 absolute top-60 left-5">
     <h3 className="font-bold text-lg text-black">Hello!</h3>
     <p className="py-4">Please login to continue.....</p>
     <div className="modal-action">
       <form method="dialog">
         <button className="btn bg-red-500" onClick={()=>{router.push('/login')}}>Login</button>
       </form>
     </div>
   </div>
    :null
        
      }
      </>
  )
}

export default Modal
