import react from 'react'
import { Link } from 'react-router-dom';
import './Nav.css'

const Nav = ({names}) => {
    
    return(
        <div className='Nav'>
            <Link exact to="/dogs">Home</Link>
            <Link exact to="/colors">Colors</Link>
            {names.map(dog => <Link to={dog.link}>{dog.name}</Link>)}
        </div>
    )
}

export default Nav;