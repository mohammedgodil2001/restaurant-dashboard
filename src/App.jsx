import { useState } from 'react'
import './App.css'
import TableList from './components/TableList';
import TableDetails from './components/TableDetails';
import menuItems from './menuData';



function App() {

  const [id, setId] = useState(null)
  const [customerCounts, setCustomerCounts] = useState({}); 

  function incrementCustomer(tableId) {
    setCustomerCounts((prev) => ({
      ...prev,
      [tableId]: (prev[tableId] || 0) + 1, 
    }));
  }

  function decreaseCustomer(tableId) {
    setCustomerCounts((prev) => ({
      ...prev,
      [tableId]: (prev[tableId] || 0)>0? (prev[tableId]-1): 0, 
    }));
  }

 

  const tables = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
  ];
  
  return (
    <>
      <TableList tables={tables} setId={setId}/>
      {id && (
        <TableDetails
          id={id}
          customerCount={customerCounts[id] || 0}
          increment={() => incrementCustomer(id)}
          decrement={()=> decreaseCustomer(id)}
        />

      )}
    </>
  )
}

export default App
