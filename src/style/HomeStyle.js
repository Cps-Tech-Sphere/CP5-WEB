import styled from "styled-components";

export const HomeStyled = styled.main`

    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .slideshow{
        width: 100%;
        height: 603px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .container{
        padding: 125px;
    }

    .e-veloz{
        display: flex;
        flex-direction: column;
    }

    .e-veloz h1{
        font-size: 48px;
        color: #C7EA46;
        padding-bottom: 10px;
    }

    .e-veloz p{
        font-size: 18px;
        color: #1E1E1E;
        padding: 8px;
    }

    .e-veloz button{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 126px;
        height: 32px;
        background-color: #C7EA46;
        color: #1E1E1E;
        border: none;
        border-radius: 12px;
    }

    .card-title{
        padding-top: 100px ;
        font-size: 48px;
        font-weight: 600;
        color: #C7EA46;
    }

    .lista-produtos{
        display: flex;
        justify-content: center;
        align-items: center;
        list-style-type: none;
        padding-top: 50px;
        gap: 24px;
    }

    .item-produtos{
        min-width: 260px;
        max-width: 260px;
        min-height: 350px;
        max-height: 350px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        border: solid 3px #C7EA46;
        border-radius: 24px;
        padding: 24px;
        transition: all 0.5s ease-in-out;
    }

    .item-produtos:hover{
        min-width: 300px;
        max-width: 300px;
        min-height: 400px;
        max-height: 400px;
    }

    .item-produtos img{
        width: 156px;
        height: 136px;
    }

    .item-produtos p{
        padding: 8px 0;
    }

    .item-produtos h3{
        font-size: 18px;
        padding: 10px 0;
    }

    .item-produtos button{
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
        color: #C7EA46;
        background: #4B4B4B;
    }

    .avaliacoes{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 835px;
        height: 294px;
        background-color: #C7EA;
        margin: 0 0 100px;
    }

`