import { Dashboard, ShowChart, Settings, ThumbDownAlt, EcoTwoTone } from '@material-ui/icons'
import React from 'react'
import { Nav, Menus, Logo } from './Sidebar.style'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
    return (
        <div style={{ height:"100%", backgroundColor:"#2A386D" }}>
            <Nav>
                <Logo>
                    <EcoTwoTone /> <br />
                    Co19
                </Logo>
                <NavLink to="/" component={Menus} style={{ color: window.location.pathname === '/' ? "#fff" : "#AAC5E1" }}>
                    <Dashboard />
                    <span className="menu-label">Dashboard</span>
                </NavLink>
                <NavLink to="/stats" component={Menus} style={{ color: window.location.pathname === '/stats' ? "#fff" : "#AAC5E1" }}>
                    <ShowChart />
                    <span className="menu-label">Stats</span>
                </NavLink>
                <NavLink to="/myths" component={Menus} style={{ color: window.location.pathname === '/myths' ? "#fff" : "#AAC5E1" }}>
                    <ThumbDownAlt />
                    <span className="menu-label">Myths</span>
                </NavLink>
                <NavLink to="/settings" component={Menus} style={{ color: window.location.pathname === '/settings' ? "#fff" : "#AAC5E1" }}>
                    <Settings />
                    <span className="menu-label">Settings</span>
                </NavLink>
            </Nav>
        </div>
    )
}

export default Sidebar
