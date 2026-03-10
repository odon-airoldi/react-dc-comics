import logo from '../img/dc-logo.png'



export default function AppHeader({ header_nav }) {

    return (
        <header>
            <div className="container">
                <nav className="d-flex aling-items-center justify-content-between">
                    <a className="d-block py-3" href="#" alt="">
                        <img src={logo} alt="" />
                    </a>
                    <ul className="d-flex text-uppercase list-unstyled mb-0">
                        {
                            header_nav.map(nav_item => (
                                <li className="col-auto px-3" key={nav_item.id}>
                                    <a className={`text-decoration-none d-flex align-items-center h-100 ${nav_item.active ? 'active' : ''}`} href={nav_item.url}>{nav_item.text}</a>
                                </li>
                            ))
                        }
                    </ul>
                </nav>
            </div>
        </header >
    )

} 