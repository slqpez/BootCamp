import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

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
  

  const CountryInfo = ({ country }) => {
    return (
      <div>
        <h2>{country.name}</h2>
        <p>Capital: {country.capital}</p>
        <p>Population: {country.population}</p>
        <h3>Languages</h3>
        {country.languages.map((languaje) => (
          <li key={languaje.iso639_1}>{languaje.name}</li>
        ))}
        <img src={country.flag} alt="Flag" width="200" height="150"></img>
      </div>
    );
  };

  const Results = ({ results }) => {
    const [clicked, setClicked] = useState(false)
    const [countrySelected, setCountrySelected] = useState({})

    function handleShowCountry(e, countrie){
      e.preventDefault()
      setCountrySelected(countrie)
      setClicked(!clicked)
      return countrie
    }
    
    if(clicked){
      return <CountryInfo country={countrySelected}></CountryInfo>
    }else{
      if (results.length > 10) {
        return <p>Too many matches, specify another filter.</p>;
      } else if (results.length === 1) {
        return <CountryInfo country={results[0]}></CountryInfo>;
      } else if (results.length <= 10) {
        return (
          <div>
            {results.map((countrie) => {
              return(
                <div className="country-div" key={countrie.alpha2Code}>
                <p className="country">{countrie.name}</p>
                <button className="btn-show" onClick={(e)=>handleShowCountry(e,countrie)}>Show</button>
                </div>
                
              )
            })}
              
            
          </div>
        );
      }
    }

  };

  const filteredCountries = countries.filter((countrie) =>
    countrie.name.includes(filterValue)
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