import styled from "styled-components";

export const Logo = styled.span`
    font-size: 1.5rem;
    text-decoration: none;
    color: rgb(121, 67, 184);
`

export const StyledHeader = styled.header`
    width: 100%;
    padding: 2em 0;
    text-align: center;
    position: fixed;
    top: 0;
    background-color: ${props => props.isDarkMode ? "#000" : "#fff"};
    box-shadow: 2px 3px 10px ${props => props.isDarkMode ? "#000" : "#e2e2e2"};
    z-index: 2;
    display: flex;
    justify-content: space-around;
    align-items: center;
`

export const StyledForm = styled.form`
    @media screen and (max-width: 600px) {
        position: absolute;
        z-index: 2;
        top: 30px;
        right: 30px;
        background-color: ${props => props.isDarkMode ? "#000" : "#fff"};
        transition: all 2s ease-in-out;
        width: 100%;
        right: 0;
        transition: all 2s ease-in-out;
    }
`