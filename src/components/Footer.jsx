import { Facebook, Instagram } from 'lucide-react'
import '../styles/footer.css'
import libro from '../assets/img/reclamaciones.png'

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__body">
                    <div className="footer__left">
                        <h2>MontCafe</h2>
                        <p className="footer__text">We come with a choice of coffee for coffee lovers. With coffee taken from the best place and mixed by the owner.</p>
                        <div className="footer__social">
                            <a href="#"><Facebook height={28} width={28} /></a>
                            <a href="#"><Instagram height={28} width={28}/></a>
                        </div>
                    </div>
                    <div className="footer__right">
                        <div className="footer__item">
                            <h4>Navegation</h4>
                            <nav>
                                <a href="#">Sobre Nosotros</a>
                                <a href="#">Productos</a>
                                <a href="#">Contactos</a>
                                <a href="#">Galeria</a>
                            </nav>
                        </div>
                        <div className="footer__item">
                            <h4>Navegation</h4>
                            <nav>
                                <a href="#">Sobre Nosotros</a>
                                <a href="#">Productos</a>
                                <a href="#">Contactos</a>
                                <a href="#">Galeria</a>
                            </nav>
                        </div>
                    </div>
                </div>
                <img src={libro} alt="footer" className="footer__img" />
            </div>
        </footer>
    )
}
