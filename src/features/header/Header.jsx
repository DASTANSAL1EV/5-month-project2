import './header.scss';
import Icon from '../../img/Foodieland..png';
import SocIcon from '../../img/Social.png';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header className='header'>
        <div className="container header-container">
            <img src={Icon} alt="" />
            <nav className='header_nav'>
                <NavLink to={'/'}>
                    <li>Home</li>
                </NavLink>
                <NavLink to={'/recipes'}>
                    <li>Recipes</li>
                </NavLink>
                <NavLink to={'/blog'}>
                    <li>Blog</li>
                </NavLink>
                <NavLink to={'/contact'}>
                    <li>Contact</li>
                </NavLink>
                <NavLink to={'/about'}>
                    <li>About Us</li>
                </NavLink>
            </nav>
            <img src={SocIcon} alt="" />
        </div>
    </header>
  )
}
