import styled from 'styled-components'

export const FooterStyle = styled.footer`

    width: 100%;
    min-height: 10vh;
    background: #C7EA46;
    padding: 5% 20%;
    justify-content: space-between;
    align-items: center;
    display: flex;

    #uteis ul{
        display: flex;
        flex-direction: column;
        text-align: end;
        gap: 24px;

        li {
            list-style: none;
        }

        a {
            text-decoration: none;
            color: #1E1E1E;
            font-weight: 600;
        }
    }

    #centro {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    #centro #redes{
        display: flex;
        padding-top: 24px;
        gap: 24px;
        font-size: 30px;
        color: #1E1E1E;

        a {
            text-decoration: none;
            color: #1E1E1E;
        }
    }

    #centro #logo {

        img {
            width: 70px;
            height: auto;
        }

        h1 {
            font-size: 30px;
            color: #1E1E1E;
        }
    }


`