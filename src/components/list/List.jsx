import React, { useEffect } from 'react';
import './list.scss';

import { useDispatch, useSelector } from 'react-redux';
import Site from './Site';
import { clearList, fetchMoreSites, searchSites } from '../../redux-modules/actions/siteActions';

function List() {
    const searchString = useSelector((state) => state.sites.searchString);
    const canLoadMore = useSelector((state) => state.sites.canLoadMore);
    const siteIds = useSelector((state) => state.sites.ids);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(clearList());
        dispatch(searchSites());
    }, [searchString]);

    const button = (
        <div className="centered">
            <button type="button" className="button" onClick={() => (dispatch(searchSites()))}>Mehr</button>
        </div>
    );

    return (
        <>
            <div className="list">
                {
                    // eslint-disable-next-line react/destructuring-assignment
                    siteIds.map((id) => <Site key={id} siteId={id}/>)
                }
            </div>
            {canLoadMore && button}
        </>
    );
}

export default List;
