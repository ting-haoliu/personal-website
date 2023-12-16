import { useId, useState } from 'react';
import Button from './Button';

import '../styles/FormStyles.css'

function ContactForm({ onContact }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('');
    const [otherGender, setOtherGender] = useState('');
    const [message, setMessage] = useState('');
    const id = useId();

    const [nameIsMissing, setNameIsMissing] = useState(false);
    const [emailIsMissing, setEmailIsMissing] = useState(false);
    const [messageIsMissing, setMessageIsMissing] = useState(false);

    function nameIsValid(name) {
        return !!name;
    }

    function emailIsValid(email) {
        return !!email;
    }

    function messageIsValid(message) {
        return !!message;
    }

    return (
        <form
            className="contact__form"
            onSubmit={
                (e) => {
                    e.preventDefault();
                    setNameIsMissing(!nameIsValid(name));
                    setEmailIsMissing(!emailIsValid(email));
                    setMessageIsMissing(!messageIsValid(message));

                    if (nameIsValid(name) && emailIsValid(email) && messageIsValid(message)) {
                        onContact(name, email, gender, otherGender, message);
                    }
                }
            }
        >
            <label htmlFor={`${id}-name`}>Name*</label>
            {nameIsMissing && <span className='contact__form--error'>Name is required</span>}
            <input
                id={`${id}-name`}
                value={name}
                onInput={(e) => {
                    setName(e.target.value);
                    setNameIsMissing(!nameIsValid(e.target.value));
                }}
            />

            <label htmlFor={`${id}-email`}>Email*</label>
            {emailIsMissing && <span className='contact__form--error'>Email is required</span>}
            <input
                id={`${id}-email`}
                value={email}
                onInput={(e) => {
                    setEmail(e.target.value);
                    setEmailIsMissing(!emailIsValid(e.target.value));
                }}
            />

            <label htmlFor={`${id}-gender`}>Gender</label>
            <select
                id={`${id}-gender`}
                value={gender}
                onChange={(e) => {
                    setGender(e.target.value);
                }}
            >
                <option value="N/A" key="N/A"></option>
                <option value="male" key="male">Male</option>
                <option value="female" key="female">Female</option>
                <option value="other" key="other">Other</option>
            </select>

            {gender === "other" && (
                <>
                    <input
                        value={otherGender}
                        onChange={(e) => setOtherGender(e.target.value)}
                    />
                </>
            )}

            <label htmlFor={`${id}-message`}>Message*</label>
            {messageIsMissing && <span className='contact__form--error'>Message is required</span>}
            <textarea
                id={`${id}-message`}
                value={message}
                cols="30"
                rows="10"
                onInput={(e) => {
                    setMessage(e.target.value);
                    setMessageIsMissing(!messageIsValid(e.target.value));
                }}
            />
            <span className='contact__form--error'>*This field is required</span>
            <Button
                className="contact__form--submit"
                type='submit'
                visual='link'
            >
                Submit
            </Button>
        </form>
    );
}

export default ContactForm;