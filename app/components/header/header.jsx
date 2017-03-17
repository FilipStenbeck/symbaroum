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
            <nav className={header}>
                <span><Link className={selected} to='/'>Krönika</Link></span>
                <span><Link className={link} to='/npc'>Personer</Link></span>

            </nav>
    	);
    }
    if (choosen === 'npc') {
        return (
            <nav className={header}>
                <span><Link className={link} to='/'>Krönika</Link></span>
                <span><Link className={selected} to='/npc'>Personer</Link></span>

            </nav>
    	);
    }

    return (
        <nav className={header}>
            <span><Link className={link} to='/'>Krönika</Link></span>
            <span><Link className={link + ' ' + selected} to='/npc'>Personer</Link></span>

        </nav>
    );
};

export default Header;
