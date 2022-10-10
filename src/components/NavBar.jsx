import '../../public/styles.css'
import logo from '../assets/rymlogo.svg'

const NavBar = () => {
    return(
        <div className="navbar__container">
            
            <a href="/"><img  className='navbar__container-logo' src={logo} alt="logo" /></a>
            <ul className="navbar__container-list">
                <li><a className="navbar__container-element" href="/">Inicio </a></li>
                <li><a className="navbar__container-element" href="/character/:id">Ver Personaje </a></li>
                <li><a className="navbar__container-element" href="#"> Acerca de</a></li>
            </ul>
        </div>
    )
}

export default NavBar