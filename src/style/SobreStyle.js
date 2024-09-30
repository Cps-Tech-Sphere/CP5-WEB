import styled from "styled-components";

export const SobreStyle = styled.main`

    .imagem-tema img {
        width: 100%;
    }

    .sobrenos {
        padding: 3% 5%;
    }

    .sobrenos h1 {
        font-size: 2.5rem;
        color: #C7EA46;
    }

    .sobrenos p {
        font-size: 1.2rem;
        color: #1E1E1E;
        padding: 10px 0 50px 0;
    }

    .container-integrantes {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding-bottom: 100px;
    }

    .lista-integrantes {
        list-style: none;
        padding: 0;
    }

    .item-integrantes {
        display: flex;
        align-items: center;
        justify-content: center; 
        margin-bottom: 30px;
    }

    .item-integrantes img {
        width: 150px;
        height: 150px;
        object-fit: cover;
        margin-right: 20px;
        border-radius: 50%;
    }

    .item-integrantes h1 {
        font-size: 1.8rem;
        color: #C7EA46;
        margin: 0;
        padding-bottom: 10px;
    }

    .item-integrantes p {
        font-size: 1.2rem;
        color: #1E1E1E;
    }

    .item-integrantes div {
        max-width: 600px;
    }
`;
