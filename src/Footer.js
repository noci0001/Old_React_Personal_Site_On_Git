let Logo = require("./img/finalArtwork.png")

export default function Footer(){
    return (
        <div>
            <footer className="footer">
            <a href="mailto:noci0001@hz.nl" className="footer-link">noci0001@hz.nl</a>
            <ul className="social-list">
                <li className="social-list__item"><a className="social-list__link" href={Logo}><i className="fa-brands fa-instagram"></i></a></li>
                <li className="social-list__item"><a className="social-list__link" href={Logo}><i className="fa-brands fa-github"></i></a></li>
                <li className="social-list__item"><a className="social-list__link" href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"><i className="fa-brands fa-linkedin"></i></a></li>
            </ul>
            <img src={Logo} width="200px" className="endLogo"/>
        </footer>
        </div>
    )
}