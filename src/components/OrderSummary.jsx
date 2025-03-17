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
        <section className="order-summary">
            <ul className="summary-list">
                {item?.map((i) =>(
                    <li className="summary-list_item" key={i.id}>
                        <div className="dish-info">
                            <p className="dish_name">{i.name}</p>
                            <p className="dish_status">{i.status === "preparing" ? i.status + "..." : i.status}</p>
                            <p className="dish_quantity">{i.quantity}</p>
                        </div>
                        <div className="dish-price">
                            <p>€ {i.price}</p>
                            <button  onClick={() => changeStatus(i.id)}>{i.status === "preparing" ? "Ready" : "Served"}</button>
                        </div>
                    </li>
                ))}
            </ul>
            <div>
            {item?.length > 0 && (
            <div className="pricing-summary">
                {clicked && <p className="total-before-discount">Total before discount <span>{"€ "  + totaling}</span></p>}
                <p className="final-total">{clicked ? 'Bill after discount' : 'Total'} <span>{"€ "  +total}</span></p>
            </div>
            )}
            </div>
        </section>
    )
  };
  
  export default Summary;