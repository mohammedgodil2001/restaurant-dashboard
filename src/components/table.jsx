import food from '../assets/food_plate.svg'
import people from '../assets/people.svg'


const Table = ({number, click, status, customerCount}) => {
    console.log(status)
    return (
        <li className={`table-item ${status.replace(/\s+/g, "-")}`} onClick={() => click(number)}>
        <p className="table-number">{number > 9 ? number : "0"+number}</p>
        <p className="table-status">
            {status === 'available' ? <img src={food} alt="food" className='closed_food_plate'/> : ""}
            {status == "occupied" ? <span>{status}</span> : ''}
            {status == "waiting for bill" ? <span>Awaiting Pay...</span> : ''}
            
        </p>
        <div>{status === 'available' ? "" : 
        <div className='customer_parent'>
            <img src={people} alt="people" className='customers'/>
            <span>    
                {customerCount > 1 ? customerCount + " people" : customerCount + " person" }
            </span>
        </div>
        }</div>
      </li>
    );
  };
  

  export default Table;