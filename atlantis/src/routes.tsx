import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Sozinhos/home';

import Pessoal from './pages/CadastraCliente/Pessoal';
import Endereco from './pages/CadastraCliente/Endereco';
import Documentos from './pages/CadastraCliente/Documentos';
import Dependentes from './pages/CadastraCliente/Dependentes';

import Acomodacao from './pages/Sozinhos/cadastraAcomodacao';
import VinculaHospedeQuarto from './pages/Sozinhos/vincula';

import EditarCliente from './pages/Sozinhos/editarCli';

import Acomodacoes from './pages/Listagens/acomodacoes';
import Titular from './pages/Listagens/listaTitular';
import Dependente from './pages/Listagens/listaDependentes';

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
                <Route path='/vincular' element={<VinculaHospedeQuarto />} />

                <Route path='/titular' element={<Titular />} />
                <Route path='/dependente' element={<Dependente />} />
                <Route path='/editar_cliente/1' element={<EditarCliente />} />
                
                <Route path='/acomodacoes' element={<Acomodacoes />} />

            </Routes>
        </Router>
    );
}