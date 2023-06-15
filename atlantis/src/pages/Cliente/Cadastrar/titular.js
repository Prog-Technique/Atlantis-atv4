import { useState } from "react";
import Axios from "axios";
import Header from "../../../component/Header";
import { toast } from 'react-toastify';
import { FiPlusCircle } from "react-icons/fi";

export default function CadastraTitular() {
  const [nome, setNome] = useState('');
  const [nome_social, setNomeSocial] = useState('');
  const [data_nasc, setData_nasc] = useState('');
  const [cep, setCep] = useState('');
  const [rua, setRua] = useState('');
  const [bairro, setBairro] = useState('');
  const [numero, setNumero] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');
  const [pais, setPais] = useState('');
  const [cpf, setCpf] = useState('');
  const [passaporte, setPassaporte] = useState('');

  const [rgs, setRgs] = useState([{}]);
  const [telefones, setTelefones] = useState([{}]);

  let addFormRg = () => {
    setRgs([...rgs, {}])
  }

  let addFormTelefone = () => {
    setTelefones([...telefones, {}])
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  function addDependentes() {
    window.location.href = '/cadastrar_dependente'
  }


  const buscarEndereco = async () => {
    try {
      const response = await Axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      const { logradouro, bairro, localidade, uf, pais: enderecoPais, cep: enderecoCep } = response.data;

      setRua(logradouro || '');
      setBairro(bairro || '');
      setCidade(localidade || '');
      setEstado(uf || '');
      setPais(enderecoPais || '');
    } catch (error) {
      console.log(error);
      toast.error('Erro ao buscar o endereço. Verifique o CEP informado.');
    }
  };


  return (
    <> <Header />
      <div className="onTop">
        <h1>Cadastro de cliente</h1>
        <h2>Dados do titular</h2>
      </div>

      <div className="container">
        <form className="border" onSubmit={handleSubmit}>
          <div className="content">

            <div className="input">
              <label htmlFor="name">Nome</label>
              <input id="name" type="text" value={nome} onChange={(e) => setNome(e.target.value)} required />
            </div>

            <div className="input">
              <label htmlFor="social_name">Nome social</label>
              <input id="social_name" type="text" value={nome_social} onChange={(e) => setNomeSocial(e.target.value)} required />
            </div>

            <div className="input">
              <label htmlFor="dataNasc">Data de nascimento</label>
              <input id="dataNasc" type="date" value={data_nasc} onChange={(e) => setData_nasc(e.target.value)} required />
            </div>



            {telefones.map((telefone, index) => (
              <div className="input" key={index}>
                <label>Telefone</label>
                <input type="text" value={telefone.numero}
                  onChange={(e) => {
                    const newTelefones = [...telefones];
                    newTelefones[index].numero = e.target.value;
                    setTelefones(newTelefones);
                  }} required />
              </div>
            ))}

            <FiPlusCircle size={25} className="plusCircle"
              onClick={() => addFormTelefone()} />
          </div>

          <div className="content">

            <div className="input">
              <label>CPF</label>
              <input type="text" value={cpf} onChange={(e) => setCpf(e.target.value)} required />
            </div>
            <div className="input">
              <label>Passaporte</label>
              <input type="text" value={passaporte} onChange={(e) => setPassaporte(e.target.value)} required />
            </div>

            {rgs.map((rg, index) => (
              <div key={index}>
                <div className="input">
                  <label>RG</label>
                  <input type="text" value={rg.numero}
                    onChange={(e) => {
                      const newRgs = [...rgs];
                      newRgs[index].numero = e.target.value;
                      setRgs(newRgs);
                    }} required />
                </div>
                <div className="input">
                  <label>Data de emissão</label>
                  <input type="date" value={rg.emissao}
                    onChange={(e) => {
                      const newRgs = [...rgs];
                      newRgs[index].emissao = e.target.value;
                      setRgs(newRgs);
                    }} required />
                </div>
              </div>
            ))}

            <FiPlusCircle size={25} className="plusCircle"
              onClick={() => addFormRg()} />
          </div>

          <div className="content">

            <div className="input">
              <label>CEP</label>
              <input type="text" value={cep} onChange={(e) => setCep(e.target.value)} onBlur={buscarEndereco} required />
            </div>

            <div className="input">
              <label>Número</label>
              <input type="text" value={numero} onChange={(e) => setNumero(e.target.value)} required />
            </div>

            <div className="input">
              <label>Logradouro</label>
              <input type="text" value={rua} onChange={(e) => setRua(e.target.value)} required />
            </div>

            <div className="input">
              <label>Bairro</label>
              <input type="text" value={bairro} onChange={(e) => setBairro(e.target.value)} required />
            </div>
          </div>

          <div className="content">

            <div className="input">
              <label>Cidade</label>
              <input type="text" value={cidade} onChange={(e) => setCidade(e.target.value)} required />
            </div>

            <div className="input">
              <label>Estado</label>
              <input type="text" value={estado} onChange={(e) => setEstado(e.target.value)} required />
            </div>
            <div className="input">
              <label>País</label>
              <input type="text" value={pais} onChange={(e) => setPais(e.target.value)} required />
            </div>

            <button type="button" onClick={() => addDependentes()}>Adicionar dependente</button>
            <button type="submit">ENVIAR</button>
          </div>

        </form>
      </div>
    </>
  );
}
