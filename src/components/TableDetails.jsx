import Customer from "./CutomerIncrement";

const TableDetails = ({id}) => {
    return (
      <article>
        <p>{id}</p>
        <Customer/>
      </article>
    );
  };
  
  export default TableDetails;