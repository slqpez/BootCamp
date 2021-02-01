
const Header =({course})=> <h1>{course}</h1>

const Content = ({title, exercises}) =>{
  return(
    <>
  <h2>{title}</h2>
    <p>Exercises: {exercises}</p>
</>)
}
const Total =({total})=>{
  const suma = total.reduce((a,b)=>a+b)
  return(
    <p>Total exercises: {suma}</p>
  )
}



const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  const totalEx = [exercises1,exercises2, exercises3]

  return (
    <div>
      <Header course={course}></Header>
      <Content title={part1} exercises={exercises1}></Content>
      <Content title={part2} exercises={exercises2}></Content>
      <Content title={part3} exercises={exercises3}></Content>
      <Total total={totalEx}></Total>
      
    </div>
  )
}

export default App;
