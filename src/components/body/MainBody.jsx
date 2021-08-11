import React, { useState, useEffect, createRef } from 'react'
import Country from './Country'
import './MainBody.css'

const MainBody = ({ data, searchedCountry }) => {

    const [elRefs, setElRefs] = useState([])

    useEffect(() => {
        const refs = Array(data?.length).fill().map((_, i) => elRefs[i] || createRef())

        setElRefs(refs)
    // eslint-disable-next-line
    }, [data])

    return (
        <div className="flex">
            {
                data?.map((country, i) => (
                    <Country 
                        key={i}
                        country={country}
                        selected={searchedCountry === country.country}
                        refProp={elRefs[i]}
                    />
                ))
            }    
        </div>
    )
}

export default MainBody
