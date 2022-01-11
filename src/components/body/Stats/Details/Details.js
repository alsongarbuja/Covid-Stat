import React, {useState, useEffect} from 'react'
import { useFetch } from '../../../../custom-hooks/UseFetch'
import currentDate from '../../../../helper/Date'

import { useParams, useNavigate } from 'react-router-dom'

import { Button, CircularProgress } from '@material-ui/core'
import ArrowBackIosTwoTone from '@material-ui/icons/ArrowBackIosTwoTone'
import { StyledMain, InfoHolder, NewHolder, NewNumber, OuterCase, TotalHolder, ProgressDiv } from './Details.style'

const Details = () => {
    const formatedDate = currentDate(new Date())
    const { country } = useParams()
    const navigate = useNavigate()

    const { loading, responses } = useFetch(`https://covid-193.p.rapidapi.com/history?country=${country}&day=${formatedDate}`, "covid-193.p.rapidapi.com")
    const [data, setData] = useState([])

    useEffect(() => {
        setData(responses.response)
    }, [responses])

    return (
        <StyledMain>
            {
                loading 
                    ? (
                        <ProgressDiv>
                            <CircularProgress />
                        </ProgressDiv>
                    ) : (
                    <>
                        {
                            data[0] !== undefined ? (
                                <>
                                    <h1>{data[0].country}</h1>
                                    <InfoHolder>
                                        <TotalHolder>
                                            {/* <h2>Total Population: {data[0].population}</h2> */}
                                            <h2>Total Cases:   <span className="text-danger">{data[0].cases.total}</span></h2>
                                            <h2>Total Deaths:   <span className="text-danger">{data[0].deaths.total}</span></h2>
                                            <h2>Total Recovered:   <span className="text-success">{data[0].cases.recovered || "-"}</span></h2>
                                            <h2>Total Tested:   <span className="text-success">{data[0].tests.total}</span></h2>
                                        </TotalHolder>
                                        <NewHolder>
                                            <OuterCase>
                                                <h3>New Cases</h3>
                                                <NewNumber className="text-danger">{data[0].cases.new || 0}</NewNumber>
                                            </OuterCase>
                                            <OuterCase>
                                                <h3>New Deaths</h3>
                                                <NewNumber className="text-danger">{data[0].deaths.new || 0}</NewNumber>
                                            </OuterCase>
                                        </NewHolder>
                                    </InfoHolder>
                                </>
                            ) : <h2 style={{ textAlign:"center" }}>No Available Data for Today</h2>
                        }
                        <div style={{ textAlign:"right" }}>
                            <Button size="large" onClick={() => navigate(-1)}>
                                <ArrowBackIosTwoTone />
                                Back
                            </Button>
                        </div>
                    </>
                ) 
            }
        </StyledMain>
    )
}

export default Details
