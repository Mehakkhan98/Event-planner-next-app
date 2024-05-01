 import React from 'react'
 interface DaySelectorProps {
  selectedDay: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}
const DaySelector:React.FC<DaySelectorProps> = ({ selectedDay, onChange }) => {
    const days = ["Select a Day","Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
    return (
      <select className=" h-10 w-64 mt-2 mb-2 border-black #f9f9f9"  value={selectedDay} onChange={onChange}>
        {days.map((day, index) => (
          <option key={index} value={day}>{day}</option>
        ))}
      </select>
    );
  };
  
  export default DaySelector;
  
 

 