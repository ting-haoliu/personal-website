import Card from './Card';
import Card1_img from '../assets/Card1_img.png';
import Card2_img from '../assets/Card2_img.png';
import Card3_img from '../assets/Card3_img.png';

import '../styles/ProjectStyles.css'

function Project() {
    return (
        <>
            <div id="project" className="project">
                <h2 className='project__title'>Projects</h2>
                <div className='cardContainer'>
                    <Card
                        className="project__card"
                        title="Medical System"
                        pic={Card1_img}
                        alt="A picture"
                        text="Use Java Swing to make a System, which included functions of create, read, update and delete datas"
                    />
                    <Card
                        className="project__card"
                        title="Personal Web"
                        pic={Card2_img}
                        alt="A picture"
                        text="Use React.js to make a Static Webpage, which included self introduction, projects and contact method."
                    />
                    <Card
                        className="project__card"
                        title="Responsive Web"
                        pic={Card3_img}
                        alt="A picture"
                        text="Use HTML, CSS and Javascript to make a Responsive Web, which show cards, panels and register menu."
                    />
                </div>
            </div>
        </>
    );
}

export default Project;