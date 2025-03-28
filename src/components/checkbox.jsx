import party from '../assets/party_popper.svg'
const Checkbox = ({checkboxClicked, clicked}) => {
   return (
   
    <article className="special-occasion">
        
            <img src={party} alt="Celebration icon" className="party-icon" />
        
        <div className="special-occasion-content">
            <label className="special-occasion-label">
                <p>Special Occasion Discount</p>
                <input 
                    type="checkbox" 
                    checked={clicked} 
                    onChange={(e) => checkboxClicked(e)} 
                    className="special-occasion-checkbox"
                />
            </label>
        </div>
    </article>
   )
};
  
  export default Checkbox;