import './App.css';
import {useState} from "react"

const Head = ({text})=> <h1>{text}</h1>
const Subtitle = ({text})=> <h3>{text}</h3>
const Item =({text, value})=> <p>{text}: {value}</p>
 


const Option = ({handleClick, text})=> <button onClick={handleClick}>{text}</button>

const App=()=> {
  const [good, setGood] = useState(0)
  const [regular, setRegular] = useState(0)
  const [bad, setBad] = useState(0)

  const upGood=()=>{
    setGood(good +1)
  }
  const upRegular=()=>{
    setRegular(regular +1)
  }
  const upBad=()=>{
    setBad(bad +1)
  }
  return (
    <div className="App">
     <Head text="Give feedback"></Head>
     <Option handleClick={()=> upGood()} text="Good"></Option>
     <Option handleClick={()=> upRegular()} text="Regular"></Option>
     <Option handleClick={()=> upBad()} text="Bad"></Option>
     <Subtitle text="Statics"></Subtitle>
     <Item text="Good" value={good}> </Item>
     <Item text="Regular" value={regular}> </Item>
     <Item text="Bad" value={bad}> </Item>
    </div>
  );
}

export default App;
