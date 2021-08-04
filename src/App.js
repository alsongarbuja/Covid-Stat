import './App.css';
import { Container } from '@material-ui/core';
import Header from './components/header/Header';
import { useFetch } from './custom-hooks/UseFetch';
import React, { useState, useEffect } from 'react';

const url = "https://covid-193.p.rapidapi.com/countries"

function App() {
  const { loading, responses } = useFetch(url)
  const [country, setCountry] = useState("Nepal")
  const [countries, setCountries] = useState([])
  const [selectedDate, setSelectedDate] = useState(new Date('2021-08-04T12:11:54'))

  useEffect(() => {
    setCountries(responses.response)
  }, [responses])

  return (
    <div className="App">
      {
        loading || (
          <Container maxWidth="md">
            <Header 
              country={country} 
              setCountry={setCountry} 
              countries={countries}
              selectedDate={selectedDate}
              handleDateChange={setSelectedDate}
            />
          </Container>
        )
      }
    </div>
  );
}

export default App;
