import { Button } from '@material-ui/core'
import { Link } from 'react-router-dom'
import React from 'react'
import ArrowForwardOutlined from '@material-ui/icons/ArrowForwardOutlined'
import { FavoriteRounded, SentimentDissatisfiedRounded, ShowChartRounded } from '@material-ui/icons'
import { CountryDiv, CountryName, StatDiv } from './StyledComponents/MainBody.style'

const Country = ({ country, selected, refProp, isDarkMode }) => {
    
    if(selected) refProp?.current?.scrollIntoView({ behavior: "smooth", block: "center" })

    return (
        <CountryDiv isDarkMode={isDarkMode} ref={refProp}>
            <CountryName 
                style={{ 
                    backgroundColor:selected ? "#87f" : "inherit", 
                    color:selected ? "#fff" : "inherit",
                    padding:selected ? ".5em 1em" : "0" 
                }}
            >
                {country.country}
            </CountryName>
            <StatDiv className="flex">
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
            </StatDiv>
            <Link 
                to={`/detail/${country.country}`} 
                style={{ color: '#fff', textDecoration: 'none' }}
            >
                <Button variant="outlined" color="primary" size="small" style={{ borderRadius:"30px" }}>
                    {/* More Info */}
                    <ArrowForwardOutlined fontSize="small"/>
                </Button>
            </Link>
        </CountryDiv>
    )
}

export default Country
