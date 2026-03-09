import logo from '../img/dc-logo.png'



const nav_ul = [
    {
        id: '1',
        text: 'Character',
        url: '#',
        active: false
    },
    {
        id: '2',
        text: 'Comics',
        url: '#',
        active: true
    },
    {
        id: '3',
        text: 'Movie',
        url: '#',
        active: false
    },
    {
        id: '4',
        text: 'Tv',
        url: '#',
        active: false
    },
    {
        id: '5',
        text: 'Games',
        url: '#',
        active: false
    },
    {
        id: '6',
        text: 'Collectibles',
        url: '#',
        active: false
    },
    {
        id: '7',
        text: 'Videos',
        url: '#',
        active: false
    },
    {
        id: '8',
        text: 'Fans',
        url: '#',
        active: false
    },
    {
        id: '9',
        text: 'News',
        url: '#',
        active: false
    },
    {
        id: '10',
        text: 'Shop',
        url: '#',
        active: false
    }
]

export default function AppHeader() {

    return (
        <header>
            <div className="container">
                <nav className="d-flex aling-items-center justify-content-between">
                    <a className="d-block py-3" href="#" alt="">
                        <img src={logo} alt="" />
                    </a>
                    <ul className="d-flex text-uppercase list-unstyled mb-0">
                        {
                            nav_ul.map(nav_li => (
                                <li className="col-auto px-3" key={nav_li.id}>
                                    <a className={`text-decoration-none d-flex align-items-center h-100 ${nav_li.active ? 'active' : ''}`} href={nav_li.url}>{nav_li.text}</a>
                                </li>
                            ))
                        }

                    </ul>
                </nav>
            </div>
        </header >
    )

} 