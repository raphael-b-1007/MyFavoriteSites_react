import React from 'react';
import './list.scss';
import { useSelector } from 'react-redux';

function Site(props) {
    const data = useSelector((state) => state.sites.entities[props.siteId]);

    const handleClick = (id) => {
        chayns.openUrlInBrowser(`https://chayns.net/${id}`);
    };

    const fullName = data.locationName;
    const showName = fullName.length <= 15 ? fullName : `${fullName.substring(0, 12)}...`;
    return (
        <div className="list-item">
            <div className="icon, background" onClick={() => { handleClick(data.siteId); }}>
                <div className="icon" style={{ backgroundImage: `url('https://sub60.tobit.com/l/${data.locationId}?size=70')` }}/>
            </div>
            <p>{showName}</p>
        </div>
    );
}

export default Site;
