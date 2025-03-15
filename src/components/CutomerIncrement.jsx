// import { useState } from 'react'

const Customer = ({customerCount, increment, decrement}) => {
   
    return (
      <div className="customer_incremental">
        <button onClick={increment} className="increment_button">+</button>
        <p >{customerCount}</p>
        <button onClick={decrement} className="decremental_button"><span>-</span></button>
      </div>
    );
  };
  
  export default Customer;