export default function AppFooterNav({ url, text }) {

    return (

        <li>
            <a className="text-decoration-none" href={url}>{text}</a>
        </li>

    )

}