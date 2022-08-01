
import './App.css';
import {useState,useEffect} from 'react'
import NumberFormat from 'react-number-format'
import Nav from './Nav';



function App() {
  const[ preState, setPreState]  = useState("")
  const[ curstate, setCurstate]  = useState("")
  const[input, setInput] = useState("0")
  const[Operator, setOperator] = useState(null)
  const[total, setTotal] = useState(false)

  const inputNum = (e) => {
   if(curstate.includes(".") && e.target.innerText === ".") return;
    if(total){
      setPreState("");
    }

    curstate ? setCurstate((pre) => pre + e.target.innerText) : setCurstate(e.target.innerText);
    setTotal(false);
  };

  useEffect(() => {
    setInput(curstate);
  },[curstate]);
  useEffect(() => {
    setInput("0");
  },[]);

  const operator = (e) => {
    setTotal(false)
    setOperator(e.target.innerText)
    if(curstate === "") return
    if(preState !== ""){
      equals()

    }
    else {
      setPreState(curstate);
      setCurstate("")
    }


  }
  const equals = (e) => {
    if(e?.target.innerText === "="){
    setTotal(true)
    };
  let cal 
  switch(Operator){
    case "/":
      cal = String(parseFloat(preState)/ parseFloat(curstate));
         break;
      case "+":
        cal = String(parseFloat(preState) + parseFloat(curstate));
        break;
        case "*":
          cal = String(parseFloat(preState) * parseFloat(curstate));
          console.log("hello i m cal"+cal)
          break;
        case "-":
          cal = String(parseFloat(preState) - parseFloat(curstate));
          break;
          default: return
  }
  setInput("");
  setPreState(cal);
  setCurstate("");
  }
  const percent = () => {
preState ? setCurstate(String(parseFloat(curstate) / 100 * preState)) : setCurstate(String(parseFloat(curstate) / 100));
  }
  const reset = () => {
    setPreState("");
    setCurstate("");
    setInput("0");
  };

   return (
<div className='app'> 
<Nav/>

    <div className="container">
   
      <div className='wrapper'>
        <div className='screen'>{input !== "" || input === "0" ? (
        <NumberFormat 
        value={input} 
        displayType={"text"} 
        thousandSeparator = {true} 
        /> 
       ) : (
        
        <NumberFormat
         value={preState} 
         displayType={"text"} 
         thousandSeparator = {true}
         />
        )}
        </div>
        <div className='btn light-gray' onClick={reset}>AC</div>
        <div className='btn light-gray' onClick={percent}>%</div>
        
        <div className='btn orange' onClick={operator}>/</div>
  
        <div className='btn orange' onClick={operator}>*</div>
        <div className='btn' onClick={inputNum}>7</div>
        <div className='btn' onClick={inputNum}>8</div>
        <div className='btn' onClick={inputNum}>9</div>

        <div className='btn orange' onClick={operator}>+</div>
        <div className='btn' onClick={inputNum}>4</div>
        <div className='btn' onClick={inputNum}>5</div>
        <div className='btn' onClick={inputNum}>6</div>
        
        <div className='btn orange' onClick={operator}>-</div>
        <div className='btn' onClick={inputNum}>1</div>
        <div className='btn' onClick={inputNum}>2</div>
        <div className='btn' onClick={inputNum}>3</div>
   
        <div className='btn' onClick={inputNum}>.</div>
        <div className='btn zero' onClick={inputNum}>0</div>
        <div className='btn' onClick={inputNum}>#</div>
        <div className='btn' onClick={equals}>=</div>
    




        

      </div>
        
    </div>
    </div>
  );
}

export default App;
