import React, { useState, useEffect, createRef } from 'react'
import Country from './Country'
import { CountryLoader } from './Stats.style'

import { useFetch } from '../../custom-hooks/UseFetch'
import Header from '../../components/header/Header'

const Stats = ({ searchedCountry, isDarkMode, setSearchedCountry }) => {
    const { loading, responses } = useFetch('https://covid-193.p.rapidapi.com/statistics', "covid-193.p.rapidapi.com")

    const [data, setData] = useState([])
    const [elRefs, setElRefs] = useState([])

    useEffect(() => {
        setData(responses.response)
      }, [responses])

    useEffect(() => {
        const refs = Array(data?.length).fill().map((_, i) => elRefs[i] || createRef())

        setElRefs(refs)
    // eslint-disable-next-line
    }, [data])

    return (
        <div>
            <Header isDarkMode={isDarkMode} setSearchedCountry={setSearchedCountry} />
            <div style={{ height:"120px" }} />
            {
                loading ? (
                    <div className="flex">
                        {
                            [...Array(18)].map((_, i) => <CountryLoader isDarkMode={isDarkMode} key={i} />)
                        }
                    </div>
                ) : (
                    <div className="flex">
                        {
                            data?.map((country, i) => (
                                <Country 
                                    key={i}
                                    country={country}
                                    selected={searchedCountry === country.country}
                                    refProp={elRefs[i]}
                                    isDarkMode={isDarkMode}
                                />
                            ))
                        }    
                    </div>
                )
            }
        </div>
    )
}

export default Stats
