import styled from "styled-components";

export const ProdutosStyle = styled.main`

    .slideshow{
        width: 100%;
        height: 603px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .vitrine-produtos{
        margin: 5%;
    }

    .produto-title{
        font-size: 36px;
        font-weight: 600;
        color: #C7EA46;
        text-align: center;
    }

    .lista-produtos {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        list-style-type: none;
        padding: 50px 0;
        gap: 24px;
    }

    .item-produtos {
        min-width: 210px;
        max-width: 210px;
        min-height: 350px;
        max-height: 350px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        align-items: center;
        border: solid 3px #C7EA46;
        border-radius: 24px;
        padding: 14px;
        color: #4B4B4B;
        transition: all 0.5s ease-in-out;
    }

    .item-produtos:hover{
        min-width: 220px;
        max-width: 220px;
        min-height: 360px;
        max-height: 360px;
    }

    .item-produtos img {
        width: 156px;
        height: 136px;
    }

    .item-produtos p {
        padding: 8px 0;
    }

    .item-produtos h3 {
        font-size: 18px;
        padding: 10px 0;
    }

    .item-produtos button {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px;
        background-color: #C7EA46;
        color: #1E1E1E;
        border: none;
        border-radius: 12px;
        cursor: pointer;
    }

    .item-produtos button:hover{
        color: #1E1E1E;
        background: #9CB837;
    }
`