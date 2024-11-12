import React, { useEffect, useRef } from "react";
import "../styles/header.css";
import logo from '../assets/img/logo.webp'
import { links } from "../helper/utils";



export const Header = () => {

  const linksRef = useRef([])

  const scrollToSection = (section) => {
    const item = document.querySelector(`.section--${section}`)

    const scrollTo = item?.getBoundingClientRect().top ?? 0

    window.scrollTo({
      top: scrollTo + window.scrollY - 100,
      behavior: 'smooth'
    })
  }


  const handleScroll = () => {
    const sections = document.querySelectorAll('.section') 
    
    sections.forEach((section, i) => {
      const scrollY = window.scrollY + 110
      console.log( 'section'+i+': '+ section.offsetTop)

      if (scrollY  >= section.offsetTop  && scrollY  <= section.offsetHeight + section.offsetTop ) { 
        linksRef.current[i].classList.add('active')      
      }else{
        linksRef.current[i].classList.remove('active')
      }

    })

  }

  useEffect(() => {

    window.addEventListener('scroll',handleScroll)

    return () => window.removeEventListener('scroll',handleScroll)
    
  },[])


  return (
    <header className="header">
      <div className="container">
        <div className="header__body">
          <a href="#">
            <img src={logo} alt="logo" />
          </a>
          <nav className="header__nav">
            {
              links.map( (link,i) => <a onClick={ () => scrollToSection(i + 1)} ref={el => linksRef.current[i] = el} key={i} className={link.className} >{link.title}</a> )
            }
          </nav>
        </div>
      </div>
    </header>
  );
};
