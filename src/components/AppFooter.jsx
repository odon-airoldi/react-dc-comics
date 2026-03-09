const footer_social = [
    {
        id: 'Facebook',
        url: '#',
        img: './src/img/footer-facebook.png'
    },
    {
        id: 'Periscope',
        url: '#',
        img: './src/img/footer-periscope.png'
    },
    {
        id: 'Pinterest',
        url: '#',
        img: './src/img/footer-pinterest.png'
    },
    {
        id: 'Twitter',
        url: '#',
        img: './src/img/footer-twitter.png'
    },
    {
        id: 'Youtube',
        url: '#',
        img: './src/img/footer-youtube.png'
    }

]



export default function AppFooter() {

    return (
        <footer>
            <div className="footer-main">
                <div className="container">
                    <div className="row py-5">
                        <div className="col-2">
                            <h3 className="text-uppercase text-white h6">Dc Comincs</h3>
                            <ul className="list-unstyled">
                                <li><a hfer="#">Characters</a></li>
                                <li><a hfer="#">Comics</a></li>
                                <li><a hfer="#">Movies</a></li>
                                <li><a hfer="#">TV</a></li>
                                <li><a hfer="#">Games</a></li>
                                <li><a hfer="#">Videos</a></li>
                                <li><a hfer="#">News</a></li>
                            </ul>
                            <h3 className="text-uppercase text-white h6">Shop</h3>
                            <ul className="list-unstyled mb-0">
                                <li><a hfer="#">Shop DC</a></li>
                                <li><a hfer="#">Shop DC Collectibles</a></li>
                            </ul>
                        </div>
                        <div className="col-2">
                            <h3 className="text-uppercase text-white h6">Dc</h3>
                            <ul className="list-unstyled mb-0">
                                <li><a hfer="#">Terms Of Use</a></li>
                                <li><a hfer="#">Privacy Policy (New)</a></li>
                                <li><a hfer="#">Ad Choices</a></li>
                                <li><a hfer="#">Advertising</a></li>
                                <li><a hfer="#">Jobs</a></li>
                                <li><a hfer="#">Subscriptions</a></li>
                                <li><a hfer="#">Talent Workshops</a></li>
                                <li><a hfer="#">CPSC Certificates</a></li>
                                <li><a hfer="#">Ratings</a></li>
                                <li><a hfer="#">Shop Help</a></li>
                                <li><a hfer="#">Contact Us</a></li>
                            </ul>
                        </div>
                        <div className="col-2">
                            <h3 className="text-uppercase text-white h6">Sites</h3>
                            <ul className="list-unstyled mb-0">
                                <li><a hfer="#">DC</a></li>
                                <li><a hfer="#">MAD Magazine</a></li>
                                <li><a hfer="#">DC Kids</a></li>
                                <li><a hfer="#">DC Universe</a></li>
                                <li><a hfer="#">DC Power Visa</a></li>
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