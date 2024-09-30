import styled from "styled-components";
import backgroundImage from "../assets/Imagens/img/image-background.jpg"

export const LoginStyle = styled.main`

    width: 100%;
    min-height: 100vh;
    padding: 3%;
    background-image: url(${backgroundImage});
    background-size: cover;
    background-position: center;
    
    .container {
        display: flex;
        justify-content: center;
        align-items: center;

        .login {
            padding: 80px;
            background-color: #1E1E1ECC;
            border-radius: 30px;
        }
        

        .login .titulo-login {
            font-size: 36px;
            font-weight: 500;
            color: #C7EA46;
        }

        .login .w-input {
            display: flex;
            flex-direction: column;
            padding: 24px 0px;

            .subtitle-login {
                font-size: 18px;
                font-weight: 600;
                padding-bottom: 5px;
                color: #fff;
            }

            .input-form {
                width: 100%;
                height: 35px;
                background: #C7EA46;
                border: none;
                border-radius: 15px;
                padding: 10px;
                color: #1E1E1E;
            }
        }

        .login-btn {
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