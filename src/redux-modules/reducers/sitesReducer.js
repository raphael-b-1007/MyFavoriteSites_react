import { CAN_LOAD_MORE, CLEAR_LIST, SEARCH_END, SEARCH_START, SET_SEARCH } from '../actions/siteActions';

const initialState = {
    canLoadMore: false,
    searchString: 'love',
    ids: [],
    entities: {},
};

const sitesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_START:
            chayns.showWaitCursor();
            return {
                ...state,
                canLoadMore: false,
            };
        case SEARCH_END:
            chayns.hideWaitCursor();
            const newState = { ...state, isLoading: false };
            action.payload.forEach((site) => {
                newState.ids = newState.ids.concat(site.locationId);
                newState.entities[site.locationId] = site;
            });
            return newState;
        case CLEAR_LIST:
            return {
                ...state,
                ids: [],
                entities: {},
            };
        case SET_SEARCH:
            return {
                ...state,
                searchString: action.payload === '' ? 'love' : action.payload,
            };
        case CAN_LOAD_MORE:
            return {
                ...state,
                canLoadMore: true,
            };
        default:
            return state;
    }
};

export default sitesReducer;
