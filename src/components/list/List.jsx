import React, { PureComponent } from 'react';
import './list.scss';

import Site from './Site';

class List extends PureComponent {
    constructor() {
        super();
        this.state = {
            data: [],
            newSites: [],
            moreAvailable: false,
            counter: 0,
        };
        this.handleClick = this.handleClick.bind(this);
        this.getData = this.getData.bind(this);
    }

    componentDidMount() {
        chayns.showWaitCursor();
        this.getData().then(() => {
            if (this.state.newSites.length === 31) {
                this.setState((prevState) => ({
                    data: prevState.newSites.slice(0, 30),
                    newSites: [],
                    moreAvailable: true,
                    counter: 30,
                }));
            } else {
                this.setState((prevState) => ({
                    data: prevState.newSites,
                    newSites: [],
                    moreAvailable: false,
                }));
            }
            chayns.hideWaitCursor();
        });
    }

    componentDidUpdate() {
        if (this.state.moreAvailable && this.state.newSites.length === 0) {
            this.getData().then(() => {
                if (this.state.newSites.length === 31) {
                    this.setState((prevState) => ({
                        newSites: prevState.newSites.slice(0, 30),
                        moreAvailable: true,
                    }));
                } else {
                    this.setState({ moreAvailable: false });
                }
            });
        }
    }

    getData() {
        return fetch(`https://chayns1.tobit.com/TappApi/Site/SlitteApp?SearchString=love&Skip=${this.state.counter}&Take=31`)
            .then((response) => response.json()).then((json) => {
                this.setState({ newSites: json.Data });
            }).catch(() => { });
    }

    handleClick() {
        this.setState((prevState) => ({
            data: prevState.data.concat(prevState.newSites),
            newSites: [],
            counter: prevState.counter + 30,
        }));
    }

    render() {
        const button = (
            <div className="centered">
                <button type="button" className="button" onClick={this.handleClick}>Mehr</button>
            </div>
        );
        return (
            <>
                <div className="list">
                    {
                        // eslint-disable-next-line react/destructuring-assignment
                        this.state.data.map((site) => <Site key={site.locationId} siteInfo={site}/>)
                    }
                </div>
                {this.state.moreAvailable && button}
            </>
        );
    }
}

export default List;
