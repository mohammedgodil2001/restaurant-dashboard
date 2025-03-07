import { useState } from 'react'

const Customer = () => {
    const [count,setCount] = useState(0)

    function increment(){
        setCount(count+1)
    }
    return (
      <div>
        <button onClick={increment}>+</button>
        <p >{count}</p>
        <button>-</button>
      </div>
    );
  };
  
  export default Customer;