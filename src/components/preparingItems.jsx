const Prepitems = ({item}) => {
    const preparingItems = Object.entries(item).flatMap(([tableId, items]) =>
        items
          .filter(item => item.status === "preparing") 
          .map(item => ({ ...item, tableId })) 
      );
    // console.log(preparingItems)
    return(
        <ul>
            {preparingItems.map(item => (
                <li key={`${item.tableId}-${item.id}`}>
                    {item.name}
                    {item.tableId}
                </li>
            ))}
        </ul>
    )
  };
  
  export default Prepitems;