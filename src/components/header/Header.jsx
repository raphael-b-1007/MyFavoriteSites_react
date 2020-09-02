import React from 'react';
import Headline from './Headline';
import Searchbar from './Searchbar';
import './header.scss';

function Header() {
    return (
        <div className="container">
            <Headline/>
            <Searchbar/>
        </div>
    );
}

export default Header;
