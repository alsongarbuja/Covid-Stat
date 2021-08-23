import React , { useState, useEffect } from 'react'

import Sidebar from '../../sidebar/Sidebar'
import { InfoHolder, ReportDiv, SymptomDiv, Toolbar } from './Dashboard.style'

import { Grid, useMediaQuery } from '@material-ui/core'
import { ArrowForward, ScatterPlot } from '@material-ui/icons'

import News from './News/News'
import Chart from './Report/Report'

import { useFetch } from '../../../custom-hooks/UseFetch'

const Dashbord = () => {
    const isMobile = useMediaQuery('(max-width: 600px)')
    const { loading, responses } = useFetch('https://covid-193.p.rapidapi.com/statistics?country=Nepal')

    const [data, setData] = useState([])

    useEffect(() => {
        setData(responses.response)
    }, [responses])

    return (
        <>
            <div style={{ display:"flex", height:"100%" }}>
                <Sidebar />
                <div style={{ paddingTop:"1em", paddingLeft: isMobile ? "0":"2em" }}>
                    <Grid container>
                        <Grid item xl={6} md={9} xs={12}>
                            <h1 style={{ paddingLeft:".75em" }}>DashBoard({loading ? "" : data[0].country})</h1>
                            <div style={{ display:"flex", flexWrap:"wrap", marginBottom:"1em"}}>
                                <InfoHolder style={{ backgroundColor:"#ff6a0dcc" }}>
                                    <h3>Active case</h3>
                                    <p>{loading ? "-" : data[0].cases.new}</p>
                                </InfoHolder>
                                <InfoHolder style={{ backgroundColor:"#241de5c0" }}>
                                    <h3>Tested</h3>
                                    <p>{loading ? "-" : data[0].tests.total}</p>
                                </InfoHolder> 
                                <InfoHolder style={{ backgroundColor:"#fb2528d8" }}>
                                    <h3>New Deaths</h3>
                                    <p>{loading ? "-" : data[0].deaths.new}</p>
                                </InfoHolder>
                                <InfoHolder style={{ backgroundColor:"#8cf827d8" }}>
                                    <h3>Recovered</h3>
                                    <p>{loading ? "-" : data[0].cases.recovered}</p>
                                </InfoHolder>
                            </div>
                            <div style={{ paddingLeft:".5em" }}>
                                <h3 style={{ paddingLeft:".75em" }}>Fortnightly Reports</h3>
                                <ReportDiv>
                                    <Chart />
                                </ReportDiv>
                            </div>
                        </Grid>
                        <Grid item xl={6} md={3} xs={12} style={{ padding: isMobile ? "1em" : "4em 2em 0 0" }}>
                            <News />
                            <SymptomDiv>
                                <ScatterPlot style={{ fontSize:"5rem" }}/>
                                <h3>Symptomes</h3>
                                <p style={{ textAlign:"left" }}>
                                    Read about the symptoms of corona
                                    <ArrowForward />
                                </p>
                            </SymptomDiv>
                        </Grid>
                    </Grid>
                </div>
            </div>
            {isMobile ? <Toolbar /> : <></>}
        </>
    )
}

export default Dashbord
