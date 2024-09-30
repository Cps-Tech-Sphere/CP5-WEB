import styled from "styled-components";

export const ProdutosStyle = styled.main`

    .lista-produtos {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        list-style-type: none;
        padding: 100px 0;
        gap: 32px;
    }

    .item-produtos {
        min-width: 260px;
        max-width: 260px;
        min-height: 350px;
        max-height: 350px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        align-items: center;
        border: solid 3px #C7EA46;
        border-radius: 24px;
        padding: 24px;
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

`