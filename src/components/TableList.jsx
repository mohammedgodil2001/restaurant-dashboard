import Table from "./Table"

const TableList = ({tables, setId, setIsConfirming}) => {
    function abc (id) {
        setId(id)
        setIsConfirming(null)
    }
    
    return (
        <ul>
            {tables.map((table) => {
                return (
                    <Table
                        key={table.id}
                        number={table.id}
                        click={abc}
                        status={table.status}
                    />
                );
            })}
        </ul>
    )
    
  };
  
  export default TableList;