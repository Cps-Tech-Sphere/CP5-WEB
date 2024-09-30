import { HomeStyled } from "../style/HomeStyle"
import BWGY from "../assets/Imagens/Produtos/bwgy.png"
import Andarilha from "../assets/Imagens/Produtos/Andarilha.png"
import ATH35 from "../assets/Imagens/Produtos/ATH35.png"
import MUKKU from "../assets/Imagens/Produtos/MUKKU 2024.png"
import P339ols from "../assets/Imagens/Produtos/Pony 339ols.png"

const Home =()=>{

    return (
        <HomeStyled>

            <section className="slideshow">
                <img src="" alt="slideshow1" />
            </section>

            <section className="container">

                <div className="e-veloz">
                    <h1>E-Veloz</h1>

                    <p>A E-Veloz é uma loja especializada em bicicletas elétricas, dedicada a transformar a mobilidade urbana com soluções sustentáveis e acessíveis. Oferecemos produtos inovadores que combinam design, tecnologia e eficiência, ajudando nossos clientes a se locomoverem com mais agilidade e respeitando o meio ambiente. Nosso compromisso é proporcionar uma experiência de compra única, com foco em qualidade e atendimento de excelência, sempre promovendo um futuro mais verde e conectado.</p>

                    <button>Saiba Mais</button>

                </div>

                <ul className="lista-produtos">

                    <li className="item-produtos">
                        <img src={BWGY} alt="produto 1" />
                        <h3>BWGY 180ols</h3>
                        <p>Íon de lítio de 500Wh, autonomia de até 80 km.</p>
                        <h3>R$12566</h3>
                        <button>Comprar</button>
                    </li>
                    <li className="item-produtos">
                        <img src={Andarilha} alt="produto 2" />
                        <h3>Andarilha</h3>
                        <p> Íon de lítio de 400Wh, recarga em 5 horas.</p>
                        <h3>R$7599</h3>
                        <button>Comprar</button>
                    </li>
                    <li className="item-produtos">
                        <img src={ATH35} alt="produto 3" />
                        <h3>ATH35</h3>
                        <p>Íon de lítio de 600Wh, autonomia de até 100 km.</p>
                        <h3>R$9450</h3>
                        <button>Comprar</button>
                    </li>
                    <li className="item-produtos">
                        <img src={MUKKU} alt="produto 4" />
                        <h3>MUKKU 2024</h3>
                        <p>Removível de 300Wh, recarga em 3 horas.</p>
                        <h3>R$10988</h3>
                        <button>Comprar</button>
                    </li>
                    <li className="item-produtos">
                        <img src={P339ols} alt=" produto 5" />
                        <h3>Pony 339ols</h3>
                        <p>750Wh, autonomia de até 120 km.</p>
                        <h3>R$8455</h3>
                        <button>Comprar</button>
                    </li>
                </ul>

            </section>

            <section className="avaliacoes" id="avaliacao">
                <img src="" alt="Avaliações" />
            </section>

        </HomeStyled>
    )
}

export default Home