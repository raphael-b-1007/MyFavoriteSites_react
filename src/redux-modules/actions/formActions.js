export const SET_FIRSTNAME = 'SET_FIRSTNAME';
export const SET_LASTNAME = 'SET_LASTNAME';
export const SET_EMAIL = 'SET_EMAIL';
export const SET_ADDRESS = 'SET_ADDRESS';
export const SET_ZIPCODE = 'SET_ZIPCODE';
export const SET_CITY = 'SET_CITY';
export const SET_SITE_NAME = 'SET_SITE_NAME';
export const SET_SITE_COMMENT = 'SET_SITE_COMMENT';
export const SUBMIT_FORM = 'SUBMIT_FORM';

export const setFirstName = (firstName) => ({
    type: SET_FIRSTNAME,
    payload: firstName,
});

export const setLastName = (lastName) => ({
    type: SET_LASTNAME,
    payload: lastName,
});

export const setEMail = (eMail) => ({
    type: SET_EMAIL,
    payload: eMail,
});

export const setAddress = (address) => ({
    type: SET_ADDRESS,
    payload: address,
});

export const setZipCode = (zipCode) => ({
    type: SET_ZIPCODE,
    payload: zipCode,
});

export const setCity = (city) => ({
    type: SET_CITY,
    payload: city,
});

export const setSite = (siteName) => ({
    type: SET_SITE_NAME,
    payload: siteName,
});

export const setComment = (comment) => ({
    type: SET_SITE_COMMENT,
    payload: comment,
});

export const submit = () => ({
    type: SUBMIT_FORM,
});

export const setUserFirstName = (firstName) => (dispatch) => {
    dispatch(setFirstName(firstName));
};

export const setUserLastName = (lastName) => (dispatch) => {
    dispatch(setLastName(lastName));
};

export const setUserEMail = (eMail) => (dispatch) => {
    dispatch(setEMail(eMail));
};

export const setUserAddress = (address) => (dispatch) => {
    dispatch(setAddress(address));
};

export const setUserZipCode = (zipCode) => (dispatch) => {
    dispatch(setZipCode(zipCode));
};

export const setUserCity = (city) => (dispatch) => {
    dispatch(setCity(city));
};

export const setSiteName = (siteName) => (dispatch) => {
    dispatch(setSite(siteName));
};

export const setSiteComment = (comment) => (dispatch) => {
    dispatch(setComment(comment));
};

export const submitForm = () => (dispatch, getState) => {
    const message = `Eine Seite wurde vorgeschlagen: ${getState().form.siteName} \n
        Von: ${getState().form.firstName} ${getState().form.lastName} \n
        E-Mail: ${getState().form.eMail} \n
        Adresse: ${getState().form.address} ${getState().form.zipCode} ${getState().form.city} \n
        Anmerkung: ${getState().form.comment}`;
    chayns.intercom.sendMessageToPage({
        text: message,
    }).then((data) => {
        if (data.status === 200) chayns.dialog.alert('', `Vielen Dank, ${chayns.env.user.firstName}`);
    });
    dispatch(submit());
};
