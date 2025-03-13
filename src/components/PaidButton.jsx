// const PaidButton = ({item}) => {
//     let disable = true
//     item?.map(i => i.status === 'preparing' ? disable = true : disable = false)
//     // console.log(item)
//     return (
//       <button disabled={disable}>Mark as paid</button>
//     );
//   };
  
//   export default PaidButton;

const PaidButton = ({ item }) => {
    const disable = !item || !item.length || item.some(i => i.status === 'preparing');
  
    return (
      <button disabled={disable}>Mark as paid</button>
    );
  };
  
  export default PaidButton;