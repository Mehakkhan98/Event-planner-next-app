import Link from 'next/link'
import React from 'react'
interface SignUpProps {
    isSignIn: () => void;
}

const SignUp:React.FC<SignUpProps> = ({isSignIn}) => {
    const handleClick=()=>{
        isSignIn();
    }
  return (
    <div>
   <div className='max-w-md  '>
    <div className=' flex flex-row mb-3 italic py-1'>
    <img src='logo.jpg' alt="Logo" className="h-12 w-12 rounded-full mr-2"/>
   <div className='text-2xl  text-red-500 font-bold flex justify-center mt-3'>Let's Make Memories</div>
    </div>
  <label className="input input-bordered flex items-center gap-2 mb-2">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
  <input type="text" className="grow" placeholder="Username" />
</label>
  <label className="input input-bordered flex items-center gap-2 mb-2">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
  <input type="text" className="grow" placeholder="Email" />
</label>
<label className="input input-bordered flex items-center gap-2 mb-2">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
  <input type="text" className="grow" placeholder="Contact" />
</label>

<div className="flex items-center justify-between ">
    <button  className="bg-red-500 w-full hover:bg-stone-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Sign Up</button>
</div>
<div className='font-bold italic flex justify-center mt-1 cursor-pointer text-slate-400' onClick={handleClick} >Sign In?</div>
      
    </div>
    </div>
  )
}

export default SignUp
