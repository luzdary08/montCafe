import pastel from '../assets/img/pastel.png'
import '../styles/card.css'

export default function Card() {
    return (
        <article className="card">
            <figure className="card__figure">
            {/*<div className="card_badge">¡Oferta Especial!</div>*/}
                <img className="card__image" src={pastel} alt="" loading="lazy" />
            </figure>
            <div className="card__body">
                <h3 className="card__title">Pedazo de Pastel con Coco</h3>
                <p className="card__text">We come with a choice of coffee for coffee lovers. With coffee taken from the best place and mixed by the owner.</p>
                <div className='card__actions'>
                    <p className='card__price--old'>$100.00</p>
                    <p className='card__price'>$87.00</p>
                    <button className='card__btn'>Comprar</button>
                </div>
            </div>
          
        </article>
    )
}