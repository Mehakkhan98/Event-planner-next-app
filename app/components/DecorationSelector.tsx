import React from 'react'
interface DaySelectorProps {
 selectedDay: string;
 onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}
const DecorationSelector:React.FC<DaySelectorProps> = ({ selectedDay, onChange }) => {
   const days = ["Select a Decoration","Flowers", "Fresh Flowers", "Cards", "Baloons", "Flags"];
 
   return (
     <select className=" h-10 w-64 mt-2 mb-2 border-black #f9f9f9"  value={selectedDay} onChange={onChange}>
       {days.map((day, index) => (
         <option key={index} value={day}>{day}</option>
       ))}
     </select>
   );
 };
 
 export default DecorationSelector;
 


