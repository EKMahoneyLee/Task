import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// let name: string;
// let age: number;
// // let age: number | string => call "union" : can contain either number or string
// let isStudent: boolean;
// let hobbies: string;
// let role: [number, string]

// type Person = {
//   name: string,
//   age?: number 
// }
// let person: Person = {
//   name: "EK",
//   age: 39
// };

// how to define a function type
// let printName: (name: string) => void; //returns undefined
// let pringName: (name: string) => never; //does not return anything


