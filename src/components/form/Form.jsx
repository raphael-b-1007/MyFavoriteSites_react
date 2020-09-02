import React, { useState, useEffect } from 'react';
import { Accordion, Input, TextArea, Button } from 'chayns-components/lib';
import './form.scss';

function Form() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [eMail, setEMail] = useState('');
    const [address, setAddress] = useState('');
    const [areaCode, setAreaCode] = useState('');
    const [city, setCity] = useState('');
    const [siteName, setSiteName] = useState('');
    const [comment, setComment] = useState('');

    useEffect(() => {
        if (chayns.env.user.isAuthenticated) {
            setFirstName(chayns.env.user.firstName);
            setLastName(chayns.env.user.lastName);
        }
    }, []);

    function sendForm() {
        const message = `Eine Seite wurde vorgeschlagen: ${siteName} \n
        Von: ${firstName} ${lastName} \n
        E-Mail: ${eMail} \n
        Adresse: ${address} ${areaCode} ${city} \n
        Anmerkung: ${comment}`;
        chayns.intercom.sendMessageToPage({
            text: message,
        }).then((data) => {
            if (data.status === 200) chayns.dialog.alert('', `Vielen Dank, ${chayns.env.user.firstName}`);
        });
        setEMail('');
        setAddress('');
        setAreaCode('');
        setCity('');
        setSiteName('');
        setComment('');
    }

    function submit() {
        if (chayns.env.user.isAuthenticated) {
            sendForm();
        } else {
            chayns.addAccessTokenChangeListener(sendForm);
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
                            onChange={setFirstName}
                            className="formItem"
                            required
                            dynamic
                        />
                        <Input
                            placeholder="Nachname"
                            value={lastName}
                            onChange={setLastName}
                            className="formItem"
                            required
                            dynamic
                        />
                        <Input
                            placeholder="E-Mail"
                            value={eMail}
                            onChange={setEMail}
                            className="formItem"
                            required
                            dynamic
                        />
                        <Input
                            placeholder="Straße/Hausnummer"
                            value={address}
                            onChange={setAddress}
                            className="formItem"
                        />
                        <div className="twoItems">
                            <Input
                                placeholder="PLZ"
                                value={areaCode}
                                onChange={setAreaCode}
                                className="smallItem formItem"
                            />
                            <Input
                                placeholder="Ort"
                                value={city}
                                onChange={setCity}
                                className="formItem"
                            />
                        </div>
                        <Input
                            placeholder="Deine Seite"
                            value={siteName}
                            onChange={setSiteName}
                            className="formItem"
                            required
                            dynamic
                        />
                        <TextArea
                            placeholder="Anmerkungen"
                            value={comment}
                            onChange={setComment}
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
