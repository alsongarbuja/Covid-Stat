import { Button } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'
import './MainBody.css'

const MainBody = ({ data }) => {

    return (
        <div className="flex">
            {
                data?.map((country, i) => (
                    <div key={i} className="pocketDiv">
                        <span className="country-name">{country.country}</span>
                        <p className="text-danger">New cases: {country.cases.new || "0"}</p>
                        <p className="text-danger">New Deaths: {country.deaths.new || "0"}</p>
                        <p className="text-success">Recovered: {country.cases.recovered}</p>
                        <Button variant="contained" color="primary" size="small">
                            <Link 
                                to={`/detail/${country.country}`} 
                                style={{ color: '#fff', textDecoration: 'none' }}
                            >More Info</Link>
                        </Button>
                    </div>
                ))
            }    
        </div>
    )
}

export default MainBody
