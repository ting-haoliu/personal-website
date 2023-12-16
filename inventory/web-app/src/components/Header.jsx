import Narbar from './Navbar';
import Logo_img from '../assets/Logo_img.jpg'

import '../styles/HeaderStyles.css';

function Header() {
    return (
        <header className="header">
            <a className="header__skiplink" href="#main" aria-label="skip to main content">Skip to Content</a>
            <a className='header__link' href="/">
                <img className='logo-img' src={Logo_img} alt="This is an image for logo" />
                <h1 className="header__title">ADAM LIU</h1>
            </a>
            <Narbar
                className="navbar"
            />
        </header>
    );
}

export default Header;