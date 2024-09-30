import styled from "styled-components";

export const NavLoginStyle = styled.nav`

    width: 100%;
    min-height: 5vh;
    margin-bottom: 30px;
    background: #B4BD91;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    #login_nav {
        padding-bottom: 18px;

        a {
            font-size: 18px;
            text-decoration: none;
            color: #4B4B4B;
            font-weight: 600;
            padding: 24px;
        }
    }

    #logout {
        padding: 18px 0;
        
        span{
            font-size: 26px;
            font-weight: 600;
            color: #fff;
            padding: 24px;
        }

        span.userName{
            color: #4B4B4B;
        }

        button {
            padding: 10px 10px 5px;
            background-color: #C7EA46;
            font-size: 20px;
            font-weight: 600;
            color: #1E1E1E;
            border: none;
            border-radius: 20px;
            cursor: pointer;
        }
        
    }
`