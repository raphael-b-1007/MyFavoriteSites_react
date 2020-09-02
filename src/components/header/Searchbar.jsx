import React from 'react';
import { Input } from 'chayns-components/lib';
import './header.scss';

function Searchbar() {
    return (
        <div className="searchbar">
            <Input className="input search" type="text" placeholder="Suche"/>
            <i className="fal fa-search searchIcon"/>
        </div>
    );
}

export default Searchbar;
