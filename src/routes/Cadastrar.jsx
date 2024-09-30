import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CadastroProduto = () => {
  const [produto, setProduto] = useState({ nome: '', descricao: '', valor: '', urlImagem: '' });
  const navigate = useNavigate();

  // Função para atualizar os campos do produto
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduto({ ...produto, [name]: value });
  };

  // Função para salvar o produto no `json-server`
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:5000/produtos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(produto),
    })
      .then((res) => res.json())
      .then(() => navigate('/listaprodutos')) // Redireciona para a lista de produtos
      .catch((error) => console.error('Erro ao cadastrar produto:', error));
  };

  return (
    <section className="container">
      <h1>Cadastro de Produto</h1>
      <form className="produto-form" onSubmit={handleSubmit}>
        <div className="w-input">
          <input
            type="text"
            name="nome"
            value={produto.nome}
            onChange={handleChange}
            placeholder="Nome do Produto"
            required
          />
        </div>
        <div className="w-input">
          <input
            type="text"
            name="descricao"
            value={produto.descricao}
            onChange={handleChange}
            placeholder="Descrição"
            required
          />
        </div>
        <div className="w-input">
          <input
            type="number"
            name="valor"
            value={produto.valor}
            onChange={handleChange}
            placeholder="Valor do Produto"
            required
          />
        </div>
        <div className="w-input">
          <input
            type="text"
            name="urlImagem"
            value={produto.urlImagem}
            onChange={handleChange}
            placeholder="URL da Imagem"
            required
          />
        </div>
        <div className="produto-btn">
          <button type="submit" className="produto-form-btn">
            Cadastrar Produto
          </button>
        </div>
      </form>
    </section>
  );
};

export default CadastroProduto;
