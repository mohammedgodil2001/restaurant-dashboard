const PaidButton = ({ item , isConfirming , confirmingState, reset, cancel}) => {
    const disable = !item || !item.length || item.some(i => i.status === 'preparing');
    
  
    return (
        <>
            <button className="paid_button" onClick={confirmingState} disabled={disable}>Mark as paid</button>
            
            <div className="confirmation_pop_up" style={{ display: !isConfirming ? "none" : "flex" }} >
                <p className="confirmation_desc">
                Are you sure you want to finalize and reset this table?
                </p>
                <div className="button_parent">
                    <button onClick={cancel}>cancel</button>
                    <button className="confirm" onClick={reset}>confirm</button>
                </div>
            </div>
        </>
    );
  };
  
  export default PaidButton;