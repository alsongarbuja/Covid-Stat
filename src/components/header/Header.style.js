import styled from "styled-components";

export const Logo = styled.span`
    font-size: 2rem;
    text-decoration: none;
    color: rgb(121, 67, 184);
`

export const StyledHeader = styled.header`
    width: 100%;
    padding: 2em 0;
    text-align: center;
    position: sticky;
    top: 0;
    background-color: #fff;
    z-index: 2;
`

export const StyledForm = styled.form`
    position: absolute;
    z-index: 2;
    top: 30px;
    right: 30px;
    background-color: #fff;
    transition: all 2s ease-in-out;

    @media screen and (max-width: 600px) {
        width: 100%;
        right: 0;
        transition: all 2s ease-in-out;
    }
`