const Summary = ({item, changeStatus}) => {
    console.log('summary',item)

    let total = 0
    item?.map((i) => (
        total += i.price * i.quantity
    ))
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
            <p>
               total : {total} 
            </p>
        </>
    )
  };
  
  export default Summary;