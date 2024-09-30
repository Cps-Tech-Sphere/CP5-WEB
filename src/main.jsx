import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GlobalStyle } from './style/global-styled.js'
import App from './App.jsx'
import Home from './routes/Home.jsx'
import Produtos from './routes/Produtos.jsx'
import Sobre from './routes/Sobre.jsx'
import Cadastrar from './routes/Cadastrar.jsx'
import ListaProdutos from './routes/ListaProdutos.jsx'
import Login from './routes/Login.jsx'
import Error from './routes/Error.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path:"/", element:<App/>,
    errorElement:<Error/>,

    children:[
      {path:"/", element:<Home/>},
      {path:"/sobre", element:<Sobre/>},
      {path:"/produtos", element:<Produtos/>},
      {path:"/login", element:<Login/>},
      {path:"/cadastrarproduto", element:<Cadastrar/>},
      {path: "/listaprodutos", element: <ListaProdutos/>}
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
    <GlobalStyle/>
  </StrictMode>,
)
