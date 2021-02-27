import React, {useState} from 'react'
import CountryInfo from "./CountryInfo"

function Results({results}) {
    
    const [clicked, setClicked] = useState(false)
    const [countrySelected, setCountrySelected] = useState({})

    function handleShowCountry(e, country){
      e.preventDefault()
      setCountrySelected(country)
      setClicked(!clicked)
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
              {results.map((country) => {
                return(
                  <div className="country-div" key={country.alpha2Code}>
                  <p className="country">{country.name}</p>
                  <button className="btn-show" onClick={(e)=>handleShowCountry(e,country)}>Show</button>
                  </div>
                  
                )
              })}
                
              
            </div>
          );
        }
      }
}

export default Results
