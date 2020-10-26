
import './App.css';


const App = () => {

  const [total, setTotal] = useState(0);

  const getResult = e => {

  }

  return (
    <div className="App">
      <h1>Kevin's Mortgage Calculator Application</h1>
      <form className="Form" onSubmit={getResult}>
        <div className="Amount">
          <label>Mortgage Amount: </label>
          <input 
            onChange={event => setTotal(event.target.value)} 
            className="Total" 
            type="number"
            placeholder="$500000">
          </input>
        </div>
        <div>
          <label>Downpayment: </label>
          <input className="Downpayment" type="number" placeholder="$25000"></input>
        </div>
        <div>
          <label>Interest Rate: </label>
          <input className="Interest" type="number" placeholder="3.5%"></input>
        </div>
        <div>
          <label>Length (years): </label>
          <input className="Years" type="number" placeholder="25"></input>
        </div>
        <div>
          <button className="Clear" type="reset">Clear</button>
          <button className="Submit" type="submit">Submit</button>
        </div>
      </form>
      <div className="Result">
        <h1></h1>
      </div>
    </div>
  );
}

export default App;
