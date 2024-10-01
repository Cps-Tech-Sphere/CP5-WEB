import React, { useState, useEffect } from "react"; // Adicione useEffect aqui
import { Link } from "react-router-dom";
import { HomeStyled } from "../style/HomeStyle";
import BWGY from "../assets/Imagens/Produtos/bwgy.png";
import Andarilha from "../assets/Imagens/Produtos/Andarilha.png";
import ATH35 from "../assets/Imagens/Produtos/ATH35.png";
import MUKKU from "../assets/Imagens/Produtos/MUKKU 2024.png";
import P339ols from "../assets/Imagens/Produtos/Pony 339ols.png";
import { FaStar } from "react-icons/fa";
import Avatar1 from "../assets/Imagens/Avatar/avatar1.png";
import Avatar2 from "../assets/Imagens/Avatar/avatar2.png";
import Banner1 from "../assets/Imagens/Banners/banner-principal1.png";
import Banner2 from "../assets/Imagens/Banners/banner-principal2.png";
import Banner3 from "../assets/Imagens/Banners/banner-principal3.png";

const Home = () => {
    const slideshowImages = [
        Banner1,
        Banner2,
        Banner3,
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slideshowImages.length);
    };

    useEffect(() => {
        const intervalId = setInterval(nextSlide, 3000); // Muda a imagem a cada 3 segundos

        return () => clearInterval(intervalId); // Limpa o intervalo ao desmontar o componente
    }, []);

    return (
        <HomeStyled>
            <section className="slideshow" style={{ width: '100%', height: 'auto'}}>
                <img
                    src={slideshowImages[currentIndex]}
                    alt={`slideshow${currentIndex + 1}`}
                    style={{ width: '100%', height: 'auto' }}
                />
            </section>

            <section className="container">
                <div className="e-veloz">
                    <h1>E-Veloz</h1>
                    <p>A E-Veloz é uma loja especializada em bicicletas elétricas, dedicada a transformar a mobilidade urbana com soluções sustentáveis e acessíveis. Oferecemos produtos inovadores que combinam design, tecnologia e eficiência, ajudando nossos clientes a se locomoverem com mais agilidade e respeitando o meio ambiente. Nosso compromisso é proporcionar uma experiência de compra única, com foco em qualidade e atendimento de excelência, sempre promovendo um futuro mais verde e conectado.</p>
                    
                    <div className="btn-default">
                        <Link to="/sobre">Saiba Mais</Link>
                    </div>
                </div>

                <h1 className="card-title">Os Nossos Produtos</h1>

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
                        <p>Íon de lítio de 400Wh, recarga em 5 horas.</p>
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
                        <img src={P339ols} alt="produto 5" />
                        <h3>Pony 339ols</h3>
                        <p>750Wh, autonomia de até 120 km.</p>
                        <h3>R$8455</h3>
                        <button>Comprar</button>
                    </li>
                </ul>
            </section>

            <section className="avaliacoes-container">
                <h1 className="avaliacoes-title">Avaliações</h1>
                <div className="depoimentos">
                    <div className="depoimento-content">
                        <img src={Avatar1} alt="avatar" className="depoimento-avatar" />
                        <div className="avaliacao">
                            <p>
                                <span className="nome">Ítalo Fernandez</span>
                                <span>
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                </span>
                            </p>
                            <p>"Bike elétrica com ótimo desempenho e autonomia. Design moderno e suporte atencioso. Recomendo!"</p>
                        </div>
                    </div>
                        
                    <div className="depoimento-content">
                        <img src={Avatar2} alt="avatar" className="depoimento-avatar" />
                        <div className="avaliacao">
                            <p>
                                <span className="nome">Ellen Gonçalves</span>
                                <span>
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                </span>
                            </p>
                            <p>"Bicicleta confortável e potente, perfeita para o dia a dia. Entrega rápida e suporte eficiente!"</p>
                        </div>
                    </div>
                </div>
            </section>
        </HomeStyled>
    );
};

export default Home;
