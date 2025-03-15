// const PaidButton = ({item}) => {
//     let disable = true
//     item?.map(i => i.status === 'preparing' ? disable = true : disable = false)
//     // console.log(item)
//     return (
//       <button disabled={disable}>Mark as paid</button>
//     );
//   };
  
//   export default PaidButton;
// import { useState } from "react";

const PaidButton = ({ item , isConfirming , confirmingState, reset, cancel}) => {
    const disable = !item || !item.length || item.some(i => i.status === 'preparing');
    // const [isConfirming, setIsConfirming] = useState(false);
  
    return (
        <>
            <button onClick={confirmingState} disabled={disable}>Mark as paid</button>
            {/* <button onClick={() => setIsConfirming({id : item?.id})} disabled={disable}>Mark as paid</button> */}
            <div style={{ display: !isConfirming ? "none" : "block" }} >
                <p>
                Are you sure you want to finalize and reset this table?
                </p>
                <button onClick={reset}>confirm</button>
                <button onClick={cancel}>cancel</button>
            </div>
        </>
    );
  };
  
  export default PaidButton;