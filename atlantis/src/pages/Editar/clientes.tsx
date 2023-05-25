import { Link } from "react-router-dom";
import Header from "../../component/Header";
import "../style.css";

export default function EditarCliente() {
    return (
        <><Header />
            <div className="onTop">
                <Link to="/clientes">VOLTAR</Link>
                <h1>Visualizar/Editar</h1>
                <h1>Dika</h1>
            </div>

            <div className="container">
                <form className="content">

                    <div className="input">
                        <label htmlFor="name">Nome</label>
                        <input id="name" type="text" placeholder={"Amanda"} />
                    </div>

                    <div className="input">
                        <label htmlFor="social_name">Nome social</label>
                        <input id="social_name" type="text" placeholder={"Dika"}/>
                    </div>

                    <div className="input">
                        <label htmlFor="genero">Gênero</label>
                        <select>
                            <option>Feminino</option>
                            <option>Masculino</option></select>
                    </div>

                    <div className="input">
                        <label htmlFor="telefone">Telefone</label>
                        <input id="telefone" type="tel" placeholder={"(12) 99191-1111"} />
                    </div>
                </form>

                <form className="content">

                    <div className="input">
                        <label htmlFor="cpf">CPF</label>
                        <input id="cpf" type="text" placeholder={"301.111.169-56"} />
                    </div>

                    <div className="input">
                        <label htmlFor="emissaocpf">Data de emissão do CPF</label>
                        <input id="emissaocpf" type="date" value={"2011-03-07"} />
                    </div>

                    <div className="input">
                        <label htmlFor="rg">RG</label>
                        <input id="rg" type="text" placeholder={"45.179.828-66"} />
                    </div>

                    <div className="input">
                        <label htmlFor="emissaorg">Data de emissão do RG</label>
                        <input id="emissaorg" type="date" value={"2008-09-23"} />
                    </div>

                    <button type="submit">ENVIAR</button>

                </form>
            </div>
        </>
    );
}