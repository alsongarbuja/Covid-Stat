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

import { Toolbar, Wrapper, MainBodyDiv } from './App.style'
import { useMediaQuery } from '@material-ui/core';

const URL = 'https://covid-193.p.rapidapi.com/statistics'

function App() {
  const { loading, responses } = useFetch(URL, "covid-193.p.rapidapi.com")
  const isMobile = useMediaQuery('(max-width: 600px)')

  let darkMode = localStorage.getItem('darkModeOn') === undefined || localStorage.getItem('darkModeOn') === "false" ? false : true

  const [data, setData] = useState([])
  const [isDarkMode, setIsDarkMode] = useState(darkMode)
  const [searchedCountry, setSearchedCountry] = useState('')

  useEffect(() => {
      setData(responses.response)
  }, [responses])

  return (
    <Router>
      <MainBodyDiv isDarkMode={isDarkMode}> 
        <Sidebar isDarkMode={isDarkMode}/>
        <Switch>
          <Route exact path="/">
            <Wrapper>
              <Dashboard isDarkMode={isDarkMode}/>
              {isMobile ? <Toolbar /> : <></>}
            </Wrapper>
          </Route>
          <Route exact path="/stats">
            <Wrapper>
              <Header isDarkMode={isDarkMode} setSearchedCountry={setSearchedCountry} />
              <MainBody isDarkMode={isDarkMode} loading={loading} data={data} searchedCountry={searchedCountry} />
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
              <Myths isDarkMode={isDarkMode} />
              {isMobile ? <Toolbar /> : <></>}
            </Wrapper>
          </Route>
          <Route>
            <Wrapper>
              <Settings isDarkMode={isDarkMode} setDarkMode={setIsDarkMode} />
              {isMobile ? <Toolbar /> : <></>}
            </Wrapper>
          </Route>
        </Switch>
      </MainBodyDiv>
    </Router>
  );
}

export default App;
