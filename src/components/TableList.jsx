import Table from "./Table";

const TableList = ({tables}) => {
    {tables.map((table) => (
        <Table
          number={table.id}
        />
      ))}
    
  };
  
  export default TableList;