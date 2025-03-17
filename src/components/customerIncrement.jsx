import people from '../assets/people.svg'


const Customer = ({customerCount, increment, decrement}) => {
   
    return (
    <article className="customer_incremental">
        <section className="customer-info">
            <img src={people} alt="People Icon" className="customers" />
            <p>Customers</p>
        </section>
        <section className="customer-actions">
            <button onClick={increment} className="increment_button">+</button>
            <p className="customer-count">{customerCount}</p>
            <button onClick={decrement} className="decremental_button">
            <span>-</span>
            </button>
        </section>
    </article>
    );
  };
  
  export default Customer;