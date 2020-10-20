import React, { useState } from 'react';
import { Input } from 'chayns-components/lib';
import './header.scss';
import { useDispatch } from 'react-redux';
import { setSearch } from '../../redux-modules/actions/siteActions';

function Searchbar() {
    const [newTimeout, setNewTimeout] = useState();
    const dispatch = useDispatch();

    return (
        <div className="searchbar">
            <Input
                className="input search"
                onChange={(value) => {
                    clearTimeout(newTimeout);
                    setNewTimeout(setTimeout(() => (dispatch(setSearch(value))), 800)); }}
                type="text"
                placeholder="Suche"
            />
            <i className="fal fa-search searchIcon"/>
        </div>
    );
}

export default Searchbar;
