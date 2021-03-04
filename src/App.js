import React from "react";
import "./App.css"; 
import  { useState, useEffect } from 'react';
//import TodoFeature from "./components/features/Todo/pages";
// import Narbar from "./components/Navbar";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Home from "./components/pages/Home";

function App() {
   
    const [show, setShow] = useState(true);

    const delHeader = () => {
       setShow(false);
    }
  
    useEffect(() => {
      return() => {
        alert("The component named Header is about to be unmounted.");
      };
    });
    let myheader;
    if(show){
      myheader=<Child />;
    }
    return (
      
      <div className="Counter">
        {myheader}
        <button type='button' onClick={delHeader} >Click</button>
      </div>
    );

}

function Child () {
  return (
    <h1>Hello</h1>
  );
}
export default App;
