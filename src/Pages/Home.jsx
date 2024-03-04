import Carousel from "../Components/Carousel"
import Navigation from "../utils/Navigation"
import Service from "../Components/Service"
import Footer from "../utils/Footer"

function Home(){
    return(
        <div>
            <Navigation/>
            <Carousel/>
            <Service/>
            <Footer/>
        </div>
    )
}
export default Home