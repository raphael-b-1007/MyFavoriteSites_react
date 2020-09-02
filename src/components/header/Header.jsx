import React from 'react';
import Headline from './Headline';
import Searchbar from './Searchbar';
import './header.scss';

function Header(props) {
    return (
        <div className="container">
            <Headline/>
            <Searchbar setSearchString={(newString) => { props.setSearchString(newString); }}/>
        </div>
    );
}

export default Header;
