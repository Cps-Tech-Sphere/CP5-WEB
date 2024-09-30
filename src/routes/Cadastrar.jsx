import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavLogin from '../components/NavLogin.jsx';
import { CadastroStyle } from '../style/CadastroStyle.js';

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
    <CadastroStyle>
        <NavLogin/>
        <section className="container">
            <form className="produto-form" onSubmit={handleSubmit}>
              <h1 className='title-form'>Cadastro de Produto</h1>
                
                <div className="w-input">
                  <span className='subtitle-form'>Nome do Produto:</span>
                  <input
                      type="text"
                      name="nome"
                      value={produto.nome}
                      onChange={handleChange}
                      required
                  />
                </div>

                <div className="w-input">
                  <span className='subtitle-form'>Descrição:</span>
                  <input
                      type="ob"
                      name="descricao"
                      value={produto.descricao}
                      onChange={handleChange}
                      required
                  />
                </div>

                <div className="w-input">
                  <span className='subtitle-form'>Valor:</span>
                  <input
                      type="number"
                      name="valor"
                      value={produto.valor}
                      onChange={handleChange}
                      required
                  />
                </div>

                <div className="w-input">
                  <span className='subtitle-form'>Image URL:</span>
                  <input
                      type="text"
                      name="urlImagem"
                      value={produto.urlImagem}
                      onChange={handleChange}
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
    </CadastroStyle>
    
  );
};

export default CadastroProduto;
