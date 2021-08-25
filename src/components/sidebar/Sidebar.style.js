import styled from "styled-components";

export const Nav = styled.nav`
    display: flex;
    justify-content: space-around;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: ${props => props.isDarkMode ? "#1b2444" : "#2A386D"};
    color: #AAC5E1;
    z-index: 2;

    @media screen and (min-width: 600px){
        justify-content: flex-start;
        flex-direction: column;
        width: fit-content;
        height: 100vh;
        position: static;
    }
`

export const Menus = styled.a`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1em;
    cursor: pointer;
    text-decoration: none;

    @media screen and (min-width: 600px){
        padding: 2em 1em;
    }
`

export const Logo = styled.span`
    display: none;
    text-align: center;
    padding: 2em 1em 3em 1em;
    color: #B8B2D3;

    @media screen and (min-width: 600px){
        display: block;
    }
`