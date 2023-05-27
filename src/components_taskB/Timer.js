import React from 'react'
import { useState, useEffect } from 'react'
export const Timer = () => {
    const [counter, setCounter] = useState(10);
    
    useEffect(() => {
    const interval = setInterval(() => {
        setCounter(count => counter - 1);
    }, 1000);
  
    return () => {
        
        if(counter <= 0){
            clearInterval(interval)     
        }
      };
    });
  
    return <h1>{count === 0?"Count ${count}":"Times Up"}</h1>;
}
