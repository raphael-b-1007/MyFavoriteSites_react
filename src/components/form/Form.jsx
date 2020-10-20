import React, { useEffect } from 'react';
import { Accordion, Input, TextArea, Button } from 'chayns-components/lib';
import './form.scss';
import { useDispatch, useSelector } from 'react-redux';
import {
    setSiteComment, setSiteName,
    setUserAddress, setUserCity,
    setUserEMail,
    setUserFirstName,
    setUserLastName,
    setUserZipCode, submitForm,
} from '../../redux-modules/actions/formActions';

function Form() {
    const dispatch = useDispatch();
    const firstName = useSelector((state) => state.form.firstName);
    const lastName = useSelector((state) => state.form.lastName);
    const eMail = useSelector((state) => state.form.eMail);
    const address = useSelector((state) => state.form.address);
    const zipCode = useSelector((state) => state.form.zipCode);
    const city = useSelector((state) => state.form.city);
    const siteName = useSelector((state) => state.form.siteName);
    const comment = useSelector((state) => state.form.comment);

    useEffect(() => {
        if (chayns.env.user.isAuthenticated) {
            dispatch(setUserFirstName(chayns.env.user.firstName));
            dispatch(setUserLastName(chayns.env.user.lastName));
        }
    }, []);

    function submit() {
        if (chayns.env.user.isAuthenticated) {
            dispatch(submitForm());
        } else {
            chayns.addAccessTokenChangeListener(() => (dispatch(submitForm())));
            chayns.login();
        }
    }

    return (
        <div>
            <Accordion head="Deine Seite fehlt noch?">
                <div className="accordion__content">
                    <form>
                        <Input
                            placeholder="Vorname"
                            value={firstName}
                            onChange={(value) => (dispatch(setUserFirstName(value)))}
                            className="formItem"
                            required
                            dynamic
                        />
                        <Input
                            placeholder="Nachname"
                            value={lastName}
                            onChange={(value) => (dispatch(setUserLastName(value)))}
                            className="formItem"
                            required
                            dynamic
                        />
                        <Input
                            placeholder="E-Mail"
                            value={eMail}
                            onChange={(value) => (dispatch(setUserEMail(value)))}
                            className="formItem"
                            required
                            dynamic
                        />
                        <Input
                            placeholder="Straße/Hausnummer"
                            value={address}
                            onChange={(value) => (dispatch(setUserAddress(value)))}
                            className="formItem"
                        />
                        <div className="twoItems">
                            <Input
                                placeholder="PLZ"
                                value={zipCode}
                                onChange={(value) => (dispatch(setUserZipCode(value)))}
                                className="smallItem formItem"
                            />
                            <Input
                                placeholder="Ort"
                                value={city}
                                onChange={(value) => (dispatch(setUserCity(value)))}
                                className="formItem"
                            />
                        </div>
                        <Input
                            placeholder="Deine Seite"
                            value={siteName}
                            onChange={(value) => (dispatch(setSiteName(value)))}
                            className="formItem"
                            required
                            dynamic
                        />
                        <TextArea
                            placeholder="Anmerkungen"
                            value={comment}
                            onChange={(value) => (dispatch(setSiteComment(value)))}
                            className="formItem"
                        />
                        <div className="centered formItem">
                            {firstName && lastName && eMail && siteName
                                ? <Button onClick={() => { submit(); }}>Hinzufügen</Button>
                                : <Button disabled>Hinzufügen</Button>}
                        </div>
                    </form>
                </div>
            </Accordion>
        </div>
    );
}
export default Form;
