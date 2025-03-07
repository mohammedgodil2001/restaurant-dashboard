const Table = ({number, click}) => {
    return (
      <li onClick={() => click(number)}>
        <p>table {number}</p>
        <p>Available</p>
      </li>
    );
  };
  
  export default Table;