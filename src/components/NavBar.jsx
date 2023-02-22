import ironhackLogo from '../images/ironhack-logo-xs.png'
import navbarLogo from '../images/menu-top-xs.png'

const NavBar = () =>{
    return (
        <nav className='navbar'>
            <img src={ironhackLogo} alt="" id='ironLogo' />
            <img src={navbarLogo} alt="" id='navLogo'/>
        </nav>
    )
}

export default NavBar