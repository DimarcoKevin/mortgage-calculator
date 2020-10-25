
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Kevin's Mortgage Calculator Application</h1>
      <form className="Form">
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
    </div>
  );
}

export default App;
