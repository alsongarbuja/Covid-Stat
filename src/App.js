import './App.css';
import { Container } from '@material-ui/core';
import Header from './components/header/Header';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Dashboard, Stats, Info, Settings, Details, Myths } from './components/body';
import Sidebar from './components/sidebar/Sidebar';

import { Toolbar, Wrapper, MainBodyDiv } from './App.style'
import { useMediaQuery } from '@material-ui/core';

function App() {
  const isMobile = useMediaQuery('(max-width: 600px)')

  const [isDarkMode, setIsDarkMode] = useState(false)
  const [searchedCountry, setSearchedCountry] = useState('')
  const [language, setLanguage] = useState('en')
  const [selectedCountry, setSelectedCountry] = useState('')

  useEffect(() => {
    if(localStorage.getItem('darkModeOn') === null)
      localStorage.setItem('darkModeOn', 'false')

    if(localStorage.getItem('language') === null)
      localStorage.setItem('language', 'en')

    if(localStorage.getItem('country') === null)
      localStorage.setItem('country', 'Nepal')

    const darkMode = localStorage.getItem('darkModeOn') === 'false' ? false : true
    const lang = localStorage.getItem('language')
    const selectCountry = localStorage.getItem('country')
    setIsDarkMode(darkMode)
    setLanguage(lang)
    setSelectedCountry(selectCountry)
  }, [])

  return (
    <Router>
      <MainBodyDiv isDarkMode={isDarkMode}> 
        <Sidebar isDarkMode={isDarkMode}/>
        <Switch>
          <Route exact path="/">
            <Wrapper>
              <Dashboard 
                isDarkMode={isDarkMode} 
                language={language}
                isMobile={isMobile}
              />
              {isMobile ? <Toolbar /> : <></>}
            </Wrapper>
          </Route>
          <Route exact path="/info">
            <Wrapper>
              <Info />
              {isMobile ? <Toolbar /> : <></>}
            </Wrapper>
          </Route>
          <Route exact path="/stats">
            <Wrapper>
              <Header isDarkMode={isDarkMode} setSearchedCountry={setSearchedCountry} />
              <Stats isDarkMode={isDarkMode} searchedCountry={searchedCountry} />
              {isMobile ? <Toolbar /> : <></>}
            </Wrapper>
          </Route>
          <Route path="/detail/:country">
            <Container maxWidth="md">
              <Details />
            </Container>
          </Route>
          <Route exact path="/myths">
            <Wrapper>
              <Myths isDarkMode={isDarkMode} />
              {isMobile ? <Toolbar /> : <></>}
            </Wrapper>
          </Route>
          <Route exact path="/settings">
            <Wrapper>
              <Settings 
                isDarkMode={isDarkMode} 
                setDarkMode={setIsDarkMode} 
                language={language} 
                setLanguage={setLanguage} 
                selectedCountry={selectedCountry}
                setSelectedCountry={setSelectedCountry}
              />
              {isMobile ? <Toolbar /> : <></>}
            </Wrapper>
          </Route>
        </Switch>
      </MainBodyDiv>
    </Router>
  );
}

export default App;
