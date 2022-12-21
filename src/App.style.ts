import styled from "styled-components";

export const Toolbar = styled.div`
    height: 90px;
    width: 100%;
`

export const Wrapper = styled.div`
    width: 100%; 
    height: 100%; 
    overflow-y: visible;

    @media screen and (min-width: 600px){
        height: 100vh;
        overflow-y: scroll;
    }
`

export const MainBodyDiv = styled.div`
    display: flex; 
    height: 100%; 
    width: 100%; 
    background-color: ${(props: { isDarkMode: boolean }) => props.isDarkMode ? "#252525" : "#F1F3FB"};
    color: ${(props: { isDarkMode: boolean }) => props.isDarkMode ? "#e2e2e2" : "#000"};
`