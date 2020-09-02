import { hot } from 'react-hot-loader/root';
import React, { PureComponent } from 'react';
import './app.scss';

// Components
import Header from './header/Header';
import Intro from './intro/Intro';
import List from './list/List';
import Form from './form/Form';

// We use PureComponent instead of Component because it handles the shouldComponentUpdate method for us.
// If we want to define our own shouldComponentUpdate logic we have to use Component instead of PureComponent.
class App extends PureComponent {
    render() {
        return (
            <>
                <Header/>
                <Intro/>
                <List/>
                <footer>
                    <Form/>
                </footer>
            </>
        );
    }
}

export default App;
export const HotApp = hot(App);
