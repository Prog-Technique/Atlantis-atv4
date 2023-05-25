import { Link } from "react-router-dom";
import Header from "../../component/Header";
import './styles.css'

export default function Clientes() {
    return (
        <><Header /><main>
            <h1>Clientes</h1>

            <div className='container-table'>
                <table>
                    <thead>
                        <tr>
                            <th scope="col">Nome</th>
                            <th scope="col">Gênero</th>
                            <th scope="col">Ações</th>
                            <th scope="col">Adicionar</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td data-label="Nome">Amanda</td>
                            <td data-label="Gênero">Feminino</td>
                            <td data-label="Ações">
                                <div className='Column'>
                                    <Link to="/editar_cliente/1">Visualizar</Link> <br />
                                    <Link to="/editar_cliente/1">Editar</Link> <br />
                                    <Link to="#">Excluir</Link>
                                </div>
                            </td>
                            <td data-label="Adicionar">
                                <div className='Column'>
                                    <Link to="/adicionar_produto/1">Produto</Link> <br />
                                    <Link to="/adicionar_servico/1">Serviço</Link>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td data-label="Nome">Gabriel</td>
                            <td data-label="Gênero">Masculino</td>
                            <td data-label="Ações">
                                <div className='Column'>
                                    <Link to="#">Visualizar</Link> <br />
                                    <Link to="#">Editar</Link> <br />
                                    <Link to="#">Excluir</Link>
                                </div>
                            </td>
                            <td data-label="Adicionar">
                                <div className='Column'>
                                    <Link to="#">Produto</Link> <br />
                                    <Link to="#">Serviço</Link>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </main></>
    );
}
