import { useState } from 'react';

import ContactForm from './ContactForm';
import Modal from './Modal';

import '../styles/ContactStyles.css'

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('');
    const [message, setMessage] = useState('');
    const [otherGender, setOtherGender] = useState('');

    function onContact(name, email, gender, otherGender, message) {
        setName(name);
        setEmail(email);
        setGender(gender);
        setMessage(message);
        setOtherGender(otherGender);
        console.log(name);
        console.log(email);
        console.log(gender);
        console.log(otherGender);
        console.log(message);
    }

    return (
        <div id="contact" className="contact">
            <div className='contact__info'>
                <h2 className='contact__info--title'>Contact Me</h2>
                <p className='contact__info--text'>
                    Phone:&nbsp;206-396-6244
                </p>
                <p className='contact__info--text'>
                    Email:&nbsp;
                    <a href="mailto:s0129qkak@outlook.com">
                        s0129qkak@outlook.com
                    </a>
                </p>
                <p className='contact__info--text'>
                    Github:&nbsp;
                    <a href="https://github.com/ting-haoliu">
                        Github of Adam Liu
                    </a>
                </p>
                <p className='contact__info--text'>
                    Linkedin:&nbsp;
                    <a href="https://www.linkedin.com/feed/">
                        Linkedin of Adam Liu
                    </a>
                </p>
                <Modal />
            </div>
            <ContactForm onContact={onContact} />
        </div>
    );
}

export default Contact;