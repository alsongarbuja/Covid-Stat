import React, {useState, useEffect} from 'react'
import { useFetch } from '../../custom-hooks/UseFetch'
import './Body.css'
import currentDate from '../../helper/Date'

const Body = ({ country }) => {
    let formatedDate = currentDate()

    const { loading, responses } = useFetch(`https://covid-193.p.rapidapi.com/history?country=${country}&day=${formatedDate}`)
    const [data, setData] = useState([])

    useEffect(() => {
        setData(responses.response)
    }, [responses])

    return (
        <main>
            {
                loading ? "Loading..." : (
                    <>
                        <h1>{data[0].country}</h1>
                        <div className="info-holder flex">
                            <div className="total-holder">
                                <h2>Total Population: {data[0].population}</h2>
                                <h2>Total Cases:   <span className="text-danger">{data[0].cases.total}</span></h2>
                                <h2>Total Deaths:   <span className="text-danger">{data[0].deaths.total}</span></h2>
                                <h2>Total Recovered:   <span className="text-success">{data[0].cases.recovered}</span></h2>
                                <h2>Total Tested:   <span className="text-success">{data[0].tests.total}</span></h2>
                            </div>
                            <div className="new-holder flex">
                                <div className="outer-case">
                                    <h3>New Cases</h3>
                                    <span className="new-numbers text-danger">{data[0].cases.new}</span>
                                </div>
                                <div className="outer-case">
                                    <h3>New Deaths</h3>
                                    <span className="new-numbers text-danger">{data[0].deaths.new || 0}</span>
                                </div>
                                {/* <div className="outer-case">
                                    <h3>New Treated</h3>
                                    <span className="new-numbers text-success">2312</span>
                                </div> */}
                            </div>
                        </div>
                    </>
                )
            }
        </main>
    )
}

export default Body
