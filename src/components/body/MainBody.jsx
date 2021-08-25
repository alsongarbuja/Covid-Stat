import React, { useState, useEffect, createRef } from 'react'
import Country from './Country'
import { CountryLoader } from './StyledComponents/MainBody.style'

const MainBody = ({ loading, data, searchedCountry, isDarkMode }) => {

    const [elRefs, setElRefs] = useState([])
    const n = 18

    useEffect(() => {
        const refs = Array(data?.length).fill().map((_, i) => elRefs[i] || createRef())

        setElRefs(refs)
    // eslint-disable-next-line
    }, [data])

    return (
        <>
            <div style={{ height:"120px" }} />
            {
                loading ? (
                    <div className="flex">
                        {
                            [...Array(n)].map((_, i) => <CountryLoader isDarkMode={isDarkMode} key={i} />)
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
        </>
    )
}

export default MainBody
