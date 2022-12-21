import styled from "styled-components";

export const NewsDiv = styled.div`
    box-shadow: 2px 1px 5px ${(props: { isDarkMode: boolean }) => props.isDarkMode ? "#292929" : "#e9e9e9"};
    padding: 1em 1.5em;
    border-radius: 5px;
    background-color: ${(props: { isDarkMode: boolean }) => props.isDarkMode ? "#000" : "#fff"};
`

export const NewsHolder = styled.div`
    padding: 1em 0;
`

export const NewsHolderLoading = styled.div`
    width: 100%;
    padding: 1em 0;
    background-color: #e2e2e2;
    height: 50px;
`