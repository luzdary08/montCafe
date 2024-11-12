import Subtitle from "./Subtitle"
import '../styles/contact.css'
export default function contact() {
  return (
    <div className="contact section section--5">
        <div className="container">
          <div className="contact__body">
            <Subtitle position="center">Contacto</Subtitle>
            <p className='contact__subtitle'>¿Tiene alguna consulta?</p>
            <h2 className='contact__title'>Envía un mensaje de texto o llama y pregunta algo.</h2>
            
            <form className='contact__form'>
                <input className='contact__input' type="text" placeholder="ingrese su correo electronico" />
                <input className='contact__submit' type="submit" value="Enviar" />
            </form>
          </div>
        </div>
    </div>
  )
}
