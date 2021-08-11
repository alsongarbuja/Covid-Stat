import { Button } from '@material-ui/core'
import { Link } from 'react-router-dom'
import React from 'react'
import ArrowForwardOutlined from '@material-ui/icons/ArrowForwardOutlined'

const Country = ({ country, selected, refProp }) => {
    
    if(selected) refProp?.current?.scrollIntoView({ behavior: "smooth", block: "start" })

    return (
        <div className="pocketDiv">
            <span className="country-name">{country.country}</span>
            <p className="text-danger">New cases: {country.cases.new || "0"}</p>
            <p className="text-danger">New Deaths: {country.deaths.new || "0"}</p>
            <p className="text-success">Recovered: {country.cases.recovered}</p>
            <Link 
                to={`/detail/${country.country}`} 
                style={{ color: '#fff', textDecoration: 'none' }}
            >
                <Button variant="contained" color="primary" size="small">
                    More Info
                    <ArrowForwardOutlined fontSize="small"/>
                </Button>
            </Link>
        </div>
    )
}

export default Country
