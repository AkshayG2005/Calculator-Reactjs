import React from "react";
import { add, sub, mult, div } from './Calc';

function App(){
return(
  <>
  <ul>
    <li>Addition of two numbers is -      {add(40,4)}</li>
    <li>Substraction of two numbers is -  {sub(40,4)}</li>
    <li>Multiplication of two numbers is -{mult(49, 10)}</li>
    <li>division of two numbers is -      {div(40,3)}</li>
  </ul>
</>
);
}
export default App;