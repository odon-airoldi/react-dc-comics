import comics from '../data/comics'
import comics_header from '../img/jumbotron.jpg'
import AppCard from './AppCard'

export default function AppMain() {

    return (
        <main>
            <section className="bg-dark-grey">
                <div className="section-header">
                    <img className="object-fit-cover" src={comics_header} />
                </div>
                <div className="container position-relative py-5">
                    <h1 className="h4 text-white text-uppercase bg-light-blue py-2 px-4 position-absolute top-0 translate-middle-y">Current Series</h1>
                    <div className="row row-cols-6 gy-5">

                        {
                            comics.map(comic => (
                                <AppCard id={comic.id} thumb={comic.thumb} series={comic.series} />
                            ))
                        }

                        {/* {
                            comics.map(comic => (
                                <div className="card-comic" key={comic.id}>
                                    <div className="ratio ratio-1x1 mb-3">
                                        <img className='object-fit-cover object-position-top-center' src={comic.thumb} alt={comic.series} />
                                    </div>
                                    <h2 className="small text-white text-uppercase mb-0">{comic.series}</h2>
                                </div>
                            ))
                        } */}
                    </div>
                </div>
                <div className="d-flex align-items-center pb-4">
                    <a className="dc-btn btn-light-blue small text-white text-uppercase text-center py-2 px-5 mx-auto" href="#">Load More</a>
                </div>
            </section>
        </main>
    )
}