const Menu = ({ menuItems, incrementMenuItem, menu }) => {
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
              <button>-</button>
            </li>
          );
        })}
      </ul>
    );
  };
  
  export default Menu;