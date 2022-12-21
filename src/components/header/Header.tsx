import 'date-fns'
import React, { useState, useRef }  from 'react'
import { Link } from 'react-router-dom'
import { Button, IconButton, TextField, useMediaQuery, createTheme, ThemeProvider } from '@material-ui/core'
import SearchTwoTone from '@material-ui/icons/SearchTwoTone'
import { Close } from '@material-ui/icons'
import { Logo, StyledHeader, StyledForm } from './Header.style'

const Header = ({ setSearchedCountry, isDarkMode }: { setSearchedCountry: React.Dispatch<React.SetStateAction<string>>, isDarkMode: boolean }) => {
    const [country, setCountry] = useState('')
    const isDesktop = useMediaQuery('(min-width: 570px)')
    const searchForm = useRef<HTMLDivElement>()

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        setSearchedCountry(country)
        setCountry('')
        if(!isDesktop && searchForm.current){
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
            <Link to="/" >Stats Around World</Link>
                {/* <div ref={searchForm}>

                </div> */}
                <StyledForm isDarkMode={isDarkMode} onSubmit={handleSearch} style={{ display: isDesktop ? "block" : "none" }}>
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
                                onClick={() => { if(searchForm.current) searchForm.current.style.display="none" }}
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
                            onClick={() => { if(searchForm.current) searchForm.current.style.display="block" }}
                        >
                            <SearchTwoTone />
                        </IconButton>
                    )
                }
        </StyledHeader>
    )
}

export default Header;