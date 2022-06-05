import React from "react";
import "./index.css";


//let Logo = require("./img/finalArtwork.png")
//let ProfilePhoto = require('./img/SamProfilePicture.jpg')
//<img src={ProfilePhoto} width="400px" alt="Samuel Nocita smiling" className="intro__img"/>
//<img src={Logo} alt="samInTheCloud Logo"/>

export default function Header(props){

    const [menu, setMenu] = React.useState(false)

    function toggle(){
        setMenu(prevMenu => !prevMenu)
        const navToggle = document.querySelector('.nav-toggle');
        const navLinks = document.querySelectorAll('.nav__link')

        navToggle.addEventListener('click', () => {
            document.body.classList.toggle('nav-open');
        });

        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                document.body.classList.remove('nav-open');
            })
        })
    }

    return (
        <div className="hero">
            <header>
            <div className="logo">
                


            </div>
            <button className="nav-toggle" aria-label="toggle navigation">
                <span className="hamburger" onClick={toggle}></span>
            </button>

            <nav className="nav">
                    <ul className="nav__list">
                            <li className="nav__item"><a href="#home" className="nav__link">Home</a></li>
                            <li className="nav__item"><a href="#services" className="nav__link">My Services</a></li>
                            <li className="nav__item"><a href="#about" className="nav__link">About me</a></li>
                            <li className="nav__item"><a href="#work" className="nav__link">My Work</a></li>
                            <li className="nav__item"><a href="#book" className="nav__link">Book a consultation</a></li>
                        </ul>
                </nav>

            </header>
    
             <section className="intro" id="home">
                 
                 <h1 className="section__title section__title--intro ">
                     Hi, I am <strong> Samuel Nocita</strong>
                 </h1>
                 
                  <p className="section__subtitle section__subtitle--intro" id="monospace__effect"> Frontend Software Engineer </p>
                  
             </section> 
        </div>
    )
}