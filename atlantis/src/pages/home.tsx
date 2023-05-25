import Footer from "../component/Footer";
import Header from "../component/Header";
import './style.css';

export default function Home() {
    return (
            <><Header />
                <div className="home">
                    <h1>Sejam bem-vindos!</h1>
                    <span></span>
                    <p>Não se afogue, apenas as mágoas</p>
                </div>
                <Footer />
            </>
        );
    }
