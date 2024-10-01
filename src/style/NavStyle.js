import styled from "styled-components";

export const NavStyle = styled.header `

    width: 100%;
    min-height: 10vh;
    background: #4B4B4B;
    padding: 1% 5%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    #navegacao {
        align-items: center;
        display: flex;
        gap: 100px;
    }

    #navegacao ul{
        align-items: center;
        display: flex;
        gap: 24px;

        li {
            list-style: none;
        }

        a {
            text-decoration: none;
            color: #fff;
            font-weight: 500;
            font-size: 20px;
        }
    }

    #perfil {
        align-items: center;
        border-radius: 10px;

        a {
            text-decoration: none;
            color: #fff;
            font-size: 50px;
        }
    }
`