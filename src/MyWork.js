let ProjectImage1 = require("https://voicefoundry.com/wp-content/uploads/2018/09/feature-aws.jpg")
let Logo = require("./img/finalArtwork.png")

export default function MyWork(){
    return (
        <section className="my-work" id="work">
            <h2 className="section__title">My work</h2>
            <p className="section__subtitle">A selection of my range of work</p>

            <div className="portfolio">
                
                <a href="https://www.youtube.com/" className="portfolio__item">
                    <img src={Logo} width="250px" alt="Describe the project" className="portfolio__img"/>
                </a>

                
                <a href="https://www.youtube.com/" className="portfolio__item">
                    <img src={Logo} width="250px" alt="Describe the project" className="portfolio__img"/>
                </a>

                
                <a href="https://www.youtube.com/" className="portfolio__item">
                    <img src={Logo} width="250px" alt="Describe the project" className="portfolio__img"/>
                </a>

               
                <a href="https://www.youtube.com/" className="portfolio__item">
                    <img src={Logo} width="250px" alt="Describe the project" className="portfolio__img"/>
                </a>
            </div>

        </section>
    )
}