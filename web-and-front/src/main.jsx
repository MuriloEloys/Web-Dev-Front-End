import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './routes/Home/Home.jsx'
import Erro404 from './routes/Erro404.jsx'
import Login from "./routes/Login/Login.jsx"
import Cadastro from './routes/Cadastro/Cadastro.jsx'
import Ideia from './routes/Ideia/Ideia.jsx'


const router = createBrowserRouter([
  {path:"/",element: <App/>, errorElement:<Erro404/>,
  children:[
    {path:"/", element:<Home/>},
    {path:"/login",element:<Login/>},
    {path:"/cadastro",element:<Cadastro/>},
    {path:"/ideia",element:<Ideia/>},
  ]
 }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
