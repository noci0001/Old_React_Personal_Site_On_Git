import React from 'react'

let PortraitOfSam = require("./img/Sam4.jpg");



export default function WhoIAM(){

    return (
        <div>
            <section className="about-me" id="about">
            <h2 className="section__title  section__title--about">Who I am</h2>
            <p className="section__subtitle section__subtitle--about"></p>

            
            
            <div className="about-me__body">
                <p>Tech <a href="#" data-tool-tip="a person who is very knowledgeable about or skilful in a particular area."> expert </a> furute-oriented in Cloud Computing</p>
                <p>I describe myself as a curious person, I study as a Software Engineer because the world of Tech offers limitless opportunities for those ravenous for enlightenment.

I strive for excellence and I try to put creativity in every challenge I face, I think that "We need to first be limited in order to become limitless,” (Phil Hansen, TED Conference 2013).

My classmates, instructors and co-workers have described me as an enthusiastic cheerful person and a motivated collaborator who is passionate and hard-working.</p> 
            </div>

            <img src={PortraitOfSam} alt="Portrait of Sam" className="about-me__img"/>

        </section>
       
        
        </div>
    )

}