import Header from '../../component/Header'
import { MdLocationOff } from "react-icons/md";

export default function Desalocar() {

    function handleSubmit() {

    }

    return (
        <><Header />
            <main>
                <h1>Desalocar cliente</h1>

                <div className='container-table'>
                    <table>
                        <thead>
                            <tr>
                                <th className="largura-dobrada">Nome</th>
                                <th>CPF</th>
                                <th>Desalocar</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td data-label="Nome" className="largura-dobrada">Amanda Caires Pereira</td>
                                <td data-label="CPF">45865117885</td>
                                <td data-label="Desalocar">
                                    <MdLocationOff onClick={() => handleSubmit()} />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </main>
        </>
    );
}
