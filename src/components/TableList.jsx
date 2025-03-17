import Table from "./table"

const TableList = ({tables, setId, setIsConfirming, customerCount}) => {
    function abc (id) {
        setId(id)
        setIsConfirming(null)
        
    }
    
    return (
        <ul className="table-list">
            {tables.map((table) => {
                return (
                    <Table
                        key={table.id}
                        number={table.id}
                        click={abc}
                        status={table.status}
                        customerCount={customerCount ? customerCount[table.id] : 0}
                    />
                );
            })}
        </ul>
    )
    
  };
  
  export default TableList;