export default function AppSectionFeatured({ featured_item }) {

    return (
        <section className="section-featured-link bg-light-blue">
            <div className="container">
                <div className="row row-cols-5 py-5">

                    {
                        featured_item.map(item => (

                            <a className="featured-link d-flex align-items-center text-white text-decoration-none" key={item.id} href={item.url}>
                                <img src={item.img} alt={item.text} />
                                <div className="text-uppercase small ms-2">{item.text}</div>
                            </a>

                        ))
                    }

                </div>
            </div>
        </section>
    )
}