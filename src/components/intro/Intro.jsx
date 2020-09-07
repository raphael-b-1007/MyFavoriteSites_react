import React, { PureComponent } from 'react';

// Use PureComponent instead of Component because it handles the shouldComponentUpdate method for u.
// If u want to define ur own shouldComponentUpdate logic use Component instead of PureComponent.
class Intro extends PureComponent {
    render() {
        return (
            <div className="tapp__intro">
                <p>Hier findest du eine Übersicht über Chayns-Sites.</p>
                <p>Wenn du deine eigene Seite hinzufügen möchtest, kannst du das Formular unten ausfüllen.</p>
            </div>
        );
    }
}

export default Intro;
