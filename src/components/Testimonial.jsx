import { Star } from 'lucide-react'
import persona1 from '../assets/img/persona1-testimonio.jpg'
import React from 'react'

export default function Testimonial() {

    const n = 3

    const numberStar = Array.from({length:5},(i) => i + 1)

    return (
        <article className="testimonials__card">
            <div className="testimonials__stars">
                {
                    numberStar.map((number,i) => {
                        
                        if (number === n) return <Star key={i} className="star" />
                        return  <Star key={i} className="star" fill='white' />

                    } )
                }

            </div>
            <p className="testimonials__text">
                "We come with a choice of coffee for coffee lovers. With coffee taken from the best place and mixed by the owner."
            </p>
            <div className="testimonials__footer">
                <div className="testimonials__perfil">
                    <img src={persona1} alt="imagen1" className="testimonials__persona" />
                </div>
                <div>
                    <p className="testimonials__name">Luzdary</p>
                    <p className="testimonials__description">Cliente</p>
                </div>
            </div>
        </article>
    )
}
