import styled from "styled-components";

export const Toolbar = styled.div`
    height: 90px;
    width: 100%;
`

export const Wrapper = styled.div`
    width: 100%; 
    height: 100vh; 
    overflow-y: visible;

    @media screen and (min-width: 600px){
        overflow-y: scroll;
    }
`