// import { useState } from 'react'

const Customer = ({customerCount, increment, decrement}) => {
   
    return (
      <div>
        <button onClick={increment}>+</button>
        <p >{customerCount}</p>
        <button onClick={decrement}>-</button>
      </div>
    );
  };
  
  export default Customer;