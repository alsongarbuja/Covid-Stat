import React , { useState, useEffect } from 'react'

import { InfoHolder, ReportDiv, SymptomDiv } from './Dashboard.style'

import { Grid } from '@material-ui/core'
import { ArrowForward, ScatterPlot } from '@material-ui/icons'
import { Link } from 'react-router-dom'

import News from './News/News'
import Chart from './Report/Report'

import { dynamicObject, useFetch } from '../../custom-hooks/UseFetch'

const Dashboard = ({ isMobile, isDarkMode, language }: { isMobile: boolean, isDarkMode: boolean, language: string | null }) => {
    const selectedCountry = localStorage.getItem('country') === null ? 'Nepal' : localStorage.getItem('country')
    const URL = `https://covid-193.p.rapidapi.com/statistics?country=${selectedCountry}`
    
    const { loading, responses } = useFetch(URL, "covid-193.p.rapidapi.com")

    const [data, setData] = useState<dynamicObject>([])

    useEffect(() => {
        setData(responses.response)
    }, [responses])

    return (
        <Grid container style={{ paddingTop:"1em", paddingLeft: isMobile ? "0":"2em" }}>
            <Grid item xl={6} md={9} xs={12}>
                <h1 style={{ paddingLeft:".75em" }}>DashBoard({loading ? "-" : data[0].country})</h1>
                <div style={{ display:"flex", flexWrap:"wrap", marginBottom:"1em"}}>
                    <InfoHolder isDarkMode={isDarkMode} style={{ backgroundColor:"#e6600ecc" }}>
                        <h3>New cases</h3>
                        <p>{loading ? "-" : data[0].cases.new ? data[0].cases.new : "0"}</p>
                    </InfoHolder>
                    <InfoHolder isDarkMode={isDarkMode} style={{ backgroundColor:"#241de5c0" }}>
                        <h3>Tested</h3>
                        <p>{loading ? "-" : data[0].tests.total}</p>
                    </InfoHolder> 
                    <InfoHolder isDarkMode={isDarkMode} style={{ backgroundColor:"#fb2528d8" }}>
                        <h3>New Deaths</h3>
                        <p>{loading ? "-" : data[0].deaths.new ? data[0].deaths.new : "0"}</p>
                    </InfoHolder>
                    <InfoHolder isDarkMode={isDarkMode} style={{ backgroundColor:"#60bd08fa" }}>
                        <h3>Recovered</h3>
                        <p>{loading ? "-" : data[0].cases.recovered}</p>
                    </InfoHolder>
                </div>
                <div style={{ paddingLeft:".5em" }}>
                    <h3 style={{ paddingLeft:".75em" }}>Weekly Report</h3>
                    <ReportDiv isDarkMode={isDarkMode}>
                        <Chart />
                    </ReportDiv>
                </div>
            </Grid>
            <Grid item xl={6} md={3} xs={12} style={{ padding: isMobile ? "1em" : "4em 2em 0 0" }}>
                <News isDarkMode={isDarkMode} />
                <SymptomDiv isDarkMode={isDarkMode}>
                    <ScatterPlot style={{ fontSize:"5rem" }}/>
                    <h3>Infos</h3>
                    <p style={{ textAlign:"left", display:"flex", alignItems:"center" }}>
                        Read about the symptoms, preventions, and many more
                        <Link to="/info">
                            <ArrowForward style={{ color:"#fff" }}/>
                        </Link>
                    </p>
                </SymptomDiv>
            </Grid>
        </Grid>
    )
}

export default Dashboard
