import { Mail, MapPin, Phone } from 'lucide-react'
import img1 from '../assets/img/image-1.png'
import img2 from '../assets/img/image-2.png'
import img3 from '../assets/img/image-3.png'
import img4 from '../assets/img/image-4.png'
import img5 from '../assets/img/image-5.png'
import img6 from '../assets/img/image-6.png'
import img7 from '../assets/img/image-7.png'


export const links = [
    {
      className:"link-1",
      title:"inicio",
    },
    {
      className:"link-2",
      title:"productos",
    },
    {
      className:"link-3",
      title:"nosotros",
    },
    {
      className:"link-4",
      title:"categorias",
    },
    {
      className:"link-5",
      title:"contacto",
    },
  ]

export const categories = [ 
    {
        img: img1,
        category: 'Categoría',
        className: 'categories__item--1',
    },
    {
        img: img2,
        category: 'Pastelería',
        className: 'categories__item--2',
    },
    {
        img: img3,
        category: 'Categoría',
        className: 'categories__item--3',
    },
    {
        img: img4,
        category: 'Categoría', 
        className: 'categories__item--4',
    },
    {
        category: 'Categoría', 
        img: img5,
        className: 'categories__item--5',
    },
    {
        category: 'Categoría', 
        img: img6,       
        className: 'categories__item--6',
    },
    {
        category: 'Categoría', 
        img: img7,
        className: 'categories__item--7',
    },
]

export const informations = [
    {
        title:'Dirección',
        description:'Miraflores 123, calle viva la vida',
        Icon:MapPin
    },
    {
        title:'Telefono',
        description:'234 567 890',
        Icon:Phone
    },
    {
        title:'Email',
        description:'montecafe@gmail.com',
        Icon:Mail 
    },
] 

