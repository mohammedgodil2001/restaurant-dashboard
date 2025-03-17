const Menu = ({ menuItems, incrementMenuItem, menu, decrementMenuItem }) => {
    return (
        <div >  
            <span>Menu</span>
            <ul className="menu-list">
                {menuItems.map((item) => {
                const orderedItem = menu.find((order) => order.id === item.id) || { quantity: 0 };
                
        
                return (
                    <li key={item.id} className="menu-item">
                        <div className="menu-info">
                            <div className="menu-image">
                                <img src={item.image} alt={item.name} />
                            </div>
                            <div className="menu-text">
                                <p className="menu-name">{item.name}</p>
                                <p className="menu-price">€ {item.price}</p>
                            </div>
                        </div>

                        <div className="menu-controls">
                            <button className="decrement-button" onClick={() => decrementMenuItem(item)}><span>-</span></button>
                            <span className="menu-quantity">{orderedItem.quantity}</span>
                            <button className="increment-button" onClick={() => incrementMenuItem(item)}>+</button>
                        </div>
                </li>
                );
                })}
            </ul>
         </div>
    );
  };
  
  export default Menu;