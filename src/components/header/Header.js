import 'date-fns'
import './header.css'
import React, { useState, useRef }  from 'react'
import { Route, Switch } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Button, IconButton, TextField, useMediaQuery } from '@material-ui/core'
// eslint-disable-next-line
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers'
// eslint-disable-next-line
import DateFnsUtils from '@date-io/date-fns'
import SearchTwoTone from '@material-ui/icons/SearchTwoTone'
import { Close } from '@material-ui/icons'
// selectedDate, handleDateChange
const Header = ({ setSearchedCountry }) => {
    const [country, setCountry] = useState('')
    const isDesktop = useMediaQuery('(min-width: 570px)')
    const searchForm = useRef()

    const handleSearch = e => {
        e.preventDefault();
        setSearchedCountry(country)
        setCountry('')
        if(!isDesktop){
            searchForm.current.style.display = "none"
        }
    }

    return (
        <header className="flex">
            <Link to="/" className="logo">Covid19 Around</Link>
            <Switch>
                <Route exact path="/">
                    <form ref={searchForm} onSubmit={handleSearch} className="search-form" style={{ display: isDesktop ? "block" : "none" }}>
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
                            size="large"
                            type="submit"
                        >
                            <SearchTwoTone />
                        </Button>
                        {
                            !isDesktop && (
                                <IconButton 
                                    color="secondary"
                                    size="large"
                                    style={{ marginLeft:".5em" }}
                                    onClick={() => searchForm.current.style.display = "none"}
                                >
                                    <Close />
                                </IconButton>
                            )
                        }
                    </form>
                    {
                        !isDesktop && (
                            <IconButton 
                                color="primary"
                                size="large"
                                onClick={() => searchForm.current.style.display="block"}
                            >
                                <SearchTwoTone />
                            </IconButton>
                        )
                    }
                </Route>
            </Switch>
        </header>
    )
}

export default Header;