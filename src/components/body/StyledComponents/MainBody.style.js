import styled from "styled-components";

export const CountryDiv = styled.div`
    width: fit-content;
    height: fit-content;
    text-align: center;
    padding: 1em 2em;
    margin: 1em;
    box-shadow: 2px 4px 20px #e2e2e2;
    border-radius: 10px;

    & div {
        margin: 1em 0;
    }
`

export const CountryName = styled.span`
    font-weight: 600;
    font-size: .75rem;
    text-decoration: underline;    
`

export const StatDiv = styled.div`
    & div {
        margin: 0 .75em;
    }
`