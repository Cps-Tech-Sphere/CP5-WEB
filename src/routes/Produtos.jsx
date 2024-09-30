import React, { useEffect, useState } from 'react';
import { ProdutosStyle } from '../style/ProdutosStyle';

const Produtos = () => {
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
        <section className="vitrine-produtos">
            <h1>Os Nossos Produtos</h1>
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
