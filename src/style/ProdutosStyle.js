import styled from "styled-components";

export const ProdutosStyle = styled.main`

    .lista-produtos {
        display: flex;
        justify-content: center;
        align-items: center;
        list-style-type: none;
        padding-top: 100px;
        gap: 32px;
    }

    .item-produtos {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border: solid 3px #C7EA46;
        border-radius: 24px;
        padding: 24px;
        padding-right: 2px;
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
        width: 126px;
        height: 32px;
        background-color: #C7EA46;
        color: #1E1E1E;
        border: none;
        border-radius: 12px;
        cursor: pointer;
    }

`