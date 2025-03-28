import { useEffect, useState } from 'react';
import './app.css';
import TableList from './components/tableList';
import TableDetails from './components/tableDetails';
import menuItems from './menuData';
import Menu from './components/menu';
import Summary from './components/orderSummary';
import PaidButton from './components/paidButton';
import Prepitems from './components/preparingItems';

function App() {
  const [state, setState] = useState({
    id: null,
    customerCounts: {},
    menu: {},
    clicked: {},
    tables: [
      { id: 1, status: 'available' },
      { id: 2, status: 'available' },
      { id: 3, status: 'available' },
      { id: 4, status: 'available' },
      { id: 5, status: 'available' },
    ],
    isConfirming: null,
  });

  const { id, customerCounts, menu, clicked, tables, isConfirming } = state;

  function checkboxClicked(e) {
    setState((prev) => ({
      ...prev,
      clicked: {
        ...prev.clicked,
        [id]: e.target.checked,
      },
    }));
  }

  function incrementMenuItem(tableId, item) {
    setState((prev) => {
      const existingOrder = prev.menu[tableId] || [];
      const updatedOrder = existingOrder.find((orderItem) => orderItem.id === item.id)
        ? existingOrder.map((orderItem) =>
            orderItem.id === item.id
              ? { ...orderItem, quantity: orderItem.quantity + 1 }
              : orderItem
          )
        : [...existingOrder, { ...item, quantity: 1, status: 'preparing' }];

      return {
        ...prev,
        menu: {
          ...prev.menu,
          [tableId]: prev.customerCounts[tableId] > 0 ? updatedOrder : [],
        },
      };
    });
  }

  function decrementMenuItem(tableId, item) {
    setState((prev) => {
      const existingOrder = prev.menu[tableId] || [];

      const updatedOrder = existingOrder
        .map((orderItem) =>
          orderItem.id === item.id
            ? { ...orderItem, quantity: orderItem.quantity - 1 }
            : orderItem
        )
        .filter((orderItem) => orderItem.quantity > 0);

      return {
        ...prev,
        menu: {
          ...prev.menu,
          [tableId]: updatedOrder,
        },
      };
    });
  }

  function incrementCustomer(tableId) {
    setState((prev) => {
      const newCount = (prev.customerCounts[tableId] || 0) + 1;

      const newTables =
        newCount > 0
          ? prev.tables.map((t) =>
              t.id === tableId ? { ...t, status: 'occupied' } : t
            )
          : prev.tables;

      return {
        ...prev,
        customerCounts: {
          ...prev.customerCounts,
          [tableId]: newCount,
        },
        tables: newTables,
      };
    });
  }

  function decreaseCustomer(tableId) {
    setState((prev) => {
      const newCount = (prev.customerCounts[tableId] || 0) > 0 ? prev.customerCounts[tableId] - 1 : 0;

      const newTables =
        newCount === 0
          ? prev.tables.map((t) =>
              t.id === tableId ? { ...t, status: 'available' } : t
            )
          : prev.tables;

      return {
        ...prev,
        customerCounts: {
          ...prev.customerCounts,
          [tableId]: newCount,
        },
        tables: newTables,
      };
    });
  }

  function changeStatus(itemId) {
    setState((prev) => ({
      ...prev,
      menu: {
        ...prev.menu,
        [id]: prev.menu[id].map((i) =>
          i.id === itemId ? { ...i, status: 'ready' } : i
        ),
      },
    }));
  }

  function confirmingState() {
    setState((prev) => ({
      ...prev,
      isConfirming: id,
    }));
  }

  function reset() {
    setState((prev) => ({
      ...prev,
      customerCounts: {
        ...prev.customerCounts,
        [id]: 0,
      },
      menu: {
        ...prev.menu,
        [id]: [],
      },
      tables: prev.tables.map((t) =>
        t.id === id ? { ...t, status: 'available' } : t
      ),
      isConfirming: null,
    }));
  }

  function cancel() {
    setState((prev) => ({
      ...prev,
      isConfirming: null,
    }));
  }


  useEffect(() => {
    if (isConfirming) {
      document.body.classList.add('is-confirming');
    } else {
      document.body.classList.remove('is-confirming');
    }
  }, [isConfirming]);

  return (
    <main className="container">
      <section className="tables-section">
        <TableList
          tables={tables}
          setId={(newId) => setState((prev) => ({ ...prev, id: newId }))}
          setIsConfirming={(val) => setState((prev) => ({ ...prev, isConfirming: val }))}
          customerCount={customerCounts}
        />
      </section>

      <section className="details-section">
        
          <>
            <TableDetails
              id={id}
              customerCount={customerCounts[id] || 0}
              increment={() => incrementCustomer(id)}
              decrement={() => decreaseCustomer(id)}
              checkboxClicked={checkboxClicked}
              clicked={clicked[id] || false}
            />

            <section className="order-container">
              <div className="menu_and_button">
                <Menu
                  menuItems={menuItems}
                  incrementMenuItem={(item) => incrementMenuItem(id, item)}
                  menu={menu[id] || []}
                  decrementMenuItem={(item) => decrementMenuItem(id, item)}
                />
                <PaidButton
                  item={menu[id]}
                  isConfirming={isConfirming}
                  confirmingState={confirmingState}
                  reset={reset}
                  cancel={cancel}
                />
              </div>

              <section className="summary-prep-container">
                <Summary
                  item={menu[id]}
                  changeStatus={changeStatus}
                  clicked={clicked[id] || false}
                />
                <Prepitems item={menu} />
              </section>
            </section>
          </>
        
      </section>
    </main>
  );
}

export default App;
