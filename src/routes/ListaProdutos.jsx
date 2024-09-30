import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ListaProdutos = () => {
  const [produtos, setProdutos] = useState([]);
  const navigate = useNavigate();

  // Função para buscar a lista de produtos do arquivo JSON
  useEffect(() => {
    fetch('http://localhost:5000/produtos')
      .then((res) => res.json())
      .then((data) => setProdutos(data))
      .catch((error) => console.error('Erro ao buscar produtos:', error));
  }, []);

  // Função para excluir um produto pelo ID
  const excluirProduto = (id) => {
    fetch(`http://localhost:5000/produtos/${id}`, { method: 'DELETE' })
      .then(() => {
        setProdutos(produtos.filter((produto) => produto.id !== id));
      })
      .catch((error) => console.error('Erro ao excluir produto:', error));
  };

  return (
    <section className="container">
      <h1>Lista de Produtos</h1>
      <table className="tabela-produtos">
        <thead>
          <tr>
            <th>Imagem</th>
            <th>Nome</th>
            <th>Descrição</th>
            <th>Valor</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {produtos.map((produto) => (
            <tr key={produto.id}>
              <td>
                <img src={produto.urlImagem} alt={produto.nome} style={{ width: '100px', height: '100px' }} />
              </td>
              <td>{produto.nome}</td>
              <td>{produto.descricao}</td>
              <td>R$ {produto.valor}</td>
              <td>
                <button className="btn-excluir" onClick={() => excluirProduto(produto.id)}>
                  Excluir
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="produto-btn">
        <button onClick={() => navigate('/cadastrarproduto')} className="produto-form-btn">
          Cadastrar Novo Produto
        </button>
      </div>
    </section>
  );
};

export default ListaProdutos;
