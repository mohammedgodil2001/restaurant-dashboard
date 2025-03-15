const Summary = ({item, changeStatus, clicked}) => {
    // console.log('summary',item)

    let total = 0
    let totaling;
    item?.forEach((i) => {
        total += i.price * i.quantity;
    });
    if (clicked) {
        totaling = total
        total -= total * 0.1;
    }
    return(
        <>
            <ul>
                {item?.map((i) =>(
                    <li key={i.id}>
                        <p>{i.name}</p>
                        <p>{i.quantity}</p>
                        <p>{i.price}</p>
                        <p>{i.status}</p>
                        <button onClick={() => changeStatus(i.id)}>mark as ready</button>
                    </li>
                ))}
            </ul>
            <div>
            {item?.length > 0 && (
            <>
                {clicked && <span>Total before discount: {totaling}</span>}
                <p>{clicked ? 'Bill after discount' : 'Total'}: {total}</p>
            </>
            )}
            </div>
        </>
    )
  };
  
  export default Summary;