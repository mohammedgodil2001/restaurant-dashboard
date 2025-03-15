import food from '../assets/food_plate.svg'
const Table = ({number, click, status, customerCount}) => {
    return (
      <li className={`table-item ${status}`} onClick={() => click(number)}>
        <p className="table-number">{number > 9 ? number : "0"+number}</p>
        <p className="table-status">
            {status === 'available' ? <img src={food} alt="food" className='closed_food_plate'/> : status}
        </p>
        <p>{status === 'available' ? "" : customerCount}</p>
      </li>
    );
  };
  

  export default Table;