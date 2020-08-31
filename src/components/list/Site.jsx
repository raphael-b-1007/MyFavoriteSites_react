import React from 'react';
import './list.scss';

function Site(props) {
    return (
        <div>
            <div className="img, background">
                <div className="img" style={{ backgroundImage: `url('https://sub60.tobit.com/l/${props.siteInfo.locationId}?size=70')` }}/>
            </div>
            <p>{props.siteInfo.appstoreName}</p>
        </div>
    );
}

export default Site;
