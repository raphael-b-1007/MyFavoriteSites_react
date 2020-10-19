import { CAN_LOAD_MORE, CLEAR_LIST, SEARCH_END, SEARCH_START, SET_SEARCH } from '../actions/siteActions';

const initialState = {
    list: [],
    isLoading: false,
    canLoadMore: false,
    searchString: 'love',
};

const sitesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_START:
            chayns.showWaitCursor();
            return {
                ...state,
                isLoading: true,
                canLoadMore: false,
            };
        case SEARCH_END:
            chayns.hideWaitCursor();
            return {
                ...state,
                list: state.list.concat(action.payload),
                isLoading: false,
            };
        case CLEAR_LIST:
            return {
                ...state,
                list: [],
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
