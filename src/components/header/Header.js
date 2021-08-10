import 'date-fns'
import './header.css'
import React from 'react'
import { MenuItem, TextField } from '@material-ui/core'
// eslint-disable-next-line
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers'
// eslint-disable-next-line
import DateFnsUtils from '@date-io/date-fns'

const Header = ({ selectedDate, handleDateChange }) => {
    return (
        <header>
            <span className="logo">Covid Stat</span><br/><br/>
            <div className="flex">
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