import React, { useEffect } from 'react';
import './list.scss';

import { useDispatch, useSelector } from 'react-redux';
import Site from './Site';
import { fetchMoreSites, searchSites } from '../../redux-modules/actions/siteActions';

function List() {
    const searchString = useSelector((state) => state.sites.searchString);
    const siteList = useSelector((state) => state.sites.list);
    const canLoadMore = useSelector((state) => state.sites.canLoadMore);
    const isLoading = useSelector((state) => state.sites.isLoading);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(searchSites());
    }, [searchString]);

    const button = (
        <div className="centered">
            <button type="button" className="button" onClick={() => (dispatch(fetchMoreSites()))}>Mehr</button>
        </div>
    );

    return (
        <>
            <div className="list">
                {
                    // eslint-disable-next-line react/destructuring-assignment
                    siteList.map((site) => <Site key={site.locationId} siteInfo={site}/>)
                }
            </div>
            {canLoadMore && button}
        </>
    );
}

export default List;
