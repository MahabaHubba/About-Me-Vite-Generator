//Installing Link from React
import {Link} from 'react-router-dom'


export default function NavOptions () {
    return (
        <Navbar
        links = {[
            <Link key={1} className = "nav-link text-light" to='/' >
            About Me
            </Link>,
             <Link key={2} className = "nav-link text-light" to='/portfolio' >
            Portfolio
            </Link>,
             <Link key={3} className = "nav-link text-light" to='/contact' >
             Contact Me
             </Link>
        ]}
        >
        </Navbar>
    )
}