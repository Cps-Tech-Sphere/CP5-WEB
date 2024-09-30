import styled from "styled-components";

export const CadastroStyle = styled.main`

    width: 100%;
    min-height: 100vh;

    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        .produto-form .title-form{
            font-size: 36px;
            font-weight: 500;
            color: #C7EA46;
        }

        .produto-form .w-input{
            display: flex;
            flex-direction: column;
            padding: 20px 0;

            .subtitle-form {
                font-size: 18px;
                font-weight: 600;
                color: 1E1E1E;
                padding-bottom: 5px;
            }

            input {
                width: 100%;
                height: 35px;
                background: #C7EA46;
                border: none;
                border-radius: 15px;
                padding: 10px;
                color: #1E1E1E;
            }
        }

        .produto-btn {
            padding-top: 12px;
            text-align: center;
        }

        button {
            background-color: #C7EA46;
            padding: 10px 20px;
            font-size: 18px;
            font-weight: 600;
            color: #1E1E1E;
            border: none;
            border-radius: 20px;
            cursor: pointer;
        }
    }
`