import { Link } from "react-router-dom"


export default function Header() {
    return (
        <header>
            <Link to='/'>
            <h1>Avatar: The Last Airbender</h1>
            <span>--------------</span>
            <h2>Character List</h2>
            </Link>
        </header>
    )
}
