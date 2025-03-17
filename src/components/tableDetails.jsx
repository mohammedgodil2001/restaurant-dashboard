import Customer from "./customerIncrement";
import table from '../assets/table.svg'
import Checkbox from "./checkbox";

const TableDetails = ({id,customerCount, increment, decrement, checkboxClicked, clicked}) => {
    return (
      <article className="customer_and_table_details">
        <div className="table_container">
            <img src={table} alt="table" />
            <div className="tablenumber">
                <p>Table no</p>
                <span>    
                    {id}
                </span>
            </div>
        </div>
        <Customer customerCount={customerCount} increment={increment} decrement={decrement} />
        <Checkbox clicked={clicked} checkboxClicked={checkboxClicked} />
      </article>
    );
  };
  
  export default TableDetails;