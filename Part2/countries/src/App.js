import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Results from "./components/Results";

function App() {
  const [countries, setCountries] = useState([]);
  const [filterValue, setFilterValue] = useState("");

  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all").then((response) => {
      setCountries(response.data);
    });
  }, []);

  function handleFilterInput(e) {
    setFilterValue(e.target.value);
  }

  const filteredCountries = countries.filter((country) =>
    country.name.includes(filterValue)
  );



  return (
    <div className="App">
      <div>
        Find countries{" "}
        <input onChange={handleFilterInput} value={filterValue}></input>
        <Results results={filteredCountries}></Results>
      </div>
    </div>
  );
}

export default App;
