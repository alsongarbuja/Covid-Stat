import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useMediaQuery } from '@material-ui/core';

import Sidebar from './components/sidebar/Sidebar'
import { Dashboard, Info, Myths, Settings, Stats, Details } from './pages'

import { Wrapper, Toolbar, MainBodyDiv } from './App.style'

const AppRoutes = () => {
    const isMobile = useMediaQuery('(max-width: 600px)')

    const [isDarkMode, setIsDarkMode] = useState(false)
    const [searchedCountry, setSearchedCountry] = useState('')
    const [language, setLanguage] = useState<null|string>('en')
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
        setSelectedCountry(selectCountry??'Nepal')
      }, [])

    return (
        <Layout isDarkMode={isDarkMode} isMobile={isMobile} >
            <Routes>
                <Route 
                    path="/" 
                    element={<Dashboard 
                                isDarkMode={isDarkMode}
                                isMobile={isMobile}
                                language={language}
                            />} 
                />
                <Route 
                    path="/stats" 
                    element={<Stats isDarkMode={isDarkMode} searchedCountry={searchedCountry} setSearchedCountry={setSearchedCountry} />} 
                />
                <Route path="/detail/:country" element={<Details />} />
                <Route path="/myths" element={<Myths isDarkMode={isDarkMode} />} />
                <Route path="/info" element={<Info />} />
                <Route 
                    path="/settings" 
                    element={<Settings 
                                isDarkMode={isDarkMode} 
                                setDarkMode={setIsDarkMode} 
                                selectedCountry={selectedCountry}
                                setSelectedCountry={setSelectedCountry}
                            />} 
                />
            </Routes>
        </Layout>
    )
}

const Layout = ({ children, isDarkMode, isMobile }: { children: React.ReactNode, isDarkMode: boolean, isMobile: boolean }) => {
    return (
        <MainBodyDiv isDarkMode={isDarkMode}>
            <Sidebar isDarkMode={isDarkMode} />
            <Wrapper>
                {children}
                {isMobile ? <Toolbar /> : <></>}
            </Wrapper>
        </MainBodyDiv>
    )
}

export default AppRoutes
