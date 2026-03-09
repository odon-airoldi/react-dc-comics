import comics from '../data/comics'
import comics_header from '../img/jumbotron.jpg'

export default function AppMain() {

    return (
        <main>
            <section className="bg-dark-grey">
                <div className="section-header">
                    <img src={comics_header} />
                </div>
                <div className="container position-relative py-5">
                    <h1 className="h4 text-white text-uppercase bg-light-blue py-2 px-4 position-absolute top-0 translate-middle-y">Current Series</h1>
                    <div className="row row-cols-6 gy-4">
                        {
                            comics.map(comic => (
                                <div>
                                    <div className="ratio ratio-1x1 mb-3">
                                        <img src={comic.thumb} alt={comic.series} />
                                    </div>
                                    <h2 className="small text-white text-uppercase">{comic.series}</h2>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </main>
    )
}