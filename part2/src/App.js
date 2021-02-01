const part1 = "Fundamentals of React";
const exercises1 = 10;
const part2 = "Using props to pass data";
const exercises2 = 7;
const part3 = "State of a component";
const exercises3 = 14;
const totalEx = [exercises1, exercises2, exercises3]




const Header = ({ title }) => <h1>{title}</h1>;
const Part = ({ course, exercises }) => {
  return (
    <>
      <h2>{course}</h2>
      <p>Number of exercises: {exercises}</p>
    </>
  );
};

const Content = ()=>{
  return(
    <>
    <Part course={part1} exercises={exercises1}></Part>
    <Part course={part2} exercises={exercises2}></Part>
    <Part course={part3} exercises={exercises3}></Part>
    
    </>
  )
 
}

const Total=({total})=>{
  const suma = total.reduce((a,b)=>a+b)
  return(
    <p>Total exercises of curse: {suma}</p>
  )
}

const App = () => {
  const course = "Half Stack application development";
  return (
    <div className="App">
      <Header title={course}></Header>
      <Content></Content>
      <Total total={totalEx}></Total>
    </div>
  );
};

export default App;
