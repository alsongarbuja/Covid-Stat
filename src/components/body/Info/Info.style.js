import styled from "styled-components";

export const InfoMainWrapper = styled.div`
    margin: 1em 0; 
    display: flex; 
    align-items: center; 
    justify-content: space-evenly; 
    flex-wrap: wrap;
`

export const InfoSingleHolder = styled.div`
    padding: 1em .5em; 
    max-width: 300px;
`

export const LinkBack = styled.a`
    padding: .5em 1em;
    color: #e9e9e9;
    background-color: #000;
    border-radius: 20px;
    box-shadow: 2px 3px 10px #212121;
    text-decoration: none;
    position: fixed;
    top: 70px;
    right: 30px;
    display: flex;
    align-items: center;
`