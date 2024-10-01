import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { NavLoginStyle } from "../style/NavLoginStyle";
import { IoPowerSharp } from "react-icons/io5";

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
    <NavLoginStyle>
      <div id="login_nav">
        <Link to="/cadastrarproduto">Cadastrar Produtos</Link>
        <Link to="/listaprodutos">Lista de Produtos</Link>
      </div>

      <div id="logout">
        <span>{userName ? `Usuário logado: ${userName}` : ''}</span>

        <div className="btn">
          <button  onClick={handleLogout}><IoPowerSharp /></button>
        </div>
      </div>
    </NavLoginStyle>
  );
};

export default NavLogin;
