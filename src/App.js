
import { useState, useEffect } from 'react';
import { MenuItem, FormControl, Select, Card, CardContent  } from '@material-ui/core';
import './App.css';

function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState(["worldwide"])
  
  useEffect(() => {

    const getCountriesData = async () => {
      await fetch ("https://disease.sh/v3/covid-19/countries")
      .then((response) => response.json())
      .then((data) => {
        const countries = data.map((country) => (
          {
            name: country.country,
            value: country.countryInfo.iso2
          }
        ));

        setCountries(countries);
      });
    };
    getCountriesData();
  }, [countries]);

  const onCountryChange = async (event) => {
    const countryCode = event.target.value;
    setCountry(countryCode);
  }

  return (
    <div className="app">
      <div className="app-header">
        <h1>Covid 19 Tracker</h1>
        <FormControl className="app-dropdown">
          <Select variant="outlined" onChange={onCountryChange} value={country}>
            <MenuItem value="worldwide">Worldwide</MenuItem>
            {countries.map((country) => (
              <MenuItem value={country.value}>{country.name}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>

      
    </div>
  );
}

export default App;
