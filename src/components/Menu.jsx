const Menu = ({ menuItems, incrementMenuItem, menu, decrementMenuItem }) => {
    return (
      <ul>
        {menuItems.map((item) => {
          const orderedItem = menu.find((order) => order.id === item.id) || { quantity: 0 };
        
  
          return (
            <li key={item.id}>
              <p>{item.id}</p>
              <p>{item.name}</p>
              <button onClick={() => incrementMenuItem(item)}>+</button>
              <p>{orderedItem.quantity}</p>
              <button  onClick={() => decrementMenuItem(item)}>-</button>
              
            </li>
          );
        })}
      </ul>
    );
  };
  
  export default Menu;