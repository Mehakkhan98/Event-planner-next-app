'use client'
import { useRouter } from 'next/navigation';
import React,{useState} from 'react'
import { useSelector ,useDispatch} from 'react-redux';
import { setAuthentication } from '../../lib/reducers/authReducer';
import SignUp from '../components/SignUp';
const LoginUser: React.FC = () => {
  const [isTriggered, setTriggered] = useState(false);
  const [account, setNewAccount]=useState(true);
  const [error, setError]=useState("");
  const [email, setEmail]=useState("");
  const [password, setPassword]=useState("");
  const router = useRouter();
  const dispatch = useDispatch();
  const login=()=>{

    if(email==="mehak@gmail.com" && password==="12345"){
      setError("")
      localStorage.setItem('username', 'Mehak Fatima');
      setTriggered(true)
      dispatch(setAuthentication(true))
      router.push('/home')
    }
    else{
     setError("Invalid email or password!")
    }
      
  }
  const signIn=()=>{
    setNewAccount(true)
  }
  return (
   <div className='flex flex-row'>
   <img src='img9.png'  className=" mr-2 ml-4 h-400 mb-5"/>
   <div className=" max-w-fit  mx-auto p-5  rounded-3xl   mt-24">
  {account===true? <><div className=' flex flex-row mb-3'>
    <img src='logo.jpg' alt="Logo" className="h-12 w-12 rounded-full mr-2"/>
   <div className='text-2xl  text-red-500 font-bold flex justify-center mt-2 italic'>Login Portal</div>
    </div>
 
    <label className={`input input-bordered border ${error ? 'border-red-500' : 'border-gray-300'} flex items-center gap-2 mb-2`}>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
  <input type="text" className="grow" placeholder="Email" onChange={(e)=>{setEmail(e.target.value), setError("")}}/>
</label>
<label className={`input input-bordered border ${error ? 'border-red-500' : 'border-gray-300'} flex items-center gap-2 mb-1`}>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
  <input type="password" className="grow" placeholder="password" onChange={(e)=>{setPassword(e.target.value), setError("")}} />
</label>
<div className="text-red-500 text-sm ml-1">{error?error:null}</div>
    <div className="flex items-center justify-between mt-2">
      <button onClick={login}  className="bg-red-500 w-full hover:bg-stone-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
    </div>
    
    <div className='font-bold italic flex justify-center mt-1 cursor-pointer text-slate-400' onClick={()=>setNewAccount(false)}>Don't have an account yet?</div>
    {isTriggered?
  (<div role="alert" className="alert alert-success">
  <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
  <span>You are login successfully!</span>
</div>)
  :null}</>:<SignUp isSignIn={signIn}/>}
   
</div>

</div>   
  )
}


export default LoginUser
