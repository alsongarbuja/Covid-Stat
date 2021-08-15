import { Button } from '@material-ui/core'
import { Link } from 'react-router-dom'
import React from 'react'
import ArrowForwardOutlined from '@material-ui/icons/ArrowForwardOutlined'
import { FavoriteRounded, SentimentDissatisfiedRounded, ShowChartRounded } from '@material-ui/icons'

const Country = ({ country, selected, refProp }) => {
    
    if(selected) refProp?.current?.scrollIntoView({ behavior: "smooth", block: "start" })

    return (
        <div className="pocketDiv">
            <span className="country-name">{country.country}</span>
            <div className="flex stat-div">
                <div className="text-danger">
                    <p>
                        <ShowChartRounded />
                    </p>
                    <p>{country.cases.new || "0"}</p>
                </div>
                <div className="text-danger">
                    <p>
                        <SentimentDissatisfiedRounded />
                    </p>
                    <p>{country.deaths.new || "0"}</p>
                </div>
                <div className="text-success">
                    <p>
                        <FavoriteRounded />
                    </p>
                    <p>
                        {country.cases.recovered}
                    </p>
                </div>
            </div>
            <Link 
                to={`/detail/${country.country}`} 
                style={{ color: '#fff', textDecoration: 'none' }}
            >
                <Button variant="outlined" color="primary" size="small" style={{ borderRadius:"30px" }}>
                    {/* More Info */}
                    <ArrowForwardOutlined fontSize="small"/>
                </Button>
            </Link>
        </div>
    )
}

export default Country
