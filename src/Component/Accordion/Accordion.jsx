import { useState } from "react";
import "./style.scss"

const Accordion = (props) => {
    const [isOpen, setIsOpen] = useState(false)
    const { title, content } = props

    return (
        <div className="accordion">
            <div className="accordion__top" onClick={() => setIsOpen(!isOpen)}>
                <span>{title}</span>
                <img className={isOpen ? 'active' : ''} src="/top.svg" alt="Fleche vers le haut" />
            </div>
            <div className={"accordion__bottom " + (isOpen ? 'open' : '')}>
                {Array.isArray(content) ? content.map(element => (
                    <p>{element}</p>
                )) : content}
            </div>
        </div>
    );
};

export default Accordion;