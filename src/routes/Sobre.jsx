import { SobreStyle } from "../style/SobreStyle";
import imagemtema from "../assets/Imagens/img/imagemtema.png";
import Ianny from "../assets/Imagens/Equipe/Ianny.jpeg"
import Jean from "../assets/Imagens/Equipe/Jean.jpeg"
import Joao from "../assets/Imagens/Equipe/Joao.jpeg"
import Malice from "../assets/Imagens/Equipe/Malice.jpeg"
import Thiago from "../assets/Imagens/Equipe/Thiago.jpeg"

const Sobre = () => {

    return (
        <SobreStyle>
            <section className="imagem-tema">
                <img src={imagemtema} alt="imagem tema" />
            </section>

            <section className="sobrenos">
                <h1>Sobre Nós</h1>
                <p>
                Na E-Veloz, nossa missão é redefinir a mobilidade urbana por meio de
                soluções sustentáveis e tecnológicas. Acreditamos que o futuro do
                transporte está nas bicicletas elétricas, que combinam eficiência,
                conveniência e respeito ao meio ambiente. Queremos oferecer ao nosso
                público uma experiência única, com produtos de alta qualidade que unem
                inovação e design.
                </p>
            </section>

            <section className="container-integrantes">
                <ul className="lista-integrantes">
                    <li className="item-integrantes">
                        <img src={Ianny} alt="Foto Integrante 1" />
                        <div>
                        <h1>Ianny Raquel</h1>
                        <p>
                            Com uma sólida experiência em design de interfaces, Ianny é
                            apaixonada por criar experiências que conectam tecnologia e
                            usabilidade. Na E-Veloz, ela traz seu olhar afiado para garantir
                            que a jornada do cliente seja simples e agradável.
                        </p>
                        </div>
                    </li>

                    <li className="item-integrantes">
                        <img src={Jean} alt="Foto Integrante 2" />
                        <div>
                        <h1>Jean Matheus</h1>
                        <p>
                            Jean é movido por inovação e eficiência. Sua habilidade em
                            desenvolvimento de interfaces ajuda a E-Veloz a sempre estar na
                            vanguarda das soluções digitais para o e-commerce.
                        </p>
                        </div>
                    </li>

                    <li className="item-integrantes">
                        <img src={Joao} alt="Foto Integrante 3" />
                        <div>
                        <h1>João Victor Soave</h1>
                        <p>
                            Com uma forte liderança no gerenciamento de projetos, João traz
                            sua expertise em processos ágeis e otimização de recursos,
                            garantindo que as operações da E-Veloz sejam fluidas e bem
                            organizadas.
                        </p>
                        </div>
                    </li>

                    <li className="item-integrantes">
                        <img src={Malice} alt="Foto Integrante 4" />
                        <div>
                        <h1>Maria Alice</h1>
                        <p>
                            Líder no desenvolvimento de Front-End, Maria combina sua paixão
                            por inovação com um profundo conhecimento de tecnologia,
                            assegurando que o design e a funcionalidade da loja virtual
                            estejam sempre alinhados com as melhores práticas do mercado.
                        </p>
                        </div>
                    </li>

                    <li className="item-integrantes">
                        <img src={Thiago} alt="Foto Integrante 5" />
                        <div>
                        <h1>Thiago Oliveira</h1>
                        <p>
                            Como Product Owner, Thiago é o responsável por garantir que a
                            E-Veloz esteja sempre em sintonia com as necessidades dos
                            consumidores, liderando o time com visão estratégica e foco nos
                            resultados.
                        </p>
                        </div>
                    </li>
                </ul>
            </section>
        </SobreStyle>
    );
};

export default Sobre;
