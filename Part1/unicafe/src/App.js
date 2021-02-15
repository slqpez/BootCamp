import './App.css';
import {useState} from "react"

const Head = ({text})=> <h1>{text}</h1>
const Subtitle = ({text})=> <h3>{text}</h3>
const Statistics =({text, value})=> {return(
  <>
  
  <tr>
      <th>{text}:</th>
      <th>{value}</th> 
    </tr>
  
   
   </>
)
    
}



const Button = ({handleClick, text})=> <button onClick={handleClick}>{text}</button>
let positives =0;

const App=()=> {
  const [good, setGood] = useState(0)
  const [regular, setRegular] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)   
  const [average, setaverage] = useState(0)
  

  const upGood=()=>{
    setGood(good +1)
    setTotal(total +1)
    setaverage((average+1))
    positives +=1;
  }
  const upRegular=()=>{
    setRegular(regular +1)
    setTotal(total +1)
    setaverage(average)
  }
  const upBad=()=>{
    setBad(bad +1)
    setTotal(total +1)
    setaverage((average-1))
  }
  const aver = (average/total).toFixed(4);
  const positiveAver = ((positives/total)*100).toFixed(4)
  return (
    <div className="App">
     <Head text="Give feedback"></Head>
     <Button handleClick={()=> upGood()} text="Good"></Button>
     <Button handleClick={()=> upRegular()} text="Regular"></Button>
     <Button handleClick={()=> upBad()} text="Bad"></Button>
     <Subtitle text="Statics"></Subtitle>
     {total>0?<>
      <table>
        <tbody>
          <Statistics text="Good" value={good}></Statistics>
          <Statistics text="Regular" value={regular}></Statistics>
          <Statistics text="Bad" value={bad}></Statistics>
          <Statistics text="Total" value={total}></Statistics>
          <Statistics text="Average" value={isNaN(aver)?0:aver}></Statistics>
          <Statistics text="Positives" value={isNaN(positiveAver)?0:positiveAver}></Statistics>
        </tbody>
      </table>
    </>:<p>No feedback given.</p>}
    
    </div>
  );
}

export default App;
