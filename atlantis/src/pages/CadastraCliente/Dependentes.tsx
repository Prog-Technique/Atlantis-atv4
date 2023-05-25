import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Header from "../../component/Header";

export default function Dependentes() {

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

    const [formValue2, setFormValue2] = useState([{ telefone: "" }])

    let handleChange2 = (i: number, e: React.ChangeEvent<HTMLInputElement>) => {
        let newFormValue2 = [...formValue2];
        newFormValue2[i] = { ...newFormValue2[i], [e.target.name]: e.target.value };
        setFormValue2(newFormValue2);
    };

    let addFormField2 = () => {
        setFormValue2([...formValue2, { telefone: "" }])
    }

    let removeFormField2 = (i: number) => {
        let newFormValue2 = [...formValue2];
        newFormValue2.splice(i, 1);
        setFormValue2(newFormValue2)
    }

    return (
        <> <Header />
            <div className="onTop">
                <Link to="/cadastrar_cliente/documentos">VOLTAR</Link>
                <h1>Cadastro de cliente</h1>
                <h2>Dados de dependentes</h2><br></br>

                <h4>São dependente crianças até 10 anos</h4>
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
                                <label htmlFor="numero">Número do documento</label>
                                <input id="numero" type="text" />
                            </div>

                            <div className="input">
                                <label htmlFor="dataexp">Data de expedição</label>
                                <input id="dataexp" type="date" />
                            </div>

                            {index ?
                                <button type="button" style={{ backgroundColor: "red" }} onClick={() => removeFormField(index)}>Deletar</button>
                                : null}

                                <button type="button" style={{ backgroundColor: "gray" }} onClick={() => addFormField()}>Adicionar outro documento</button>

                        </form>

                    </>
                ))}

                <form className="content">

                    <div className="input">
                        <label htmlFor="cep">CEP</label>
                        <input id="cep" type="text" />
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
                    {formValue2.map((e, index) => (
                        <>

                            <div className="input">
                                <label htmlFor="telefone">Telefone</label>
                                <input id="telefone" type="tel" value={e.telefone} onChange={e => handleChange2(index, e)} />
                                {index ?
                                    <button type="button" style={{backgroundColor: "red"}} onClick={() => removeFormField2(index)}>Deletar</button>
                                    : null}
                            </div>

                        </>
                    ))}

                    <button type="button" style={{backgroundColor: "gray"}} onClick={() => addFormField2()}>Adicionar outro telefone</button>

                    <button type="submit">
                        <Link to="/">ENVIAR</Link>
                    </button>
                </form>
            </div>
        </>
    )
}