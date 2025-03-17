const Prepitems = ({item}) => {
    const preparingItems = Object.entries(item).flatMap(([tableId, items]) =>
        items
          .filter(item => item.status === "preparing") 
          .map(item => ({ ...item, tableId })) 
      );
    // console.log(preparingItems)
    return(
        <section className="orders-section">
            <h2 className="orders-by-table-heading">Orders by Table</h2>
            <section className="orders-container">
                <h3 className="current-orders-heading"><span>item</span> <span>table no.</span></h3>
                <ul className="orders-list">
                    {preparingItems.map(item => (
                        <li key={`${item.tableId}-${item.id}`}>
                            <div className="item_image_and_name">
                                <img src={item.image} alt={item.name} />
                                <p className="order-name">{item.name}</p>
                            </div>
                            <p className="table-id">{item.tableId}</p>
                        </li>
                    ))}
                </ul>
            </section>
        </section>
    )
  };
  
  export default Prepitems;