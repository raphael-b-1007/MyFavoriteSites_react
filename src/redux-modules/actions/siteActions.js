export const CLEAR_LIST = 'CLEAR_LIST';
export const SEARCH_START = 'SEARCH_START';
export const SEARCH_END = 'SEARCH_END';
export const SET_SEARCH = 'SET_SEARCH';
export const CAN_LOAD_MORE = 'CAN_LOAD_MORE';

export const clearList = () => ({
    type: CLEAR_LIST,
});

export const endSearch = (data) => ({
    type: SEARCH_END,
    payload: data,
});

export const startSearch = () => ({
    type: SEARCH_START,
});

export const setSearch = (searchString) => ({
    type: SET_SEARCH,
    payload: searchString,
});

export const canLoadMore = () => ({
    type: CAN_LOAD_MORE,
});

export const searchSites = () => async (dispatch, getState) => {
    dispatch(startSearch());
    // eslint-disable-next-line max-len
    let data = await fetch(`https://chayns2.tobit.com/SiteSearchApi/location/search/${getState().sites.searchString}/?skip=${getState().sites.ids.length}&take=31`)
        .then((response) => response.json()).catch(() => { });
    if (data.length === 31) {
        dispatch(canLoadMore());
        data = data.slice(0, 30);
    }
    dispatch(endSearch(data));
};
