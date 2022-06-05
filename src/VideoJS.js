import React from 'react'
let Portrait = require("./img/videoBg.mp4")


export default function videoJS() {

  return (
    <div className="video-wrapper">
    <p className="catchphrase">The highest level of mastery is <strong>semplicity.</strong> <br/> Most information is irrelevant and most effort is wasted, but only the <strong>expert</strong> knows what to ignore</p>
    <section className="Myvideo">
        <video className="video-bg" autoPlay muted loop>
            <source src={Portrait} type="video/mp4" alt="Sam coding at his desk"></source> 
        </video>
    </section>
    </div>
  )
}
