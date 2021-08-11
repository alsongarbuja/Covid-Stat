import './App.css';
import { Container, CircularProgress } from '@material-ui/core';
import Header from './components/header/Header';
import { useFetch } from './custom-hooks/UseFetch';
import React, { useState, useEffect } from 'react';
import Body from './components/body/Body';
import MainBody from './components/body/MainBody';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const URL = 'https://covid-193.p.rapidapi.com/statistics'

function App() {
  const { loading, responses } = useFetch(URL)

  const [data, setData] = useState([])
  const [selectedDate, setSelectedDate] = useState(new Date('2021-08-04T12:11:54'))
  const [searchedCountry, setSearchedCountry] = useState('')

  useEffect(() => {
      setData(responses.response)
  }, [responses])



  return (
    <div className="App"> 
      <Header
        selectedDate={selectedDate}
        handleDateChange={setSelectedDate}
        setSearchedCountry={setSearchedCountry}
      />
      {
        loading ? (
          <div className="progressDiv flex">
            <CircularProgress />
          </div>
        ) : (
          <>
            <Router>
              <Switch>
                <Route exact path="/">
                  <MainBody data={data} searchedCountry={searchedCountry} />
                </Route>
                <Route path="/detail/:country">
                  <Container maxWidth="md">
                    <Body />
                  </Container>
                </Route>
              </Switch>
            </Router>
          </>
        )
      }
    </div>
  );
}

export default App;
