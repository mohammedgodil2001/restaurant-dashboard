import Table from "./Table";

const TableList = ({tables, setId}) => {
    function abc (id) {
        setId(id)
    }
    return (
        <ul>
            {tables.map((table) => {
                return (
                    <Table
                        key={table.id}
                        number={table.id}
                        click={abc}
                    />
                );
            })}
        </ul>
    )
    
  };
  
  export default TableList;