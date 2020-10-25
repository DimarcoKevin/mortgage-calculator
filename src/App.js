
import './App.css';

function App() {
  return (
    <div className="App">
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
      </form>
    </div>
  );
}

export default App;
