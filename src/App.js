import './App.css';
import { Container } from '@material-ui/core';
import Header from './components/header/Header';
import { useFetch } from './custom-hooks/UseFetch';
import React, { useState, useEffect } from 'react';
import Body from './components/body/Body';
import MainBody from './components/body/MainBody';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Dashboard from './components/body/Dashboard/Dashbord';
import Sidebar from './components/sidebar/Sidebar';
import Myths from './components/Myths/Myths';
import Settings from './components/Settings/Settings';

import { Toolbar, Wrapper } from './App.style'
import { useMediaQuery } from '@material-ui/core';

const URL = 'https://covid-193.p.rapidapi.com/statistics'

function App() {
  const { loading, responses } = useFetch(URL)
  const isMobile = useMediaQuery('(max-width: 600px)')

  const [data, setData] = useState([])
  const [searchedCountry, setSearchedCountry] = useState('')

  useEffect(() => {
      setData(responses.response)
  }, [responses])

  return (
    <Router>
      <div style={{ display:"flex", height:"100%", width:"100%" }}> 
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Wrapper>
              <Dashboard />
              {isMobile ? <Toolbar /> : <></>}
            </Wrapper>
          </Route>
          <Route exact path="/stats">
            <Wrapper>
              <Header setSearchedCountry={setSearchedCountry} />
              <MainBody loading={loading} data={data} searchedCountry={searchedCountry} />
              {isMobile ? <Toolbar /> : <></>}
            </Wrapper>
          </Route>
          <Route path="/detail/:country">
            <Container maxWidth="md">
              <Body />
            </Container>
          </Route>
          <Route exact path="/myths">
            <Wrapper>
              <Myths />
              {isMobile ? <Toolbar /> : <></>}
            </Wrapper>
          </Route>
          <Route>
            <Wrapper>
              <Settings />
              {isMobile ? <Toolbar /> : <></>}
            </Wrapper>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
