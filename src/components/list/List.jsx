import React, { useState, useEffect } from 'react';
import './list.scss';

import Site from './Site';

function List(props) {
    const [data, setData] = useState([]);
    const [newSites, setNewSites] = useState([]);
    const [moreAvailable, setMoreAvailable] = useState(false);
    const [rendered, setRendered] = useState(false);
    const [updated, setUpdated] = useState(false);

    function getData() {
        return fetch(`https://chayns2.tobit.com/SiteSearchApi/location/search/${props.searchString}/?skip=${data.length}&take=31`)
            .then((response) => response.json()).then((json) => {
                setNewSites(json);

                return json;
            }).catch(() => { });
    }

    useEffect(() => {
        if (rendered) {
            console.log(props.searchString);
            setData([]);
            setUpdated(true);
            setRendered(false);
        }
    }, [props.searchString]);

    useEffect(() => {
        if (!rendered) {
            chayns.showWaitCursor();
            getData().then((result) => {
                if (result.length === 31) {
                    setData(result.slice(0, 30));
                    setNewSites([]);
                    setMoreAvailable(true);
                } else {
                    setData(result);
                    setNewSites([]);
                    setMoreAvailable(false);
                }
                chayns.hideWaitCursor();
                setRendered(true);
                setUpdated(false);
            });
        }
    }, [updated]);

    useEffect(() => {
        if (moreAvailable && newSites.length === 0 && rendered) {
            getData().then((result) => {
                if (result.length === 31) {
                    setNewSites((prevSites) => prevSites.slice(0, 30));
                    setMoreAvailable(true);
                } else {
                    setMoreAvailable(false);
                }
            });
        }
    }, [data, rendered]);

    function handleClick() {
        setData((prevData) => prevData.concat(newSites));
        setNewSites([]);
    }


    const button = (
        <div className="centered">
            <button type="button" className="button" onClick={handleClick}>Mehr</button>
        </div>
    );

    return (
        <>
            <div className="list">
                {
                    // eslint-disable-next-line react/destructuring-assignment
                    data.map((site) => <Site key={site.locationId} siteInfo={site}/>)
                }
            </div>
            {moreAvailable && button}
        </>
    );
}

export default List;
