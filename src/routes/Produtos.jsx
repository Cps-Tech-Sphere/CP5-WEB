import React, { useEffect, useState } from 'react';
import { ProdutosStyle } from '../style/ProdutosStyle';
import Banner1 from "../assets/Imagens/Banners/banner-produto1.png";
import Banner2 from "../assets/Imagens/Banners/banner-produto2.png";
import Banner3 from "../assets/Imagens/Banners/banner-produto3.png";

const Produtos = () => {

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


  const [produtos, setProdutos] = useState([]);

  // Função para buscar os produtos do JSON Server
  useEffect(() => {
    fetch('http://localhost:5000/produtos')
      .then((res) => res.json())
      .then((data) => setProdutos(data))
      .catch((error) => console.error('Erro ao buscar produtos:', error));
  }, []);

  return (
    <ProdutosStyle>
        <section className="slideshow" style={{ width: '100%', height: 'auto'}}>
            <img
              src={slideshowImages[currentIndex]}
              alt={`slideshow${currentIndex + 1}`}
              style={{ width: '100%', height: 'auto' }}
              />
        </section>

        <section className="vitrine-produtos">
            <h1 className='produto-title'>Os Nossos Produtos</h1>
            <ul className="lista-produtos">
                {produtos.map((produto) => (
                <li key={produto.id} className="item-produtos">
                    <img src={produto.urlImagem} alt={`Imagem de ${produto.nome}`} />
                    <h3>{produto.nome}</h3>
                    <p>{produto.descricao}</p>
                    <h3>R$ {produto.valor}</h3>
                    <button>Comprar</button>
                </li>
                ))}
            </ul>
        </section>
    </ProdutosStyle>

  );
};

export default Produtos;
