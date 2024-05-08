import NavOptions from "../Navbar"
import '../aboutme.css';
import Footer from "../Footer";

export default function AboutMe() {

    return(
        <>

        <NavOptions/>
        <iframe src="https://giphy.com/embed/CY3A9zOlZR8uhFbeok" width="480" height="278" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/TOEIAnimationUK-goku-dragon-ball-super-ultra-instinct-CY3A9zOlZR8uhFbeok"></a></p>

        <div class="aboutme">
    <div class="container mt-5">
        <div class="row justify-content-between">
            
                <div class="boxborder bg-light border mb-4">
                    <h5 class="text-center">About Me</h5>
                    Outside of coding, I'm an avid powerlifter and a coffee addict 
                </div>
             
                <div class="boxborder bg-light border mb-4">
                    <h5 class="text-center"></h5>
                    I am an inspiring coder, who underwent a 6-month bootcamp to learn the fundamentals of full-stack development. I am proficient in both backend and front end development and continue to enjoy improving my arsenal of skills in the world of coding.

                   <p>Future learning aspect:
                    TypeScript, Svylette, Next.Js
                   </p>
                   
                </div>
            
            
            
        </div>
    </div>
</div>
    <Footer />
        
       </>
    )
}