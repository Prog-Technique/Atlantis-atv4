import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/home';

import Pessoal from './pages/CadastraCliente/Pessoal';
import Endereco from './pages/CadastraCliente/Endereco';
import Documentos from './pages/CadastraCliente/Documentos';
import Dependentes from './pages/CadastraCliente/Dependentes';

import Acomodacao from './pages/Acomodacao';

import Clientes from './pages/Dados/cliente';

import Listagens from './pages/listagens';

import EditarCliente from './pages/Editar/clientes';

import AddProduto from './pages/AdicionarPS/clientesVprodutos';
import AddServico from './pages/AdicionarPS/clientesVservicos';

import './index.css';

export default function RoutesApp() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home />} />

                <Route path='/cadastrar_cliente' element={<Pessoal />} />
                <Route path='/cadastrar_cliente/endereco' element={<Endereco />} />
                <Route path='/cadastrar_cliente/documentos' element={<Documentos />} />
                <Route path='/cadastrar_cliente/dependentes' element={<Dependentes />} />
                
                <Route path='/cadastrar_acomodacao' element={<Acomodacao />} />

                <Route path='/clientes' element={<Clientes />} />
                <Route path='/listagens' element={<Listagens />} />

                <Route path='/editar_cliente/1' element={<EditarCliente />} />
                
                <Route path='/adicionar_produto/1' element={<AddProduto />} />
                <Route path='/adicionar_servico/1' element={<AddServico />} />
            </Routes>
        </Router>
    );
}