const Checkbox = ({checkboxClicked, clicked}) => {
   return (
    <input type="checkbox" checked={clicked} onChange={(e) => {
    
      checkboxClicked(e);
    }} />
   )
};
  
  export default Checkbox;