import { Dashboard, ShowChart, Settings, ThumbDownAlt, EcoTwoTone } from '@material-ui/icons'
import React from 'react'
import { Nav, Menus, Logo } from './Sidebar.style'
import { NavLink, useLocation } from 'react-router-dom'

const Sidebar = ({ isDarkMode }) => {
    const { pathname } = useLocation()

    return (
        <Nav isDarkMode={isDarkMode}>
            <Logo>
                <EcoTwoTone /> <br />
                Co19
            </Logo>
            <NavLink to="/" style={{ color: pathname === '/' ? "#fff" : "#AAC5E1" }}>
                <Menus>
                    <Dashboard />
                    <span className="menu-label">Dashboard</span>
                </Menus>
            </NavLink>
            <NavLink to="/stats" style={{ color: pathname === '/stats' ? "#fff" : "#AAC5E1" }}>
                <Menus>
                    <ShowChart />
                    <span className="menu-label">Stats</span>
                </Menus>
            </NavLink>
            <NavLink to="/myths" style={{ color: pathname === '/myths' ? "#fff" : "#AAC5E1" }}>
                <Menus>
                    <ThumbDownAlt />
                    <span className="menu-label">Myths</span>
                </Menus>
            </NavLink>
            <NavLink to="/settings" style={{ color: pathname === '/settings' ? "#fff" : "#AAC5E1" }}>
                <Menus>
                    <Settings />
                    <span className="menu-label">Settings</span>
                </Menus>
            </NavLink>
        </Nav>
    )
}

export default Sidebar
