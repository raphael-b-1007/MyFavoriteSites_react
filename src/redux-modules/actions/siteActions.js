export const CLEAR_LIST = 'CLEAR_LIST';
export const ADD_TO_LIST = 'ADD_TO_LIST';
export const SEARCH_START = 'SEARCH_START';
export const SEARCH_END = 'SEARCH_END';

export const clearList = () => ({
    type: CLEAR_LIST,
});

export const endSearch = (nextList) => ({
    type: ADD_TO_LIST,
    payload: nextList,
});

export const startSearch = () => ({
    type: SEARCH_START,
});

export const searchSites = (searchString = 'love', start = 0) => async (dispatch, getState) => {
    dispatch(startSearch());
    const data = fetch(`https://chayns2.tobit.com/SiteSearchApi/location/search/${searchString}/?skip=${start}&take=31`)
        .then((response) => response.json()).then((json) => {
            setNewSites(json);

            return json;
        }).catch(() => { });
    dispatch(endSearch(data));
};

export const fetchMoreSite = () => (dispatch, getState) => {

};
