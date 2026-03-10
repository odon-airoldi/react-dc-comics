

export default function AppCard(props) {

    console.log(props)

    return (

        <div className="card-comic" key={props.id}>
            <div className="ratio ratio-1x1 mb-3">
                <img className='object-fit-cover object-position-top-center' src={props.thumb} alt={props.series} />
            </div>
            <h2 className="small text-white text-uppercase mb-0">{props.series}</h2>
        </div>

    )

}