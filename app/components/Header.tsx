'use client'
import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/navigation';
import { useSelector,useDispatch } from 'react-redux';
import { selectIsAuthenticated, setAuthentication } from '../../lib/reducers/authReducer';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Header = () => {
  const router = useRouter();
   const isAuthenticated = useSelector(selectIsAuthenticated);
   const dispatch = useDispatch();
  const logout=()=>{
    dispatch(setAuthentication(false))
    router.push('/login')
    
  }
  const isLogin= localStorage.getItem('username');
  return (
    <header className='bg-red-500  text-white py-6 mb-3 px-7'>
     <div className='container mx-auto flex justify-between items-center'>
     <div className="flex items-center">
      <img src='logo.jpg' alt="Logo" className="h-12 w-12 rounded-full mr-2"/>
      <h1 className="font-semibold  text-3xl italic" >{isAuthenticated?<div>FestivaGlow</div>:<Link href="/">FestivaGlow</Link>}</h1>
      </div>
      <nav className='flex space-x-4'>
        {
          isAuthenticated?
          <> 
          
          <Link href="/home/mycart">My Cart<ShoppingCartIcon/></Link>
          <button className=' cursor-pointer' onClick={logout}>Logout</button>
          </>
          :
          <>
          <Link href="/login">Login</Link>
          <Link href="/aboutus">About us</Link>
          <Link href="/contactus">Contact us</Link>
          </>
         
        }
      
      </nav>
    </div>
       
    </header>

  )
}

export default Header
function dispatch(arg0: { payload: any; type: "auth/setAuthentication"; }) {
  throw new Error('Function not implemented.');
}

