//import React { Component }  from 'react';
 import {useState} from 'react';
import Employee from './Employee';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Routes from "./routes";

function App() {

  //let emp = [{name:"AR",age:33},{name:"ABC",age:22}]
  return <Routes />;

/*   return (
    <div className='App'>
      <div className='container-fluid'>
        <div className='row'>
      
      {
        emp.map((obj,index)=>{
          return(
            <Employee key={index} name={obj.name} age={obj.age} />
          )
        })
      }

        </div>
      </div>
    </div>
  ); */
}


export default App;
