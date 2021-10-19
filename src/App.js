import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
function App() {
      const [name,setName]=useState("");
      const[tnc,setTnc]=useState(false);
      const[interest,setInterest]=useState("");

      function getformData(e){
        console.log(name,tnc,interest)
        e.preventDefault()
      }

  return (
    <div className="App">
      <h1>Handle form in React</h1>
      <form onSubmit={getformData}>
        <input type="text" placeholder="Enter Name" onChange={(e)=>setName(e.target.value)}/><br></br><br></br>

        <select onChange={(e)=>setInterest(e.target.value)}>
              <option>Select Option</option>
              <option>AAAA</option>
              <option>BBBB</option>
        </select><br></br><br></br>

        <input type="checkbox" onChange={(e)=>setTnc(e.target.checked)}/><span>Accepts Terms and Conditions</span><br></br><br></br>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
