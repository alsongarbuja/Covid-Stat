import React from 'react'

import { Grid, Select, MenuItem, InputBase, withStyles } from '@material-ui/core'
import { EcoTwoTone, NightsStayOutlined, WbSunnyOutlined } from '@material-ui/icons'

// import { langs } from '../../data/lang'
import { countries } from '../../data/country'

import { SettingWrapper, SettingHolder, SettingTitle, SettingSubHeader } from './Settings.style'

const Settings = ({ 
    isDarkMode, 
    setDarkMode,
    selectedCountry, 
    setSelectedCountry
}: {
    isDarkMode: boolean,
    setDarkMode: React.Dispatch<React.SetStateAction<boolean>>,
    selectedCountry: string | null,
    setSelectedCountry: React.Dispatch<React.SetStateAction<string>>
}) => {
    
    const BootstrapInput = withStyles((theme) => ({
        input: {
          borderRadius: 4,
          position: 'relative',
          backgroundColor: theme.palette.background.paper,
          border: '1px solid #ced4da',
          fontSize: 16,
          padding: '10px 26px 10px 12px',
          transition: theme.transitions.create(['border-color', 'box-shadow']),
          // Use the system font instead of the default Roboto font.
          fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
          ].join(','),
          '&:focus': {
            borderRadius: 4,
            borderColor: '#80bdff',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
          },
        },
      }))(InputBase);

    const darkMode = () => {
        localStorage.setItem('darkModeOn', !isDarkMode ? 'true' : 'false')
        setDarkMode(!isDarkMode)
    }
    // const handleLanguage = e => {
    //     localStorage.setItem('language', e.target.value)
    //     setLanguage(e.target.value)
    // }
    const handleCountry = (e: React.ChangeEvent<{
        name?: string | undefined;
        value: unknown;
    }>) => {
        localStorage.setItem('country', e.target.value as string)
        setSelectedCountry(e.target.value as string)
    }

    return (
        <div style={{ padding:"1em 2em" }}>
            <h1>Settings</h1>
            <Grid container spacing={1} style={{ alignItems:"center" }}>
                <Grid item xl={6} md={6} xs={12}>
                    <SettingWrapper>
                        <SettingTitle>Prefrences</SettingTitle>
                        <SettingHolder>
                            <p>
                                <b>App Theme</b><br />
                                <SettingSubHeader isDarkMode={isDarkMode}>Set the theme of the app</SettingSubHeader>
                            </p>
                            <span style={{ cursor:"pointer" }} onClick={darkMode}>
                                {
                                    !isDarkMode ? <WbSunnyOutlined style={{ fontSize:"2rem" }} /> : <NightsStayOutlined style={{ fontSize:"2rem" }} />
                                }
                            </span>
                        </SettingHolder>
                    </SettingWrapper>
                    <SettingWrapper>
                        <SettingTitle>System</SettingTitle>
                        <SettingHolder>
                            <p>
                                <b>Main Location</b><br />
                                <SettingSubHeader isDarkMode={isDarkMode}>Set main location for the dashboard</SettingSubHeader>
                            </p>
                            <Select
                                labelId="demo-customized-select-label"
                                value={selectedCountry}
                                onChange={handleCountry}
                                input={<BootstrapInput />}
                            >
                                {
                                    countries.map((country, i) => <MenuItem key={i} value={country.name} >{country.name}</MenuItem>)
                                }
                            </Select>
                        </SettingHolder>
                        {/* <div style={{ borderBottom:"1px solid #000", padding:"2em 0 1em 0", alignItems:"center", display:"flex", justifyContent:"space-between", width:"100%" }}>
                            <p>
                                <b>News Language</b><br />
                                <SettingSubHeader isDarkMode={isDarkMode}>Get the news in your prefered language</SettingSubHeader>
                            </p>
                            <Select
                                labelId="demo-customized-select-label"
                                id="demo-customized-select"
                                value={language}
                                onChange={handleLanguage}
                                input={<BootstrapInput />}
                            >
                                {
                                    langs.map((lang, i) => <MenuItem key={i} value={lang.value} >{lang.name}</MenuItem>)
                                }
                            </Select>
                        </div> */}
                    </SettingWrapper>
                </Grid>
                <Grid item xl={6} md={6} xs={12} style={{ textAlign:"center" }}>
                    <EcoTwoTone style={{ fontSize:"5rem" }}/>
                    <h2>Covid-19 Stat</h2>
                    <p>For Queries: <a href='mailto:nicemeetingyoou@gmail.com'>nicemeetingyoou@gmail.com</a></p>
                    <p>Github Repo: <a href="https://github.com/Alson33/Covid-Stat" rel="noreferrer" target="_blank" style={{ color:"rgba(230, 96, 14, 0.8)"}}>Covid-Stat</a></p>
                </Grid>
            </Grid>
        </div>
    )
}

export default Settings
