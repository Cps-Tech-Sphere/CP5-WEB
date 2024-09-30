import { HomeStyled } from "../style/HomeStyle"

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
                        <img src="" alt="produto 1" />
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        <h3>R$XX,xx</h3>
                        <button>Comprar</button>
                    </li>
                    <li className="item-produtos">
                        <img src="" alt="produto 2" />
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        <h3>R$XX,xx</h3>
                        <button>Comprar</button>
                    </li>
                    <li className="item-produtos">
                        <img src="" alt="produto 3" />
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        <h3>R$XX,xx</h3>
                        <button>Comprar</button>
                    </li>
                    <li className="item-produtos">
                        <img src="" alt="produto 4" />
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        <h3>R$XX,xx</h3>
                        <button>Comprar</button>
                    </li>
                    <li className="item-produtos">
                        <img src="" alt=" produto 5" />
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        <h3>R$XX,xx</h3>
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