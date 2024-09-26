import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Arial, Helvetica, sans-serif;
    }

    #logo {
        display: flex;
        align-items: center;
        gap: 10px;

        font-size: 14px;
        color: #C7EA46;

        img {
            width: 50px;
            height: auto;
        }
    }
`