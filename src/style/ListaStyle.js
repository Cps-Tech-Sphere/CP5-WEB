import styled from "styled-components";

export const ListaStyle = styled.main`

    width: 100%;
    min-height: 100vh;

    .title-lista {
        font-size: 36px;
        font-weight: 600;
        color: #C7EA46;
        text-align: center;
        padding-bottom: 20px;
    }

    .produto-btn {
        padding: 20px 20px 0;
        text-align: center;
    }

    .produto-btn button {
        background-color: #C7EA46;
        padding: 10px 20px;
        font-size: 16px;
        font-weight: 600;
        color: #4B4B4B;
        border: none;
        border-radius: 20px;
        transition: all 0.3s ease-in-out;
        cursor: pointer;
    }

    button:hover{
        background: #9CB837;
    }

    .table-container {
        padding-bottom: 100px;
        display: flex;
        justify-content: center;
        align-content: center;
    }

    .tabela-produtos {
        border-collapse: collapse;
        margin-top: 20px;
    }

    .tabela-produtos thead {
        background-color: #C7EA46;
        color: #4B4B4B;
    }

    .tabela-produtos th, .tabela-produtos td {
        padding: 8px;
        border: 1px solid #C7EA46;
        text-align: center;
    }

    .tabela-produtos td.descricao{
        min-width: 500px;
        max-width: 500px;
        word-wrap: break-word;
        overflow-wrap: break-word;
    }

    .tabela-produtos td.nome {
        min-width: 150px;
        max-width: 150px;
        word-wrap: break-word;
        overflow-wrap: break-word;
    }

    .tabela-produtos tr:nth-child(even) {
        background-color: #f2f2f2;
    }

    .tabela-produtos tr:hover {
        background-color: #e0e0e0;
    }

    .tabela-produtos img {
        width: 100px;
        height: auto; 
        border-radius: 8px; 
    }

    .btn-excluir {
        background-color: #C7EA46;
        color: #4B4B4B;
        font-size: 30px;
        border: none;
        border-radius: 8px;
        padding: 8px 12px 4px;
        cursor: pointer; 
        transition: background-color 0.2s;
    }

    .btn-excluir:hover {
        background-color: #a4c93d;
    }
`