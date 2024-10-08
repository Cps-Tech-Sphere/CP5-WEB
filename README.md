# E-Veloz 🚴‍♂️⚡

Bem-vindo ao repositório do projeto **E-Veloz**! Esse site foi desenvolvido para o **Checkpoint 5** da disciplina de **Web Development** do pessoal do 1º ano (2024) de Engenharia de Software da FIAP.

## 📋 Índice

1. [Equipe](#equipe)
2. [Sobre o Projeto](#sobre-o-projeto)
3. [Tecnologias Utilizadas](#tecnologias-utilizadas)
4. [Funcionalidades](#funcionalidades)
5. [Instalação e Configuração](#instalação-e-configuração)
6. [Estrutura do Arquivo](#estrutura-do-arquivo)
7. [Links](#links)

## 👥 Equipe

**Turma:** 1ESPG  
**Equipe:** TechSphere  

**Componentes da Equipe:**
- Ianny Raquel Ferreira de Souza - 559096
- Jean Matheus Mohamed de Oliveira - 555519
- João Victor Soave - 557595
- Maria Alice Freitas Araújo - 557516
- Thiago de Barros Oliveira - 555485

## 📖 Sobre o Projeto

O **E-Veloz** é um site desenvolvido para a comercialização de bicicletas elétricas. O projeto foi criado com o intuito de proporcionar uma experiência de cadastro de produtos.

Este repositório contém o código-fonte do site, que foi desenvolvido como parte da avaliação para a disciplina de **Web Development**, focando em práticas de front-end, back-end e integração de bibliotecas.

## 💻 Tecnologias Utilizadas

O projeto utiliza as seguintes tecnologias e ferramentas:

- **Front-End:** React, JavaScript, HTML5, CSS3.
- **Back-End:** Node.js.
- **Bibliotecas:** react-router-dom, styled-components, react-icons, json-server.
- **Autenticação:** JWT (JSON Web Token).

## 🌟 Funcionalidades

1. **Login de Usuário:**
   - Sistema de login utilizando os usuários cadastrados no arquivo `dados.json`, com autenticação baseada em JWT para segurança.

2. **Cadastro de Produtos:**
   - O usuário autenticado pode cadastrar novos produtos fornecendo nome, descrição, valor e imagem do produto. Também é possível excluir produtos existentes, mantendo o catálogo atualizado.

3. **Tabela com Lista de Produtos:**
   - Página com tabela que lista todos os produtos cadastrados, permitindo visualização rápida das informações de cada item.

4. **Vitrine de Produtos:**
   - Interface amigável para os clientes explorarem os produtos. A vitrine exibe informações detalhadas dos itens.

## 🔧 Instalação e Configuração

### Pré-requisitos

- **Node.js**: Certifique-se de que você possui o Node.js instalado na versão mais recente.

### Como instalar

1. **Download Zip:**
   - Baixe o arquivo ZIP do projeto através do GitHub.

2. **Abra a pasta no VSCode:**
   - Após descompactar, abra a pasta no VSCode.
   - **Obs:** Certifique-se de que há apenas uma pasta com o nome `cp5-web-main`.

3. **No terminal:**
   - Execute os seguintes comandos:
     ```bash
     npm install
     npm run backend
     ```
   - Em outro terminal, execute:
     ```bash
     npm run dev
     ```

4. **Abra o link de hospedagem na web:**
   - Acesse o link disponibilizado no terminal (`http://localhost:5000`) para visualizar o projeto.

5. **Navegue pelas páginas e cadastre produtos:**
   - Explore as funcionalidades do site e adicione novos produtos conforme necessário.

## 📂 Estrutura do Arquivo

A estrutura dos arquivos do projeto está organizada conforme abaixo:

```
e-veloz/
│
├── public/               # Arquivos públicos (index.html, favicon, etc.)
├── src/                  # Código-fonte do projeto
│   ├── assets/           # Imagens
│   ├── components/       # Componentes reutilizáveis (Nav, Footer e NaLogin)
│   ├── routes/           # Páginas principais do site (Home, Login, Produtos, Cadastrar, etc.)
│   ├── styles/           # Estilos globais e componentes estilizados
│   ├── App.js            # Configuração principal da aplicação
│   ├── index.js          # Ponto de entrada do React
├── dados.json            # Arquivo de dados usado pelo json-server
└── package.json          # Configurações e dependências do projeto
```
## Links
[Repositório GitHUb](https://github.com/Cps-Tech-Sphere/CP5-WEB)
[Linkedin Video](https://www.linkedin.com/posts/jean-matheus-mohamed-de-oliveira-263a40295_reactjs-desenvolvimentoweb-engenhariadesoftware-activity-7247390366289547264-JWDd?utm_source=share&utm_medium=member_android)
