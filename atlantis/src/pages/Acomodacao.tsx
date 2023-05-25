import Header from "../component/Header";
import './style.css';

export default function Acomodacao() {
    return (
        <><Header />
            <div className="container">
                <form className="content">

                    <div className="input">
                        <label htmlFor="name">Nome do Serviço</label>
                        <input id="name" type="text" />
                    </div>

                    <div className="input">
                        <label htmlFor="social_name">Preço</label>
                        <input id="preco" type="text" />
                    </div>

                    <button type="submit">ENVIAR</button>
                </form>
            </div>
        </>
    )
}