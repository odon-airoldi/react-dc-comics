

export default function AppCard({ img, text }) {


    return (

        <div className="card-comic">
            <div className="ratio ratio-1x1 mb-3">
                <img className='object-fit-cover object-position-top-center' src={img} alt={text} />
            </div>
            <h2 className="small text-white text-uppercase mb-0">{text}</h2>
        </div>

    )

}