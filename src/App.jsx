import { useState } from 'react'
import './App.css'
import TableList from './components/TableList';
import TableDetails from './components/TableDetails';
import menuItems from './menuData';
import Menu from './components/menu';
import Summary from './components/OrderSummary';



function App() {

  const [id, setId] = useState(null)
  const [customerCounts, setCustomerCounts] = useState({}); 
  // const [ordersummary,setOrdersummary] = useState({});
  const [menu,setMenu] = useState({});
  const tablesing = [
    { id: 1 , status : 'available'},
    { id: 2 , status : 'available'},
    { id: 3 , status : 'available'},
    { id: 4 , status : 'available'},
    { id: 5 , status : 'available'},
  ];

  const [tables,setTables] = useState(tablesing);

  function incrementMenuItem(tableId, item) {
    setMenu((prev) => {
      const existingOrder = prev[tableId] || []; 
  
      const updatedOrder = existingOrder.find((orderItem) => orderItem.id === item.id)
        ? existingOrder.map((orderItem) =>
            orderItem.id === item.id ? { ...orderItem, quantity: orderItem.quantity + 1 } : orderItem
          ) 
        : [...existingOrder, { ...item, quantity: 1, status:"preparing" }]; 
  
      return {
        ...prev,
        [tableId]: updatedOrder, 
      };
    });
  }

  function decrementMenuItem(tableId, item) {
    setMenu((prev) => {
      const existingOrder = prev[tableId] || []; 

      const updatedOrder = existingOrder.map((orderItem) =>
        orderItem.id === item.id
          ? { ...orderItem, quantity: orderItem.quantity - 1 }
          : orderItem
      );
  
      
      const filteredOrder = updatedOrder.filter(orderItem => orderItem.quantity > 0);
  
      return {
        ...prev,
        [tableId]: filteredOrder, 
      };
    });
  }

  function incrementCustomer(tableId) {
    setCustomerCounts((prev) => {
      const newCount = (prev[tableId] || 0) + 1; 
  
      if (newCount > 0) {
        setTables((prevTables) =>
          prevTables.map(t => (t.id === tableId ? { ...t, status: "occupied" } : t))
        );
      }
    
      return {
        ...prev,
        [tableId]: newCount, 
      };
    });
  }

  function decreaseCustomer(tableId) {
    setCustomerCounts((prev) => {
      const newCount = (prev[tableId] || 0) > 0 ? prev[tableId] - 1 : 0;
    
      if (newCount === 0) {
        setTables((prevTables) =>
          prevTables.map(t => (t.id === tableId ? { ...t, status: "available" } : t))
        );
      }
    
      return {
        ...prev,
        [tableId]: newCount,
      };
    });

  }

  function changeStatus(iding) {
    setMenu((prev) => ({
      ...prev, 
      [id]: prev[id].map(i => 
        i.id === iding ? { ...i, status: "ready" } : i
      ) 
    }));
  }
 

  
  
  return (
    <>
      <TableList tables={tables} setId={setId}/>
      {id && (
        <>
        <TableDetails
          id={id}
          customerCount={customerCounts[id] || 0}
          increment={() => incrementCustomer(id)}
          decrement={()=> decreaseCustomer(id)}
        />
        <Menu menuItems={menuItems} incrementMenuItem={(item) => incrementMenuItem(id, item)} menu={menu[id] || []} decrementMenuItem={(item) => decrementMenuItem(id, item)} />
        <Summary item={menu[id]} changeStatus={(iding) => changeStatus(iding)}/>
        </>
      )}
    </>
  )
}

export default App
