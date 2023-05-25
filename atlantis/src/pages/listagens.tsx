import { Link } from "react-router-dom";
import Header from "../component/Header";

export default function Listagens() {
    return (
        <><Header />
            <main>
                <h1> </h1>

                <div className='container-table'>
                    <table>
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>10 clientes que mais consumiram em quantidade</td>
                                <td data-label="Ações">
                                    <div className='Column'>
                                        <Link to="#">Visualizar</Link>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>Todos clientes por gênero</td>
                                <td data-label="Ações">
                                    <div className='Column'>
                                        <Link to="#">Visualizar</Link>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>Listagem geral de produtos e serviços mais consumidos</td>
                                <td data-label="Ações">
                                    <div className='Column'>
                                        <Link to="#">Visualizar</Link>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>10 clientes que menos consumiram produtos ou serviços</td>
                                <td data-label="Ações">
                                    <div className='Column'>
                                        <Link to="#">Visualizar</Link>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>5 clientes que mais consumiram em valor</td>
                                <td data-label="Ações">
                                    <div className='Column'>
                                        <Link to="#">Visualizar</Link>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </main>
        </>
    );
}