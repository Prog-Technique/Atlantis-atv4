import { useState } from 'react';
import Header from '../../component/Header';
import { FiEdit, FiTrash2 } from "react-icons/fi";

export default function Clientes() {
  function removerCliente() {
    
  }

  function verCliente() {
    window.location.href = '/ver_editar_titular'
  }

  return (
    <><Header />
    <main>
            <h1>Clientes</h1>

            <div className='container-table'>
            <table>
              <thead>
                <tr>
                  <th scope="col" className="largura-dobrada">Nome</th>
                  <th scope="col">Ver/Editar</th>
                  <th scope="col">Excluir</th>
                </tr>
              </thead>

              <tbody>
              <tr>
                      <td data-label="Nome" className="largura-dobrada">Amanda Caires Pereira</td>
                      <td data-label="Visualizar/Editar">
                          <FiEdit onClick={() => verCliente()} />
                      </td>
                      <td data-label="Excluir">
                          <FiTrash2 onClick={() => removerCliente()}/>
                      </td>
                    </tr>
              </tbody>
            </table>
        </div>
      </main>
      </>
  );
}