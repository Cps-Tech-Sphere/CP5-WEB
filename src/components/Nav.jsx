import { Link } from "react-router-dom"
import { NavStyle } from "../style/NavStyle"
import Logo from "../assets/Imagens/Logos/Logo.png"
import { IoPersonCircleSharp } from "react-icons/io5";

const Nav =()=> {

    return (

        <NavStyle>
            <div id="logo">
                <img src={Logo} alt="logo" />
                <h1>E-Veloz</h1>
            </div>

            <div id="navegacao">
                <ul>
                    <Link to="/">Início</Link>
                    <Link to="/produtos">Produtos</Link>
                    <Link to="/sobre">Sobre</Link>
                </ul>

                <div id="perfil">
                    <Link to="/login">
                        <IoPersonCircleSharp/>
                    </Link>
                </div>
            </div>
        </NavStyle>
    )
}

export default Nav