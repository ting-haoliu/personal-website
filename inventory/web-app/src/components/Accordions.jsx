import AccordionDatas from '../datas/AccordionData';
import Button from './Button';

function Accordions({ className }) {
    {
        AccordionDatas.map(item => {
            return (
                <div className={className} key={item.question}>
                    <Button className={`${className}--title`}>
                        {item.question}
                    </Button>
                    <div className={`${className}--content`}>
                        <a className={`${className}--link`} href={item.path}>
                            {item.answer}
                        </a>
                    </div>
                </div>
            );
        })
    };
}

export default Accordions;