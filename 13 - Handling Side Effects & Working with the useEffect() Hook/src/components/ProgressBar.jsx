import { useState, useEffect } from 'react';


const ProgressBar = ({timer}) => {
       const [remaningTime , setRemaningTime] = useState(timer);

   useEffect(() => {
    const interval = setInterval(() => {
      setRemaningTime((prevRemaningTime) => prevRemaningTime - 10);
    } , 10);
    return () => {
      clearInterval(interval);
    };
   },[]);

  return (
     <process value={remaningTime} max={timer} />
  )
}

export default ProgressBar