import logo from '../img/dc-logo.png'



export default function AppHeader() {

    return (
        <header>
            <div className="container">
                <nav className="d-flex aling-items-center justify-content-between">
                    <a className="d-block py-3" href="#" alt="">
                        <img src={logo} alt="" />
                    </a>
                    <ul className="d-flex text-uppercase list-unstyled mb-0">
                        <li className="col-auto px-3">
                            <a className="text-decoration-none d-flex align-items-center h-100" href="#">Character</a>
                        </li>
                        <li className="col-auto px-3">
                            <a className="text-decoration-none d-flex align-items-center h-100" href="#">Comics</a>
                        </li>
                        <li className="col-auto px-3">
                            <a className="text-decoration-none d-flex align-items-center h-100" href="#">Movie</a>
                        </li>
                        <li className="col-auto px-3">
                            <a className="text-decoration-none d-flex align-items-center h-100" hef="#">Tv</a>
                        </li>
                        <li className="col-auto px-3">
                            <a className="text-decoration-none d-flex align-items-center h-100" hef="#">Games</a>
                        </li>
                        <li className="col-auto px-3">
                            <a className="text-decoration-none d-flex align-items-center h-100" hef="#">Collectibles</a>
                        </li>
                        <li className="col-auto px-3">
                            <a className="text-decoration-none d-flex align-items-center h-100" hef="#">Videos</a>
                        </li>
                        <li className="col-auto px-3">
                            <a className="text-decoration-none d-flex align-items-center h-100" hef="#">Fans</a>
                        </li>
                        <li className="col-auto px-3">
                            <a className="text-decoration-none d-flex align-items-center h-100" hef="#">News</a>
                        </li>
                        <li className="col-auto px-3">
                            <a className="text-decoration-none d-flex align-items-center h-100" hef="#">Shop</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )

} 