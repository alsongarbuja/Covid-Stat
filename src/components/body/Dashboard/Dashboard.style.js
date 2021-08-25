import styled from "styled-components";

export const InfoHolder = styled.div`
    padding: 1em 1em;
    box-shadow: 2px 1px 15px ${props => props.isDarkMode ? "#292929" : "#e9e9e9"};
    border-radius: 10px;
    width: fit-content;
    margin: .5em 1em;
    color: #fff;

    & p {
        font-size: 1rem;
    }

    @media screen and (min-width: 600px){
        min-width: 170px;
        max-width: 400px;
        margin: 1em;

        & p {
            font-size: 2rem;
        }
    }

`

export const ReportDiv = styled.div`
    padding: 1em;
    margin: 1em;
    max-width: 900px;
    height: 430px;
    border-radius: 10px;
    background-color: ${props => props.isDarkMode ? "#000" : "#fff"};
    box-shadow: 2px 2px 10px ${props => props.isDarkMode ? "#292929" : "#e9e9e9"};
`

export const SymptomDiv = styled.div`
    text-align: center;
    box-shadow: 2px 1px 5px ${props => props.isDarkMode ? "#292929" : "#e9e9e9"}; 
    color: #fff; 
    background-color: #210BFE; 
    padding: 1em 1.5em; 
    border-radius: 10px;
    margin-top: 1em;
`