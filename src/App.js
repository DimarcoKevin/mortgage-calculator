import { useState } from 'react';
import './App.css';


const App = () => {

  const [total, setTotal] = useState(0);
  const [downpayment, setDownpayment] = useState(0);
  const [interest, setInterest] = useState(0);
  const [years, setYears] = useState(0);

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
          <input 
            onChange={event => setDownpayment(event.target.value)}
            className="Downpayment" 
            type="number" 
            placeholder="$25000">
          </input>
        </div>

        <div>
          <label>Interest Rate: </label>
          <input 
            onChange={event => setInterest(event.target.value)}
            className="Interest" 
            type="number" 
            placeholder="3.5%">
          </input>
        </div>

        <div>
          <label>Length (years): </label>
          <input 
            onChange={event => setYears(event.target.value)}
            className="Years" 
            type="number" 
            placeholder="25">
          </input>
        </div>

        <div>
          <button className="Clear" type="reset">Clear</button>
          <button className="Submit" type="submit">Submit</button>
        </div>

      </form>
      <div className="Result">
        
      </div>
    </div>
  );
}

export default App;
