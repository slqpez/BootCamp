import './App.css';
import {useState} from "react"

const Head = ({text})=> <h1>{text}</h1>
const Subtitle = ({text})=> <h3>{text}</h3>
const Item =({text, value})=> <p>{text}: {value}</p>
const Statistics =({valeGood, valueRegular,valueBad, valueTotal, valueAverage, valuePositive})=>{
  return(
    <>
    <Item text="Good" value={valeGood}> </Item>
     <Item text="Regular" value={valueRegular}> </Item>
     <Item text="Bad" value={valueBad}> </Item>
     <Item text="Total" value={valueTotal}> </Item>
     <Item text="Average" value={isNaN(valueAverage)?0:valueAverage.toFixed(4)}> </Item>
     <Item text="Positive" value={isNaN(valuePositive)?0:`${valuePositive.toFixed(4)} %`}> </Item>
    </>
  )
  
}


const Option = ({handleClick, text})=> <button onClick={handleClick}>{text}</button>
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
    console.log(positives)
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
  const aver = (average/total);
  const positiveAver = (positives/total)*100
  return (
    <div className="App">
     <Head text="Give feedback"></Head>
     <Option handleClick={()=> upGood()} text="Good"></Option>
     <Option handleClick={()=> upRegular()} text="Regular"></Option>
     <Option handleClick={()=> upBad()} text="Bad"></Option>
     <Subtitle text="Statics"></Subtitle>
     <Statistics valueNormal={good} valueRegular={regular} valueBad={bad} valueTotal={total} valueAverage={aver} valuePositive={positiveAver}></Statistics>
     
    </div>
  );
}

export default App;
