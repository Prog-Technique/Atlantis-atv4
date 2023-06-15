import Header from '../../component/Header';
import { FiTrash2 } from "react-icons/fi";

export default function Acomodacoes() {

  const handleDelete = () => {
  
  };

  return (
    <><Header />
      <main>
        <h1>Acomodações</h1>

        <div className='container-table'>
          <table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Cama de solteiro</th>
                <th>Cama de casal</th>
                <th>Suíte</th>
                <th>Climatização</th>
                <th>Garagem</th>
                <th>Excluir</th>
              </tr>
            </thead>
            <tbody>
                <tr>
                  <td data-label="Nome">Casal Simples</td>
                  <td data-label="Cama de solteiro">0</td>
                  <td data-label="Cama de casal">1</td>
                  <td data-label="Suíte">1</td>
                  <td data-label="Climatização">Sim</td>
                  <td data-label="Garagem">1</td>
                  <td data-label="Excluir">
                    <FiTrash2 onClick={() => handleDelete()} />
                  </td>
                </tr>
            </tbody>
          </table>
        </div>
      </main>
    </>
  );
}
