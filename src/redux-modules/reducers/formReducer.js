import {
    SET_ADDRESS,
    SET_CITY,
    SET_EMAIL,
    SET_FIRSTNAME,
    SET_LASTNAME,
    SET_SITE_COMMENT,
    SET_SITE_NAME,
    SET_ZIPCODE,
    SUBMIT_FORM,
} from '../actions/formActions';

const initialState = {
    firstName: '',
    lastName: '',
    eMail: '',
    address: '',
    zipCode: '',
    city: '',
    siteName: '',
    comment: '',
};

const formReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FIRSTNAME:
            return {
                ...state,
                firstName: action.payload,
            };
        case SET_LASTNAME:
            return {
                ...state,
                lastName: action.payload,
            };
        case SET_EMAIL:
            return {
                ...state,
                eMail: action.payload,
            };
        case SET_ADDRESS:
            return {
                ...state,
                address: action.payload,
            };
        case SET_ZIPCODE:
            return {
                ...state,
                zipCode: action.payload,
            };
        case SET_CITY:
            return {
                ...state,
                city: action.payload,
            };
        case SET_SITE_NAME:
            return {
                ...state,
                siteName: action.payload,
            };
        case SET_SITE_COMMENT:
            return {
                ...state,
                comment: action.payload,
            };
        case SUBMIT_FORM:
            return initialState;
        default:
            return state;
    }
};

export default formReducer;
