import 'date-fns'
import './header.css'
import React, { useState }  from 'react'
import { Route, Switch } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Button, TextField } from '@material-ui/core'
// eslint-disable-next-line
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers'
// eslint-disable-next-line
import DateFnsUtils from '@date-io/date-fns'
import SearchTwoTone from '@material-ui/icons/SearchTwoTone'
// selectedDate, handleDateChange
const Header = ({ setSearchedCountry }) => {
    const [country, setCountry] = useState('')

    const handleSearch = () => {
        setSearchedCountry(country)
        setCountry('')
    }

    return (
        <header className="flex">
            <Link to="/" className="logo">Covid19 Around</Link>
            <div>
                <Switch>
                    <Route exact path="/">
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
                            style={{ height:"90%", marginLeft: "1em" }}
                            onClick={() => handleSearch()}
                        >
                            <SearchTwoTone />
                        </Button>
                    </Route>
                </Switch>
            </div>
        </header>
    )
}

export default Header;