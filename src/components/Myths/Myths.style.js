import styled from "styled-components";

export const MythDiv = styled.div`
    padding: 1em; 
    margin: 1em 1em 0 0; 
    background-color: ${props => props.isDarkMode ? "#fff" : "#000"}; 
    border-radius: 10px; 
    max-width: 380px;
`
export const MythLoader = styled.div`
    margin: 1em 1em 0 0; 
    background-color: ${props => props.isDarkMode ? "#e3e3e3" : "#141414"}; 
    border-radius: 10px; 
    min-width: 380px;
    height: 300px;
`