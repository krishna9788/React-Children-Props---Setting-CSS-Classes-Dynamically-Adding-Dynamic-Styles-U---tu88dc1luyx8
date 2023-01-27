import React , {useState,useEffect} from 'react'
import '../styles/App.css';
import ChildComponent from './ChildComponent';
const App = () => {
 //code here
  const [square, setSquare] = useState(0);

  const squareNumber = (e) => {
    let number = e.target.value;
    // console.log(number, typeof (number))
    let s = number * number;
    setSquare(s);
  }

  return (
    <div id="main">
      <ChildComponent /> 
       <input id='input' onChange={squareNumber} />
    
      <p id='output'>{square}</p>
    </div>
  )
}


export default App;
