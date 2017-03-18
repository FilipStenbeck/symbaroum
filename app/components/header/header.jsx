const React = require('react');
const { Link } = require('react-router');

import {
    header,
    link,
    navigation,
    selected
} from "./header.css";

const Header = ({choosen}) => {
    if (choosen === 'chronicle') {
        return (
            <div>

            <div className="logo-container">
                <img className="logo" src="http://www.prometheuscrowdfunding.de/files/2016/06/symbaroum_logo_600px.png"/>
            </div>
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

            <div className="logo-container">
                <img className="logo" src="http://www.prometheuscrowdfunding.de/files/2016/06/symbaroum_logo_600px.png"/>
            </div>
            <nav className={header}>
                <span><Link className={link} to='/'>Krönika</Link></span>
                <span><Link className={selected} to='/npc'>Personer</Link></span>

            </nav>
        </div>
    	);
    }

    return (
        <div>

        <div className="logo-container">
            <img className="logo" src="http://www.prometheuscrowdfunding.de/files/2016/06/symbaroum_logo_600px.png"/>
        </div>
        <nav className={header}>
            <span><Link className={link} to='/'>Krönika</Link></span>
            <span><Link className={link + ' ' + selected} to='/npc'>Personer</Link></span>

        </nav>
    </div>
    );
};

export default Header;
