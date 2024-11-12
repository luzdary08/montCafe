import Subtitle from "./Subtitle";
import '../styles/testimonials.css'
import Testimonial from "./Testimonial";



export default function Testimonials() {
    return (
        <div className="testimonials ">
            <div className="container">
                <div className="testimonials__body">
                    <Subtitle >Testimonios</Subtitle>
                    <div className="testimonials__cards">
                        <Testimonial  />
                        <Testimonial />
                        <Testimonial  />
                    </div>
                </div>
            </div>
        </div>
    )
}
