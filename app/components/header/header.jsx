const React = require('react');
const { Link } = require('react-router');

import {
    header,
    linkContainer,
    headerContainer,
    linkSmall,
    link,
    navigation,
    selected
} from "./header.css";

const Header = ({choosen, links}) => {
    if (choosen === 'chronicle') {
        return (
            <div className={headerContainer}>
                <nav className={header}>
                    <span><Link className={selected} to='/'>Krönika</Link></span>
                    <span><Link className={link} to='/npc'>Personer</Link></span>
                </nav>
                <div className={linkContainer}>
                    { links.map((target) => (
                        <span><a className={linkSmall} href={'#' + target}>{target}</a></span>
                    ))}
                </div>
            </div>
    	);
    }
    if (choosen === 'npc') {
        return (
            <div className={headerContainer}>
                <nav className={header}>
                    <span><Link className={link} to='/'>Krönika</Link></span>
                    <span><Link className={selected} to='/npc'>Personer</Link></span>
                </nav>
                <div className={linkContainer}>
                        {links.map((target) => (
                        <span><a className={linkSmall} href={'#' + target}>{target}</a></span>
                    ))}
                </div>
            </div>
    	);
    }

    return (
        <div className={headerContainer}>
            <nav className={header}>
                <span><Link className={link} to='/'>Krönika</Link></span>
                <span><Link className={link + ' '} to='/npc'>Personer</Link></span>
            </nav>
        </div>
    );
};

export default Header;
