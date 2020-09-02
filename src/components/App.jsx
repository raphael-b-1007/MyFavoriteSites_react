import { hot } from 'react-hot-loader/root';
import React, { PureComponent } from 'react';

// Components
import Headline from './header/headline/Headline';
import Intro from './header/intro/Intro';
import List from './list/List';
import Form from './form/Form';

// We use PureComponent instead of Component because it handles the shouldComponentUpdate method for us.
// If we want to define our own shouldComponentUpdate logic we have to use Component instead of PureComponent.
class App extends PureComponent {
    render() {
        return (
            <>
                <Headline headline="My Favorit Sites"/>
                <Intro/>
                <List/>
                <footer style={{ fontSize: '16px' }}>
                    <Form/>
                </footer>
            </>
        );
    }
}

export default App;
export const HotApp = hot(App);
