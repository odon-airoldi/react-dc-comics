export default function AppFooter({ footer_social }) {

    return (
        <footer>
            <div className="footer-main">
                <div className="container">
                    <div className="row py-5">
                        <div className="col-2">
                            <h3 className="text-uppercase text-white h6">Dc Comincs</h3>
                            <ul className="list-unstyled">
                                <li><a href="#">Characters</a></li>
                                <li><a href="#">Comics</a></li>
                                <li><a href="#">Movies</a></li>
                                <li><a href="#">TV</a></li>
                                <li><a href="#">Games</a></li>
                                <li><a href="#">Videos</a></li>
                                <li><a href="#">News</a></li>
                            </ul>
                            <h3 className="text-uppercase text-white h6">Shop</h3>
                            <ul className="list-unstyled mb-0">
                                <li><a href="#">Shop DC</a></li>
                                <li><a href="#">Shop DC Collectibles</a></li>
                            </ul>
                        </div>
                        <div className="col-2">
                            <h3 className="text-uppercase text-white h6">Dc</h3>
                            <ul className="list-unstyled mb-0">
                                <li><a href="#">Terms Of Use</a></li>
                                <li><a href="#">Privacy Policy (New)</a></li>
                                <li><a href="#">Ad Choices</a></li>
                                <li><a href="#">Advertising</a></li>
                                <li><a href="#">Jobs</a></li>
                                <li><a href="#">Subscriptions</a></li>
                                <li><a href="#">Talent Workshops</a></li>
                                <li><a href="#">CPSC Certificates</a></li>
                                <li><a href="#">Ratings</a></li>
                                <li><a href="#">Shop Help</a></li>
                                <li><a href="#">Contact Us</a></li>
                            </ul>
                        </div>
                        <div className="col-2">
                            <h3 className="text-uppercase text-white h6">Sites</h3>
                            <ul className="list-unstyled mb-0">
                                <li><a href="#">DC</a></li>
                                <li><a href="#">MAD Magazine</a></li>
                                <li><a href="#">DC Kids</a></li>
                                <li><a href="#">DC Universe</a></li>
                                <li><a href="#">DC Power Visa</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-social">
                <div className="container">
                    <div className="d-flex justify-content-between py-4">
                        <a className="btn btn-outline rounded-0 text-white text-uppercase" href="#">Sign-up now!</a>
                        <div className="d-flex align-items-center">
                            <h3 className="text-uppercase text-white h6 mb-0 mx-3">Follow Us</h3>
                            <ul className="d-flex list-unstyled mb-0">
                                {
                                    footer_social.map(social => (
                                        <li className="mx-2" key={social.id}>
                                            <a href={social.url}>
                                                <img src={social.img} alt={social.id} />
                                            </a>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
