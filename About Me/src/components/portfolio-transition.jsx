import { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

function portfolioTransition() {
    const [showFirstProject, setShowFirstProject] = useState(true);

    const toggleProject = () => {
        setShowFirstProject(!showFirstProject)
    };

    return (
        <div className='d-flex flex-column align-items-center ms-3'>
            {showFirstProject ? (
                <img src="./images/ichooseyou.png" alt="pokemon" className="mb-3 shadow" />
            ):(<img src="./img/wagerless.png" alt="developer's pic" className="mb-3 shadow" />)}
            <div className='d-flex'>
                <button>

                </button>

            </div>
        </div>
    )
}