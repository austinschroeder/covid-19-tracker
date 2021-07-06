
import { useState, useEffect } from 'react';
import { MenuItem, FormControl, Select, Card, CardContent  } from '@material-ui/core';
import InfoBox from './components/Infobox'
import Map from './components/Map'
import './css/App.css';

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
      <div className="app-left">
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

        <div className="app-stats">
          <InfoBox title="Coronavirus Cases" cases={123} total={2000}/>

          <InfoBox title="Recovered" cases={123} total={3000}/>
          
          <InfoBox title="Deaths" cases={123} total={4000}/>
        </div>

        <Map/>
      </div>

      <Card className="app-right">
        <CardContent>
          <h3>Live Cases by Country</h3>

          <h3>Worldwide new cases</h3>
        </CardContent>          
      </Card>
      
    </div>
  );
}

export default App;
