import NavOptions from "../Navbar"
import Footer from "../Footer"
// import '../portfolio.css'
import PortfolioTransition from "../portfolio-transition"

export default function Portfolio() {
    return(
        <>
        <NavOptions/>
        <div class="portfolio">
    <div class="container mt-5">
        <div class="row justify-content-between">
            
                <div class="boxborder bg-light border mb-4">
                    <h5 class="text-center">Portfolio</h5>
                </div>
                <div className="img" class="boxborder bg-light border mb-4">
             <PortfolioTransition />
             </div>
        </div>
    </div>
</div>
        <Footer />
       </>
    )
}