import styled from "styled-components";

export const NavLoginStyle = styled.nav`

    width: 100%;
    padding: 1% 5%;
    margin-bottom: 24px;
    background: #B4BD91;

    display: flex;
    justify-content: space-between;
    align-items: center;

    #login_nav {
        display: flex;
        align-items: center;
        gap: 24px;

        a {
            justify-content: center;
            font-size: 16px;
            text-decoration: none;
            color: #4B4B4B;
            font-weight: 600;
            transition: all 0.3s ease-in-out;
        }
    }

    #login_nav a:hover{
        color: #fff;
    }

    #logout {
        display: flex;
        align-items: center;
        gap: 24px;
        
        span{
            font-size: 16px;
            font-weight: 600;
            color: #fff;
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
            transition: all 0.3s ease-in-out;
            cursor: pointer;
        }
        
    }

    #logout button:hover{
        background: #9CB837;
    }
`