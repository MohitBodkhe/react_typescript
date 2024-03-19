import React, { useState } from 'react';
import './App.css';
import Child from './components/Child';
import Second from './components/Second';
import Third from './components/Third';
import Forth from './components/Forth';

function App() {
  const[name,setName] = useState('mohit')
  const person = [{
    firstName:"mohit",
    lastName: "Bodkhe"
  },
  {
    firstName:"Rohit",
    lastName: "verma"
  }]



  return (
    <div className="App">
      <Child username={name} ></Child>
      <Second person= {person}></Second>
      <Third status= 'sucess' >
        <Second person={person}/>
      </Third>
      <Forth  handle ={(e)=> console.log(e.target.value)} style= {{color:'balck',background:'green'}}/>
    </div>
  );
}

export default App;
