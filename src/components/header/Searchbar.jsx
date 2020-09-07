import React, { useState, useEffect } from 'react';
import { Input } from 'chayns-components/lib';
import './header.scss';

function Searchbar(props) {
    const [search, setSearch] = useState('');
    const [newTimeout, setNewTimeout] = useState();

    function changeSearch() {
        const newSearch = search === ''
            ? 'love'
            : search;
        props.setSearchString(newSearch);
    }

    useEffect(() => {
        clearTimeout(newTimeout);
        setNewTimeout(setTimeout(changeSearch, 800));
    }, [search]);

    return (
        <div className="searchbar">
            <Input
                className="input search"
                value={search}
                onChange={setSearch}
                type="text"
                placeholder="Suche"
            />
            <i className="fal fa-search searchIcon"/>
        </div>
    );
}

export default Searchbar;
