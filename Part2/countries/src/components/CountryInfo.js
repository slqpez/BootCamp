import React from 'react'

function CountryInfo({country}) {
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
    )
}

export default CountryInfo
