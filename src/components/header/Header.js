import 'date-fns'
import './header.css'
import React, { useState }  from 'react'
import { Button, TextField } from '@material-ui/core'
// eslint-disable-next-line
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers'
// eslint-disable-next-line
import DateFnsUtils from '@date-io/date-fns'
import SearchTwoTone from '@material-ui/icons/SearchTwoTone'
// selectedDate, handleDateChange
const Header = ({ setSearchedCountry }) => {
    const [country, setCountry] = useState('')

    return (
        <header>
            <span className="logo">Covid Stat</span><br/><br/>
            <div className="flex">
                <div>
                    <TextField 
                        label="Search Country" 
                        variant="outlined"
                        value={country}
                        onChange={e => setCountry(e.target.value)}
                    />
                    <Button 
                        color="primary" 
                        role="search" 
                        variant="contained" 
                        style={{ height:"100%", marginLeft: "1em" }}
                        onClick={() => setSearchedCountry(country)}
                    >
                        <SearchTwoTone />
                    </Button>
                </div>
            </div>
        </header>
    )
}

export default Header;