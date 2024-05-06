import NavOptions from "../Navbar"
import '../aboutme.css';

export default function AboutMe() {

    return(
        <>

        <NavOptions/>

        <div className="aboutme">
        <div class="container mt-5 ">
        <div class="d-flex">
            <div className="boxborder" class="flex-grow-1 bg-light border mx-2">
                <h5 class="text-center">About Me</h5>
                Outside of coding, Im an avid powerlifter and a coffee addict 
            </div>
            <div className="boxborder" class="flex-grow-1 bg-light border ">
                <h5 class="text-center"></h5>
                I am an inspiring coder, who underwent a 6 month bootcamp to learn the fundamentals of full stack development.
                I am proficient in both backend and front end development and continue to enjoy improving my arsenal of skills in the world of coding
            </div>
        </div>
    </div>
    </div>
        
       </>
    )
}