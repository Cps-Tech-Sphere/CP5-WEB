import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const usuario = useRef();
  const senha = useRef();
  const [usuarios, setUsuarios] = useState([]);
  const navigate = useNavigate();

  // Função para validar as credenciais de login
  function validar() {
    for (let i = 0; i < usuarios.length; i++) {
      if (
        usuarios[i].usuario === usuario.current.value &&
        usuarios[i].senha === senha.current.value
      )
        return true;
    }
  }

  // Função para submissão do formulário de login
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validar()) {
      let token =
        Math.random().toString(16).substring(2) + Math.random().toString(16).substring(2);
      sessionStorage.setItem('usuario', usuario.current.value);
      sessionStorage.setItem('senha', token);
      navigate('/cadastroproduto'); // Redireciona para a página de cadastro de produto
    } else {
      alert('Usuário/Senha inválidos');
    }
  };

  // Faz uma requisição à API para buscar os usuários
  useEffect(() => {
    fetch('http://localhost:5000/usuarios')
      .then((res) => res.json())
      .then((data) => setUsuarios(data))
      .catch((error) => console.error('Erro ao buscar usuários:', error));
  }, []);

  return (
    <section className="container">
      <div className="container-login">
        <div className="login">
          <form className="login-form" onSubmit={handleSubmit}>
            <span className="titulo-login">Faça seu Login</span>
            <div className="w-input">
              <input
                type="text"
                className="input-form"
                id="usuario"
                ref={usuario}
                placeholder="Usuário"
              />
            </div>
            <div className="w-input">
              <input
                type="password"
                className="input-form"
                id="senha"
                ref={senha}
                placeholder="Senha"
              />
            </div>
            <div className="login-btn">
              <button type="submit" className="login-form-btn">
                Entrar
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
