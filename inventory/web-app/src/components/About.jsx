import Panel from './Panel';
import Panel_img from '../assets/Panel_img.jpg'

import '../styles/AboutStyles.css'

function About() {
    return (
        <div id='about' className='about'>
            <h2 className='about__title'>About Me!</h2>
            <Panel
                className='about__panel'
                pic={Panel_img}
                alt="This is an image for the Panel"
                text1="My name is Adam Liu, I am a student from Northeastern University Seattle,
                and my major is Information System."
                text2="I'm self-taught and believe that an
                excellent engineer should have a spirit of continuous learning and be able
                to apply what they have learned in practice, as well as have good observation
                skills in order to create user-friendly products."
            />
        </div>
    );
}

export default About;