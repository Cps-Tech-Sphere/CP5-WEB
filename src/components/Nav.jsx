import { Link } from "react-router-dom"
import { NavStyle } from "../style/NavStyle"
import Logo from "../assets/Imagens/Logos/Logo.png"
import Cart from "../assets/Imagens/Icons/cart.png"

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
                    <Link to="/login">Login</Link>
                </ul>
            </div>

            <div className="carrinho">
                <img src={Cart} alt="carrinho" />
            </div>
        </NavStyle>
    )
}

export default Nav