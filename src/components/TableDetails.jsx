import Customer from "./CutomerIncrement";
import table from '../assets/table.svg'

const TableDetails = ({id,customerCount, increment, decrement}) => {
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
      </article>
    );
  };
  
  export default TableDetails;