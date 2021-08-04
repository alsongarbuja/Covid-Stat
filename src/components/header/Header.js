import 'date-fns'
import './header.css'
import React from 'react'
import { MenuItem, TextField } from '@material-ui/core'
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'

const Header = ({ country, setCountry, countries, selectedDate, handleDateChange }) => {
    return (
        <header>
            <span className="logo">Covid Stat</span><br/><br/>
            <div className="flex">
                <TextField
                    id="outlined-select-currency"
                    select
                    label="Select"
                    value={country}
                    onChange={e => setCountry(e.target.value)}
                    helperText="Please select country"
                    variant="outlined"
                    >
                    {countries.map((option) => (
                        <MenuItem key={option} value={option}>
                            {option}
                        </MenuItem>
                    ))}
                </TextField>
                {/* <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        format="MM/dd/yyyy"
                        margin="normal"
                        id="date-picker-inline"
                        label="Date picker inline"
                        value={selectedDate}
                        onChange={e => handleDateChange(e.target.value)}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                </MuiPickersUtilsProvider> */}
            </div>
        </header>
    )
}

export default Header;