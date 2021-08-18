import styled from "styled-components";

export const StyledMain = styled.main`
    box-shadow: 3px 5px 20px #e2e2e2;
    padding: 3em 2em;
    border-radius: 10px;
    margin-top: 3em;

    &>h1{
        text-decoration: underline;
    }
`

export const InfoHolder = styled.div`
    justify-content: space-between;

    & div {
        margin-top: 1em;
    }
`

export const NewHolder = styled.div`
    padding: 1em 0;
`

export const OuterCase = styled.div`
    border: 1px solid #000;
    border-radius: 10px;
    padding: 1em;
    text-align: center;
    margin: 0 .5em;
    height: fit-content;

    & h3 {
        font-weight: 400;
    }
`

export const TotalHolder = styled.div`
    line-height: 3em;

    & h2 {
        font-weight: 400;
    }
`

export const NewNumber = styled.span`
    font-size: 1.75rem;
`

export const ProgressDiv = styled.div`
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
`