//Installing Link from React
import { Link } from 'react-router-dom'
import "../components/navbar.css"


export default function NavOptions() {
    return (
        <div className='navbar'>
            <p className='navbarName'>MahabaHubba</p>
            <div className='navlink'>
                <a href='/'><p className='spacing'>About Me</p></a>
                <a href='/portfolio'><p className='spacing'>Portfolio</p></a>
                <a href='/contact'><p className='spacing'>Contact</p></a>
            </div>
        </div>

    )
}