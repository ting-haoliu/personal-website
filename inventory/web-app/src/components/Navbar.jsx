import { useState } from 'react';
import MenuData from '../datas/MenuData';
import Button from './Button';

import '../styles/NavbarStyles.css';

function Narbar({ className }) {

    const [open, setOpen] = useState(false);

    const list = MenuData.map(item => {
        return (
            <li className={`${className}__item`} key={item.name}>
                <a className={`${className}__link`} href={item.path}
                    onClick={() => {
                        setOpen(!open)
                    }}
                >
                    {item.name}
                </a>
            </li>
        );
    });

    return (
        <nav className={className}>
            <Button
                className="menu-icon"
                onClick={() => {
                    setOpen(!open)
                }}>
                <i className={`${open ? 'gg-close' : 'gg-menu'}`}></i>
            </Button>
            <ul className={`${className}__list ${open ? 'active' : 'inactive'}`}>
                {list}
            </ul>
        </nav>
    );
}

export default Narbar;