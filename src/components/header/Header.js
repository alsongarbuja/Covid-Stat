import 'date-fns'
import React, { useState, useRef }  from 'react'
import { Route, Switch } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Button, IconButton, TextField, useMediaQuery, createTheme, ThemeProvider } from '@material-ui/core'
// eslint-disable-next-line
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers'
// eslint-disable-next-line
import DateFnsUtils from '@date-io/date-fns'
import SearchTwoTone from '@material-ui/icons/SearchTwoTone'
import { Close } from '@material-ui/icons'
import { Logo, StyledHeader, StyledForm } from './Header.style'

const Header = ({ setSearchedCountry, isDarkMode }) => {
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

    const darkTheme = createTheme({
        palette: {
            primary: {
                main: isDarkMode ? '#fff' : '#000',
            },
            type: isDarkMode ? "dark" : "light",
        }
    })

    return (
        <StyledHeader isDarkMode={isDarkMode}>
            <Link to="/" component={Logo}>Stats Around World</Link>
            <Switch>
                <Route exact path="/stats">
                    <StyledForm isDarkMode={isDarkMode} ref={searchForm} onSubmit={handleSearch} style={{ display: isDesktop ? "block" : "none" }}>
                        <ThemeProvider theme={darkTheme}>
                            <TextField 
                                label="Search Country" 
                                variant="outlined"
                                value={country}
                                onChange={e => setCountry(e.target.value)}
                            />
                        </ThemeProvider>
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
                    </StyledForm>
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
        </StyledHeader>
    )
}

export default Header;