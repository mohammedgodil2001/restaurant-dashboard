import Customer from "./CutomerIncrement";

const TableDetails = ({id,customerCount, increment, decrement}) => {
    return (
      <article>
        <p>{id}</p>
        <Customer customerCount={customerCount} increment={increment} decrement={decrement} />
      </article>
    );
  };
  
  export default TableDetails;