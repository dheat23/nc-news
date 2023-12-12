import { useContext } from 'react'
import {Link} from 'react-router-dom'
import { UserContext } from '../contexts/UserContext'
const Header = () => {
    const {user} = useContext(UserContext)
    return (<header>
        <h1>Northcoders News</h1>
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/articles'>Articles</Link>
            <Link to='/topics'>Topics</Link>
        </nav>
        <p>Logged in as {user}</p>
    </header>)
}

export default Header