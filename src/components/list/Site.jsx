import React from 'react';
import './list.scss';

function Site(props) {
    const handleClick = (id) => {
        chayns.openUrlInBrowser(`https://chayns.net/${id}`);
    };

    const fullName = props.siteInfo.appstoreName;
    const showName = fullName.length <= 15 ? fullName : `${fullName.substring(0, 12)}...`;
    return (
        <div className="list-item">
            <div className="icon, background" onClick={() => { handleClick(props.siteInfo.siteId); }}>
                <div className="icon" style={{ backgroundImage: `url('https://sub60.tobit.com/l/${props.siteInfo.locationId}?size=70')` }}/>
            </div>
            <p>{showName}</p>
        </div>
    );
}

export default Site;
