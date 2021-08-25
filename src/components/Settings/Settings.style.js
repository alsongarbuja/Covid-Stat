import styled from "styled-components";

export const SettingTitle = styled.h3`
    padding: 1em 0; 
    text-decoration: underline;
`

export const SettingSubHeader = styled.span`
    color: ${props => props.isDarkMode ? "rgba(250,250,250,.5)" : "rgba(0,0,0,.5)"};
`

export const SettingWrapper = styled.div`
    margin-top: 1em;
    padding: 1em 0;
`

export const SettingHolder = styled.div`
    border-bottom: 1px solid #000;
    padding: 2em 0 1em 0;
    align-items: center; 
    display: flex; 
    justify-content: space-between; 
    width: 100%;
`