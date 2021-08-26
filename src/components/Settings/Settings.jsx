import { Grid } from '@material-ui/core'
import { EcoTwoTone, NightsStayOutlined, WbSunnyOutlined } from '@material-ui/icons'
import React from 'react'

import { SettingWrapper, SettingHolder, SettingTitle, SettingSubHeader } from './Settings.style'

const Settings = ({ isDarkMode, setDarkMode }) => {
    const darkMode = () => {
        localStorage.setItem('darkModeOn', !isDarkMode)
        setDarkMode(!isDarkMode)
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
                            <b>Nepal</b>
                        </SettingHolder>
                        <div style={{ borderBottom:"1px solid #000", padding:"2em 0 1em 0", alignItems:"center", display:"flex", justifyContent:"space-between", width:"100%" }}>
                            <p>
                                <b>News Language</b><br />
                                <SettingSubHeader isDarkMode={isDarkMode}>Get the news in your prefered language</SettingSubHeader>
                            </p>
                            <b>English</b>
                        </div>
                    </SettingWrapper>
                </Grid>
                <Grid item xl={6} md={6} xs={12} style={{ textAlign:"center" }}>
                    <EcoTwoTone style={{ fontSize:"5rem" }}/>
                    <h2>Covid-19 Stat</h2>
                    <p>For Queries: covid19@support.com</p>
                </Grid>
            </Grid>
        </div>
    )
}

export default Settings
