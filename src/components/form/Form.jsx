import React, { useEffect } from 'react';
import { Accordion, Input, TextArea, Button } from 'chayns-components/lib';
import './form.scss';
import { useDispatch, useSelector } from 'react-redux';
import {
    setAddress, setCity,
    setEMail,
    setFirstName, setLastName, setSite,
    setZipCode, submitForm,
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
            dispatch(setFirstName(chayns.env.user.firstName));
            dispatch(setLastName(chayns.env.user.lastName));
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
                            onChange={(value) => (dispatch(setFirstName(value)))}
                            className="formItem"
                            required
                            dynamic
                        />
                        <Input
                            placeholder="Nachname"
                            value={lastName}
                            onChange={(value) => (dispatch(setLastName(value)))}
                            className="formItem"
                            required
                            dynamic
                        />
                        <Input
                            placeholder="E-Mail"
                            value={eMail}
                            onChange={(value) => (dispatch(setEMail(value)))}
                            className="formItem"
                            required
                            dynamic
                        />
                        <Input
                            placeholder="Straße/Hausnummer"
                            value={address}
                            onChange={(value) => (dispatch(setAddress(value)))}
                            className="formItem"
                        />
                        <div className="twoItems">
                            <Input
                                placeholder="PLZ"
                                value={zipCode}
                                onChange={(value) => (dispatch(setZipCode(value)))}
                                className="smallItem formItem"
                            />
                            <Input
                                placeholder="Ort"
                                value={city}
                                onChange={(value) => (dispatch(setCity(value)))}
                                className="formItem"
                            />
                        </div>
                        <Input
                            placeholder="Deine Seite"
                            value={siteName}
                            onChange={(value) => (dispatch(setSite(value)))}
                            className="formItem"
                            required
                            dynamic
                        />
                        <TextArea
                            placeholder="Anmerkungen"
                            value={comment}
                            onChange={(value) => (dispatch(setSite(value)))}
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
