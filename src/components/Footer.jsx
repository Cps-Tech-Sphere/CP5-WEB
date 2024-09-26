import { FooterStyle } from "../style/footerStyle"
import Logo from "../assets/Imagens/Logos/Logo-Background.png"
import { FaFacebook } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
import { FaEnvelope } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer =()=> {

    return (
        <FooterStyle>
            <div id="uteis">
                <ul>
                    <li><a href="#">Sobre Nós</a></li>
                    <li><a href="#">Termos de Serviço</a></li>
                    <li><a href="#">Política de Privacidade</a></li>
                </ul>
            </div>

            <div id="centro">
                <div id="logo">
                    <img src={Logo} alt="logo" />
                    <h1>E-Veloz</h1>
                </div>
                

                <div id="redes">
                    <a href=""><FaFacebook/></a>
                    <a href=""><FaInstagram/></a>
                    <a href="#"><FaLinkedin/></a>
                    <a href="#"><FaGithub/></a>
                    <a href=""><FaEnvelope/></a>
                </div>
            </div>

            

            <div id="nomes">
                <ul>
                    <li><a href="">Ianny Raquel</a></li>
                    <li><a href="">Jean Matheus</a></li>
                    <li><a href="">João Victor Soave</a></li>
                    <li><a href="">Maria Alice</a></li>
                    <li><a href="">Thiago Oliveira</a></li>
                </ul>
            </div>
        </FooterStyle>
    )
}

export default Footer