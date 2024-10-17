import './App.css'
import {useState} from "react";

function App() {
  const [name, setName] = useState("");
  const [datetime, setDateime] = useState("");
  const [description, setDescription] = useState("");


  function addNewTransaction(){

  }

  return (

    <main>
      <h1>₹600<span>.00</span></h1>
      <form onSubmit={addNewTransaction}>
        <div className="basic">
          <input type="text"
          value={name}
          onChange={(ev) => setName(ev.target.value)}
          placeholder={'+ ₹18,000 for voltas washing machine'} />
        <input type="datetime-local"
        value={datetime}
          onChange={(ev) => setDateime(ev.target.value)}/>
        </div>
        <div className="description">
          <input type="text"
          value={description}
          onChange={(ev) => setDescription(ev.target.value)}
          placeholder={'description'} />
        </div>
        <button type="submit" className="text-gray-800">Add new transaction</button>
      </form>
      <div className="transactions">
        <div className="transaction">
          <div className="left">
            <div className="name">New Washing Machine </div>
            <div className="description">it was time for new washing machine</div>
          </div>
          <div className="right">
            <div className="price red">-₹18000</div>
            <div className="datetime">17-10-2000</div>
          </div>
        </div>
        <div className="transaction">
          <div className="left">
            <div className="name">iPhone </div>
            <div className="description">it was time for new washing machine</div>
          </div>
          <div className="right">
            <div className="price red">-₹70000</div>
            <div className="datetime">17-10-2000</div>
          </div>
        </div>
        <div className="transaction">
          <div className="left">
            <div className="name">Salary </div>
            <div className="description">it was time for new washing machine</div>
          </div>
          <div className="right">
            <div className="price green">+₹100000</div>
            <div className="datetime">17-10-2000</div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default App
