import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';
import Header from "../../component/Header";

export default function AddProduto() {
    return (
        <><Header /><main>

            <Button className="button" variant="outline-dark" href='/clientes'>Voltar</Button>

            <h1>Produtos adicionados ao Cliente</h1>

            <div className='container-table'>
                <table>
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td data-label="#">Condicionador Match</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h1>Produtos</h1>

            <div className='container-table'>
                <table>
                    <thead>
                        <tr>
                            <th scope="col">Produto</th>
                            <th scope="col">Preço</th>
                            <th scope="col">Ação</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td data-label="Produto">Shampoo Match</td>
                            <td data-label="Preço">40.00</td>
                            <td data-label="Ação">
                                <div className='Column'>
                                    <Link to="#">Adicionar</Link>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td data-label="Produto">Condicionador Match</td>
                            <td data-label="Preço">35.00</td>
                            <td data-label="Ação">
                                <div className='Column'>
                                    <Link to="#">Adicionar</Link>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </main></>
    );
}
