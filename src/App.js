import { useState } from 'react';
import Axios from 'axios';
import './App.css';

function App() {
  const [ex, setExc] = useState("Click on any button to generate an excuse");

  const partyExc = () => {
    Axios.get(`https://excuser-three.vercel.app/v1/excuse/party`).then((res) => {
      setExc(res.data[0].excuse);
      console.log(res.data);
    })
  }

  const officeExc = () => {
    Axios.get(`https://excuser-three.vercel.app/v1/excuse/office`).then((res) => {
      setExc(res.data[0].excuse);
      console.log(res.data);
    })
  }

  const familyExc = () => {
    Axios.get(`https://excuser-three.vercel.app/v1/excuse/family`).then((res) => {
      setExc(res.data[0].excuse);
      console.log(res.data);
    })
  }
  return (
    <>
      <div className='App'>
        <div className='head'><h1>Generate an excuse..!!</h1></div>
        <div className="buttons">
          <button onClick={officeExc}>Office</button>
          <br></br>
          <button onClick={familyExc}>Family</button>
          <br></br>
          <button onClick={partyExc}>Party</button>
        </div>
        <div className="excuse">
          <h1>{ex}</h1>
        </div>
      </div>
    </>
  );
}

export default App;
