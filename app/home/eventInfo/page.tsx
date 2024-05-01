'use client'
import React,{ChangeEvent, useState} from 'react'
import DaySelector from '@/app/components/DaySelector';
import DateSelector from '@/app/components/DateSelector';
import DecorationSelector from '@/app/components/DecorationSelector';
import { useSelector,useDispatch } from 'react-redux';
import { selectIsAuthenticated, setAuthentication } from '../../../lib/reducers/authReducer';
import {selectEventInfo,setEventInfo}from '../../../lib/reducers/eventReducer'
const EventInfo = () => {
    const eventInfo = useSelector(selectEventInfo);
    const [selectedDay, setSelectedDay] = useState("Select a Day");
    const [selectedDecoration, setSelectedDecoration] = useState("Select a Decoration");
   const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);

    const handleDateChange = (date: Date | undefined) => {
      setSelectedDate(date);
    };
    const handleDayChange = (event:ChangeEvent<HTMLSelectElement>) => {
      setSelectedDay(event.target.value);
    };
    const handleDecorationChange = (event:ChangeEvent<HTMLSelectElement>) => {
      setSelectedDecoration(event.target.value);
    };
  return (
    <div className='flex  flex-row  ml-12'>
    <img className="w-96 h-96" src={eventInfo.url} alt="event" />
    <div className=' ml-10'>
      
      <h1 className='italic font-bold mb-2'>Please add your event detail here</h1>
      <DaySelector  selectedDay={selectedDay} onChange={handleDayChange} />
      
      <div>
      
      <DateSelector selectedDate={selectedDate} onChange={handleDateChange} />
      <DecorationSelector selectedDay={selectedDecoration} onChange={handleDecorationChange}/>
    
      </div>
      <textarea className="textarea textarea-bordered  w-64 mb-6  mt-2" placeholder="Any additional info...."></textarea>
      <button  className="bg-red-500 w-64 hover:bg-stone-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
    </div>
       <h1 className='italic w-72 '></h1>
   
    </div>
   
    
  )
}

export default EventInfo
