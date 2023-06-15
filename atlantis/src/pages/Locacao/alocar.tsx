import Header from '../../component/Header';
import { MdLocationOn } from "react-icons/md";

export default function Alocar() {

    function handleSubmit() {
        window.location.href = '/acomodacoes_disponiveis'
    }

    return (
        <><Header />
            <main>
                <h1>Alocar cliente</h1>

                <div className='container-table'>
                    <table>
                        <thead>
                            <tr>
                                <th className="largura-dobrada">Nome</th>
                                <th>CPF</th>
                                <th>Alocar</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td data-label="Nome" className="largura-dobrada">Amanda Caires Pereira</td>
                                <td data-label="CPF">45865117885</td>
                                <td data-label="Alocar">
                                    <MdLocationOn onClick={() => handleSubmit()} />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </main>
        </>
    );
}
