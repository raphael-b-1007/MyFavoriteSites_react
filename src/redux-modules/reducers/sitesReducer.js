import { SEARCH_END, SEARCH_START } from '../actions/siteActions';

const initialState = {
    list: [],
    isLoading: false,
    nextList: [],
    canLoadMore: true,
};

const sitesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_START:
            return {
                ...state,
                list: [],
                isLoading: true,
                nextList: [],
            };
        case SEARCH_END:
            return {
                ...state,
                canLoadMore: action.payload.length === 31,
                list: state.list.concat(action.payload.slice(0, 30)),
            };
        default:
            return state;
    }
};

export default sitesReducer();
