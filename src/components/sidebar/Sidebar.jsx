import { Dashboard, ShowChart, Settings, ThumbDownAlt, EcoTwoTone } from '@material-ui/icons'
import React from 'react'
import { Nav, Menus, Logo } from './Sidebar.style'

const Sidebar = () => {
    return (
        <div style={{ height:"100%", backgroundColor:"#2A386D" }}>
            <Nav>
                <Logo>
                    <EcoTwoTone /> <br />
                    Co19
                </Logo>
                <Menus style={{ color:"#fff" }}>
                    <Dashboard />
                    <span className="menu-label">Dashboard</span>
                </Menus>
                <Menus>
                    <ShowChart />
                    <span className="menu-label">Stats</span>
                </Menus>
                <Menus>
                    <ThumbDownAlt />
                    <span className="menu-label">Myths</span>
                </Menus>
                <Menus>
                    <Settings />
                    <span className="menu-label">Settings</span>
                </Menus>
            </Nav>
        </div>
    )
}

export default Sidebar
