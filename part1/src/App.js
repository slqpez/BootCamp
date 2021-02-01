
const Title = ({name, lastName})=>{
  return <h1>{name} 
  {lastName} La puta madre cómo soy así de imbécil.</h1>
}
function App() {
  return (
    <div className="App">
      <Title  name="Santiago" lastName="López"></Title>
    </div>
  );
} 

export default App;
