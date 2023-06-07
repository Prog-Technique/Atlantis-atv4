import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { FiArrowLeft } from "react-icons/fi";
import Header from "../../component/Header";

export default function Endereco() {
    interface Address {
        cep: string; rua: string; bairro: string;
        cidade: string; estado: string; pais: string;
    }

    const [address, setAddress] = useState<Address>({
        cep: '', rua: '', bairro: '',
        cidade: '', estado: '', pais: ''
      });

      const handleChangeCep = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAddress({ ...address, [e.target.name]: e.target.value });
      };
    
      const handleCep = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const cep = e.target.value.replace(/\D/g, '');
    
        if (cep.length === 8) {
          try {
            const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
            const data = await response.json();
    
            const { logradouro, bairro, localidade, uf, pais } = data;
    
            setAddress({
              ...address, cep, rua: logradouro,
              bairro, cidade: localidade, estado: uf,
              pais: pais || 'Brasil'
            });
          } catch (error) {
            console.error('Erro ao buscar CEP:', error);
          }
        } else {
          setAddress({ ...address, cep: e.target.value });
        }
      };

    return (
        <> <Header/>
            <div className="onTop">
                <Link to="/cadastrar_cliente"><FiArrowLeft size={25}/></Link>
                <h1>Cadastro de cliente</h1>
                <h2>Dados de endereço</h2>
            </div>

            <div className="container">
            <div className="border">
                <form className="content">

                    <div className="input">
                        <label htmlFor="cep">CEP</label>
                        <input id="cep" type="text" value={address.cep} onChange={handleCep} />
                    </div>

                    <div className="input">
                        <label htmlFor="rua">Rua</label>
                        <input id="rua" type="text" value={address.rua} onChange={handleCep} />
                    </div>

                    <div className="input">
                        <label htmlFor="bairro">Bairro</label>
                        <input id="bairro" type="txt" value={address.bairro} onChange={handleCep} />
                    </div>

                    <div className="input">
                        <label htmlFor="numero">Número</label>
                        <input id="numero" type="txt" />
                    </div>

                    <div className="input">
                        <label htmlFor="complemento">Complemento</label>
                        <input id="complemento" type="txt" />
                    </div>
                </form>

                <form className="content">
                    <div className="input">
                        <label htmlFor="cidade">Cidade</label>
                        <input id="cidade" type="txt" value={address.cidade} onChange={handleCep} />
                    </div>

                    <div className="input">
                        <label htmlFor="estado">Estado</label>
                        <input id="estado" type="txt" value={address.estado} onChange={handleCep} />
                    </div>

                    <div className="input">
                        <label htmlFor="pais">Pais</label>
                        <input id="pais" type="txt" value={address.pais} onChange={handleCep} />
                    </div>

                    <button type="submit">
                        <Link to="/cadastrar_cliente/documentos">PRÓXIMO</Link>
                    </button>
                </form>
                </div>
            </div>
        </>
    )
}