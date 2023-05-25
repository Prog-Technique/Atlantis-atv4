import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Header from "../../component/Header";
import Footer from "../../component/Footer";

export default function Pessoal() {

    const [formValue, setFormValue] = useState([{ telefone: "" }])

    let handleChange = (i: number, e: React.ChangeEvent<HTMLInputElement>) => {
        let newFormValue = [...formValue];
        newFormValue[i] = { ...newFormValue[i], [e.target.name]: e.target.value };
        setFormValue(newFormValue);
    };

    let addFormField = () => {
        setFormValue([...formValue, { telefone: "" }])
    }

    let removeFormField = (i: number) => {
        let newFormValue = [...formValue];
        newFormValue.splice(i, 1);
        setFormValue(newFormValue)
    }

    return (
        <> <Header/>
            <div className="onTop">
                <h1>Cadastro de cliente</h1>
                <h2>Dados pessoais</h2>
            </div>

            <div className="container">
                <form className="content">

                    <div className="input">
                        <label htmlFor="name">Nome</label>
                        <input id="name" type="text" />
                    </div>

                    <div className="input">
                        <label htmlFor="social_name">Nome social</label>
                        <input id="social_name" type="text" />
                    </div>

                    <div className="input">
                        <label htmlFor="dataNasc">Data de nascimento</label>
                        <input id="dataNasc" type="date" />
                    </div>

                    <div className="input">
                        <label htmlFor="dataCad">Data de cadastro (hoje)</label>
                        <input id="dataCad" type="date" />
                    </div>

                </form>

                <form className="content">
                    {formValue.map((e, index) => (
                        <>

                            <div className="input">
                                <label htmlFor="telefone">Telefone</label>
                                <input id="telefone" type="tel" value={e.telefone} onChange={e => handleChange(index, e)} />
                                {index ?
                                    <button type="button" style={{backgroundColor: "red"}} onClick={() => removeFormField(index)}>Deletar</button>
                                    : null}
                            </div>

                        </>
                    ))}

                    <button type="button" style={{backgroundColor: "gray"}} onClick={() => addFormField()}>Adicionar outro telefone</button>

                    <button type="submit">
                        <Link to="/cadastrar_cliente/endereco">PRÓXIMO</Link>
                    </button>
                </form>
            </div>
        </>
    )
}