import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Helloex from './compo';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

// function component
function Hellofunc(){
  return ( 
    <React.Fragment>
        <div><h1>Hellofunc</h1></div>
    </React.Fragment>
 
  
  );
}

// class compont
class Helloclass extends React.Component{
  render(){
    return <h1>Helloclass</h1>
  }
}

const data = (
  <h1>PUN</h1>
)
root.render(
  
    
    <App/>
   
    
  
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
