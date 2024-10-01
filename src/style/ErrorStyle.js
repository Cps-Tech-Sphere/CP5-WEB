import styled from "styled-components";
import backgroundImage from "../assets/Imagens/Banners/image-background.jpg"

export const ErrorStyle = styled.main`

    width: 100%;
    min-height: 100vh;
    padding: 15% 10%;
    justify-content: center;
    align-items: center;
    background-image: url(${backgroundImage});
    background-size: cover;
    background-position: center;
    color: #C7EA46;

    div {
        text-align: center;
        padding: 50px;
        background-color: #000000CC;
        border-radius: 30px;
    }
`