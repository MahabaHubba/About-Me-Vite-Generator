import { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import './portfolio-transition.css'

function PortfolioTransition() {
    const [showFirstProject, setShowFirstProject] = useState(true);

    const toggleProject = () => {
        setShowFirstProject(!showFirstProject)
    };

    return (
        <div className='project d-flex flex-column align-items-center ms-3'>
            {showFirstProject ? (
                <img src="./images/ichooseyou.png" alt="pokemon" className="mb-3 shadow" />
            ):(<img src="./images/wagerless.png" alt="project-2" className="mb-3 shadow" />)}
            <div className='d-flex'>
                <button onClick={toggleProject} className='btn btn-link'>
                    <FaArrowLeft className="arrow-left" />
                </button>
                <button onClick={toggleProject} className='btn btn-link'>
                    <FaArrowRight className='arrow-right' />
                </button>
            </div>
        </div>
    )
}

export default PortfolioTransition;