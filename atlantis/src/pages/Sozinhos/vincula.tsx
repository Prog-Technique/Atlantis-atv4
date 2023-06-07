import Header from "../../component/Header";
import { Link } from 'react-router-dom';

export default function VinculaHospedeQuarto() {
    return (
        <><Header />
            <div className="onTop">
                <h1>Vincular</h1>
                <h2>Hóspede a Acomodação</h2>
            </div>
        
            <div className="container">
                <div className="border">
                <form className="content">

                    <div className="input">
                        <label htmlFor="name">Nome do hóspede</label>
                        <input id="name" type="text" />
                    </div>

                    <label htmlFor="quarto">Acomodar em:</label>
                    <div className="opcoes">
                        <select>
                                <option value="Fsimples">Família Simples</option>
                                <option value="Fmais">Família Mais</option>
                                <option value="Fsuper">Família Super</option>
                            </select>
                        </div>

                    <button type="submit">
                        <Link to="/">VINCULAR</Link>
                    </button>
                </form>
                </div>
            </div>
        </>
    )
}