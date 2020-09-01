import React, { PureComponent } from 'react';
import './list.scss';

import Site from './Site';

class List extends PureComponent {
    constructor() {
        super();
        this.state = {
            data: [],
        };
    }

    componentDidMount() {
        fetch('https://chayns1.tobit.com/TappApi/Site/SlitteApp?SearchString=love&Skip=0&Take=60')
            .then((response) => response.json()).then((json) => {
                this.setState({ data: json.Data });
            }).catch(() => {
                chayns.hideWaitCursor();
            });
    }

    render() {
        return (
            <div className="list">
                {
                    // eslint-disable-next-line react/destructuring-assignment
                    this.state.data.map((site) => <Site key={site.locationId} siteInfo={site}/>)
                }
            </div>
        );
    }
}

export default List;
