const React = require('react');
const { Link } = require('react-router');

import {
    header,
    link,
    navigation,
    selected
} from "./header.css";

const HeaderLogo = () => {
    return (
        <div className="logo-container">
            <img className="logo" src="/images/symbaroum_logo_600px.png"/>
        </div>
    )
}

const Header = ({choosen}) => {
    if (choosen === 'chronicle') {
        return (
            <div>
                <HeaderLogo/>
                <nav className={header}>
                    <span><Link className={selected} to='/'>Krönika</Link></span>
                    <span><Link className={link} to='/npc'>Personer</Link></span>
                </nav>
            </div>
    	);
    }
    if (choosen === 'npc') {
        return (
            <div>
                <HeaderLogo/>
                <nav className={header}>
                    <span><Link className={link} to='/'>Krönika</Link></span>
                    <span><Link className={selected} to='/npc'>Personer</Link></span>

                </nav>
            </div>
    	);
    }

    return (
        <div>
            <HeaderLogo/>
            <nav className={header}>
                <span><Link className={link} to='/'>Krönika</Link></span>
                <span><Link className={link + ' ' + selected} to='/npc'>Personer</Link></span>

            </nav>
        </div>
    );
};

export default Header;
