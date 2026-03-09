const featured_links = [
    {
        id: '1',
        text: 'Digital Comics',
        url: '#',
        img: './src/img/buy-comics-digital-comics.png'
    },
    {
        id: '2',
        text: 'DC Merchandise',
        url: '#',
        img: './src/img/buy-comics-merchandise.png'
    },
    {
        id: '3',
        text: 'Subscription',
        url: '#',
        img: './src/img/buy-comics-subscriptions.png'
    },
    {
        id: '4',
        text: 'Comic Shop Locator',
        url: '#',
        img: './src/img/buy-comics-shop-locator.png'
    },
    {
        id: '5',
        text: 'DC Power Visa',
        url: '#',
        img: './src/img/buy-dc-power-visa.svg'
    },
]

export default function AppSectionFeatured() {

    return (
        <section className="section-featured-link">
            <div className="container">
                <div className="row row-cols-5 py-5">

                    {
                        featured_links.map(link => (

                            <a className="featured-link d-flex align-items-center text-white text-decoration-none" key={link.id} href={link.url}>
                                <img src={link.img} alt={link.text} />
                                <div className="text-uppercase small ms-2">{link.text}</div>
                            </a>

                        ))
                    }

                </div>
            </div>
        </section>
    )
}