import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavLogin from '../components/NavLogin';
import { ListaStyle } from '../style/ListaStyle';
import { MdDelete } from "react-icons/md";
import { MdAddToPhotos } from "react-icons/md";

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
    <ListaStyle>
        <NavLogin/>
        <section className="container">
            <h1 className='title-lista'>Lista de Produtos</h1>

            <div className="produto-btn">
                <button onClick={() => navigate('/cadastrarproduto')} className="produto-form-btn">
                <MdAddToPhotos /> Adicionar
                </button>
            </div>

            <div className='table-container'>
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
                            <img src={produto.urlImagem} alt={produto.nome} className='nome' style={{ width: '100px', height: '100px' }} />
                          </td>
                            <td className='nome'>{produto.nome}</td>
                            <td className="descricao">{produto.descricao}</td>
                            <td className='nome'>R$ {produto.valor}</td>
                          <td>
                              <button className="btn-excluir" onClick={() => excluirProduto(produto.id)}>
                              <MdDelete />
                              </button>
                          </td>
                        </tr>
                    ))}
                  </tbody>
              </table>
            </div>
            
        </section>
    </ListaStyle>
    
  );
};

export default ListaProdutos;
