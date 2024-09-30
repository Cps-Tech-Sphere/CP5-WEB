import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const NavLogin = () => {
  const [userName, setUserName] = useState('');
  const navigate = useNavigate();

  // Pega o nome do usuário logado do sessionStorage
  useEffect(() => {
    const user = sessionStorage.getItem('usuario');
    if (user) {
      setUserName(user);
    }
  }, []);

  // Função para deslogar o usuário
  const handleLogout = () => {
    sessionStorage.removeItem('usuario');
    sessionStorage.removeItem('senha');
    navigate('/');
  };

  return (
    <>
      <div id="login_nav">
        <Link to="/cadastrarproduto">Cadastrar Produtos</Link>
        <Link to="/listaprodutos">Lista de Produtos</Link>
      </div>

      <span>{userName ? `Bem-vindo, ${userName}` : ''}</span>

      <div id="logout">
        <button className="btn-default" onClick={handleLogout}>Sair</button>
      </div>
    </>
  );
};

export default NavLogin;
