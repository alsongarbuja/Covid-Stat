import 'date-fns'
import React, { useState, useRef }  from 'react'
import { Link } from 'react-router-dom'
import { Button, IconButton, TextField, useMediaQuery, createTheme, ThemeProvider } from '@material-ui/core'
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
                                size="medium"
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
                            size="medium"
                            onClick={() => searchForm.current.style.display="block"}
                        >
                            <SearchTwoTone />
                        </IconButton>
                    )
                }
        </StyledHeader>
    )
}

export default Header;