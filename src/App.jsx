import { useEffect, useState } from 'react'
import './app.css'
import TableList from './components/tableList';
import TableDetails from './components/tableDetails';
import menuItems from './menuData';
import Menu from './components/menu';
import Summary from './components/orderSummary';
import PaidButton from './components/paidButton';
import Prepitems from './components/preparingItems';
import Checkbox from './components/checkbox'



function App() {

  const [id, setId] = useState(null)
  const [customerCounts, setCustomerCounts] = useState({}); 
  // const [ordersummary,setOrdersummary] = useState({});
  const [menu,setMenu] = useState({});
  const [clicked,setClicked] = useState({});
  const tablesing = [
    { id: 1 , status : 'available'},
    { id: 2 , status : 'available'},
    { id: 3 , status : 'available'},
    { id: 4 , status : 'available'},
    { id: 5 , status : 'available'},
  ];
  const [tables,setTables] = useState(tablesing);
  const [isConfirming, setIsConfirming] = useState(null);
  

  function checkboxClicked (e){
    setClicked((prev) => {
      return{
        ...prev,
        [id]: e.target.checked
      }
    })
  }

  

  function incrementMenuItem(tableId, item) {
    setMenu((prev) => {
      const existingOrder = prev[tableId] || []; 

      // if (customerCounts[tableId] === 0) {
      //   console.log(customerCounts[tableId])
      //   return prev
      // };
  
      const updatedOrder = existingOrder.find((orderItem) => orderItem.id === item.id)
        ? existingOrder.map((orderItem) =>
            orderItem.id === item.id ? { ...orderItem, quantity: orderItem.quantity + 1 } : orderItem
          ) 
        : [...existingOrder, { ...item, quantity: 1, status:"preparing" }]; 
  
      return {
        ...prev,
        [tableId]: customerCounts[tableId] > 0 ? updatedOrder : [], 
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
 
  function confirmingState(){
    setIsConfirming(id)
  }
  
  function reset(){
    setCustomerCounts((counts) => ({
      ...counts,
      [id] : 0
    }))
    setMenu((menuing) => ({
      ...menuing,
      [id] : []
    }))
    setTables((prev) => 
      prev.map(table => 
        table.id === id ? { ...table, status: "available" } : table
      )
    );
    setIsConfirming(null)
  }
  
  function cancel (){
    setIsConfirming(null)
  }
  
  useEffect(() => {
    const currenItem = menu[id] || [];
    const currentCustomer = customerCounts[id]
  
    if (currenItem.length > 0 && currentCustomer > 0) {
      const hasPreparingItems = currenItem.some(item => item.status === 'preparing');
  
      setTables((tables) =>
        tables.map((table) =>
          table.id === id
            ? { ...table, status: hasPreparingItems  ? "occupied" : "waiting for bill" }
            : table
        )
      );
    }
  }, [menu, id]); 

  return (
    <main className="container">
      <section className="tables-section">
        <TableList tables={tables} setId={setId} setIsConfirming={setIsConfirming} customerCount={customerCounts} />
      </section>

    
      <section className="details-section">
        {id && (
          <>
          <TableDetails
            id={id}
            customerCount={customerCounts[id] || 0}
            increment={() => incrementCustomer(id)}
            decrement={()=> decreaseCustomer(id)}
            checkboxClicked={(e) => checkboxClicked(e)}
            clicked={clicked[id] || false}
          />
          {/* <Checkbox checkboxClicked={(e) => checkboxClicked(e)} clicked={clicked[id] || false}/> */}
          <section className="order-container">
            <Menu menuItems={menuItems} incrementMenuItem={(item) => incrementMenuItem(id, item)} menu={menu[id] || []} decrementMenuItem={(item) => decrementMenuItem(id, item)} />
            <section className="summary-prep-container">
              <Summary item={menu[id]} changeStatus={(iding) => changeStatus(iding)} clicked={clicked[id] || false}/>
              <Prepitems item={menu}/>
            </section>
          </section>
          <PaidButton item={menu[id]} isConfirming={isConfirming} confirmingState={confirmingState} reset={reset} cancel={cancel}/>
          </>
        )}
      </section>
    </main>
 
  )
}

export default App
