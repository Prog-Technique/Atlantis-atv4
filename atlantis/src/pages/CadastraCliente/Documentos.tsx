import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { FiArrowLeft } from "react-icons/fi";
import Header from "../../component/Header";

export default function Documentos() {

    const [formValue, setFormValue] = useState([{ documento: "" }])

    let handleChange = (i: number, e: React.ChangeEvent<HTMLInputElement>) => {
        let newFormValue = [...formValue];
        newFormValue[i] = { ...newFormValue[i], [e.target.name]: e.target.value };
        setFormValue(newFormValue);
    };

    let addFormField = () => {
        setFormValue([...formValue, { documento: "" }])
    }

    let removeFormField = (i: number) => {
        let newFormValue = [...formValue];
        newFormValue.splice(i, 1);
        setFormValue(newFormValue)
    }

    return (
        <> <Header />
            <div className="onTop">
                <Link to="/cadastrar_cliente/endereco"><FiArrowLeft size={25}/></Link>
                <h1>Cadastro de cliente</h1>
                <h2>Dados de documentos</h2>
            </div>

            <div className="container">
            <div className="border">

                {formValue.map((e, index) => (
                    <>

                        <form className="content">

                            <div className="input">
                                <label htmlFor="tipo">Tipo de documento</label>
                                <select>
                                    <option>Selecione</option>
                                    <option>CPF</option>
                                    <option>RG</option>
                                    <option>Passaporte</option>
                                </select>
                            </div>

                            <div className="input">
                                <label htmlFor="numero">Número</label>
                                <input id="numero" type="text" />
                            </div>

                            <div className="input">
                                <label htmlFor="dataexp">Data de expedição</label>
                                <input id="dataexp" type="date" />
                            </div>

                            {index ?
                                <button type="button" style={{ backgroundColor: "red" }} onClick={() => removeFormField(index)}>Deletar</button>
                                : null}
                        </form>

                    </>
                ))}
                <form className="content">
                    <button type="button" style={{ backgroundColor: "gray" }} onClick={() => addFormField()}>Adicionar outro documento</button>

                    <button type="submit">
                        <Link to="/cadastrar_cliente/dependentes">PRÓXIMO</Link>
                    </button>
                </form>
                </div>
            </div>
        </>
    )
}