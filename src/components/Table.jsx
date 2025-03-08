const Table = ({number, click, status}) => {
    return (
      <li onClick={() => click(number)}>
        <p>table {number}</p>
        <p>{status}</p>
      </li>
    );
  };
  
  export default Table;