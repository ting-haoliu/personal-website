import { useRef, useState } from "react";

import ContactForm from "./ContactForm";
import Button from './Button';

function Modal() {
    const dialogRef = useRef();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('');
    const [otherGender, setOtherGender] = useState('');
    const [message, setMessage] = useState('');


    function onContact(name, email, gender, otherGender, message) {
        setName(name);
        setEmail(email);
        setGender(gender);
        setOtherGender(otherGender);
        setMessage(message);
    }

    return (
        <div className="modal__container">
            <Button
                className='contact__form--open'
                onClick={
                    () => {
                        dialogRef.current.showModal();
                    }
                }
            >
                Send me a message!
            </Button >
            <dialog
                className="contact__form--modal"
                ref={dialogRef}
            >
                <Button
                    className="contact__form--close"
                    onClick={() => dialogRef.current.close()}
                >
                    X
                </Button>
                <ContactForm onContact={onContact} />
                {name && <p>Hello, {name}</p>}
                {email && <p>Your Email is {email}</p>}
                {gender && <p>Gender is {`${gender === "other" ? otherGender : gender}`}</p>}
                {message && <p>Message is {message}</p>}
            </dialog>
        </div>
    );
}

export default Modal;