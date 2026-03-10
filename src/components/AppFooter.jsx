import AppFooterNav from './AppFooterNav'



export default function AppFooter({ footer_social, footer_nav }) {

    return (
        <footer>
            <div className="footer-main">
                <div className="container">
                    <div className="row py-5">
                        <div className="col-2">
                            <h3 className="text-uppercase text-white h6">DC Comincs</h3>
                            <ul className="list-unstyled">
                                {
                                    footer_nav
                                        .filter(link => link.cat === 'DC Comics')
                                        .map(link => (
                                            <AppFooterNav key={link.id} url={link.url} text={link.text} />
                                        ))
                                }
                            </ul>
                            <h3 className="text-uppercase text-white h6">Shop</h3>
                            <ul className="list-unstyled mb-0">
                                {
                                    footer_nav
                                        .filter(link => link.cat === 'Shop')
                                        .map(link => (
                                            <AppFooterNav key={link.id} url={link.url} text={link.text} />
                                        ))
                                }
                            </ul>
                        </div>
                        <div className="col-2">
                            <h3 className="text-uppercase text-white h6">DC</h3>
                            <ul className="list-unstyled mb-0">
                                {
                                    footer_nav
                                        .filter(link => link.cat === 'DC')
                                        .map(link => (
                                            <AppFooterNav key={link.id} url={link.url} text={link.text} />
                                        ))
                                }
                            </ul>
                        </div>
                        <div className="col-2">
                            <h3 className="text-uppercase text-white h6">Sites</h3>
                            <ul className="list-unstyled mb-0">
                                {
                                    footer_nav
                                        .filter(link => link.cat === 'Sites')
                                        .map(link => (
                                            <AppFooterNav key={link.id} url={link.url} text={link.text} />
                                        ))
                                }
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
