import Header from '../../component/Header';
import { GrMapLocation } from "react-icons/gr";

export default function AcomodacaoVazia() {

  const handleAlocar = () => {
    window.location.href = '/alocar'
  };

  return (
    <><Header />
      <main>
        <h1>Acomodações disponível</h1>

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
                <th>Alocar</th>
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
                <td data-label="Alocar">
                  <GrMapLocation onClick={() => handleAlocar()} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </>
  );
}
