// import { useState } from "react";

const Checkbox = ({checkboxClicked, clicked}) => {
    // const [checking, setChecking] = useState(false);
   return (
    <input type="checkbox" checked={clicked} onChange={(e) => {
    //   setChecking(e.target.checked);
      checkboxClicked(e);
    }} />
   )
};
  
  export default Checkbox;