'use client'
import React from 'react'
import dummyData from './dummyData'
import './marquee/Marque.css'
import Modal from './Modal'
import { useRouter } from 'next/navigation'
import { useSelector,useDispatch } from 'react-redux';
import { selectIsAuthenticated, setAuthentication } from '../../lib/reducers/authReducer';
import {selectEventInfo,setEventInfo}from '../../lib/reducers/eventReducer'

interface Data{
  id:number,
  title:string,
  url:string
 }

const ProductCard = () => {
  const data:Data[]=dummyData
  const router = useRouter()
  const dispatch = useDispatch(); 

  const isAuthenticated = useSelector(selectIsAuthenticated);
 
  const viewEvent=(data:Data)=>()=>{
    dispatch(setEventInfo(data))
    router.push('/home/eventInfo')
  }
  return (
    <div className="grid grid-cols-3 gap-2 pl-10">
    
    {  data?data.map((d)=>
      <div className="card w-96 bg-stone-800 shadow-xl mb-2  ">
    <figure><img src={d.url} alt="Shoes" /></figure>
    <div className="card-body text-slate-400">
      <h2 className="card-title">Memorable Event</h2>
      <p>{d.title}</p>
    
    {isAuthenticated?
    <button  onClick= {viewEvent(d)} className="btn  bg-red-500 " >Add to Cart</button>
  :
  <div className="card-actions justify-end">
  <Modal/>
</div>} 
    </div>
  </div>)
    :null
}
    </div>

    
    
  )
}

export default ProductCard
