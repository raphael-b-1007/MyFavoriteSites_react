import { hot } from 'react-hot-loader/root';
import React, { useState } from 'react';
import './app.scss';

// Components
import Header from './header/Header';
import Intro from './intro/Intro';
import List from './list/List';
import Form from './form/Form';

// We use PureComponent instead of Component because it handles the shouldComponentUpdate method for us.
// If we want to define our own shouldComponentUpdate logic we have to use Component instead of PureComponent.
function App() {
    const [search, setSearch] = useState('love');

    return (
        <>
            <Header
                setSearchString={(newString) => setSearch(newString)}
            />
            <Intro/>
            <List searchString={search}/>
            <footer>
                <Form/>
            </footer>
        </>
    );
}

export default App;
export const HotApp = hot(App);
