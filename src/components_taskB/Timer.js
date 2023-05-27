import React from 'react'
import { useState, useEffect } from 'react'
export const Timer = () => {
    const [counter, setCounter] = useState(10);
    var msg = `Count is: ${counter}`
    useEffect(() => {
    const interval = setInterval(() => {
        setCounter(count => counter - 1);
    }, 1000);
  
    return () => {
        
        if(counter <= 0){
            clearInterval(interval)
            setCounter(count => count=0)
        }
      };
    });
  
    return <h1>{msg}</h1>;
}
