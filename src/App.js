
import './App.css';

const getResult = e => {
  
}

function App() {
  return (
    <div className="App">
      <h1>Kevin's Mortgage Calculator Application</h1>
      <form className="Form" onSubmit={getResult}>
        <div className="Amount">
          <label>Mortgage Amount: </label>
          <input type="number" placeholder="$500000"></input>
        </div>
        <div>
          <label className="Downpayment">Downpayment: </label>
          <input type="number" placeholder="$25000"></input>
        </div>
        <div>
          <label className="Interest">Interest Rate: </label>
          <input type="number" placeholder="3.5%"></input>
        </div>
        <div>
          <label className="Years">Length (years): </label>
          <input type="number" placeholder="25"></input>
        </div>
        <div>
          <button type="reset">Clear</button>
          <button type="submit">Submit</button>
        </div>
      </form>
      <div className="Result">
        <h1></h1>
      </div>
    </div>
  );
}

export default App;
