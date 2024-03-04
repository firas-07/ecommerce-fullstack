import Navigation from "../../utils/Navigation"
import product3 from "../../Assets/images/product3.png"
function Tv() {
    return (
        <div>
            <Navigation />
            <div className="md:mt-16 p-10 md:flex md:justify-around">
                <div className="mt-24 pb-14 px-5 w-fit">
                    <img src={product3} alt=""/>
                    <button className="text-white mt-5 p-2 text-sm md:p-3 md:text-xl font-bold ml-5 rounded-xl" style={{ backgroundColor: "#00786f" }}> <i class="fa-solid fa-cart-shopping"></i> Add to Cart</button>
                    <button className="text-white mt-5 p-2 px-5 text-sm md:p-3 md:px-8 md:text-xl font-bold ml-5 rounded-xl" style={{ backgroundColor: "#00786f" }}> <i class="fa-solid fa-bolt-lightning"></i> Buy Now</button>
                </div>
                <div className="md:mt-36 md:text-xl text-sm flex flex-col gap-3 md:w-96">
                    <p>SAMSUNG Crystal Vision 4K iSmart with Voice Assistant 108 cm (43 inch) Ultra HD (4K) LED Smart Tizen TV 2023 Edition with IOT Sensors for Light & Camera  (UA43CUE70AKLXL)
                        You can enjoy unlimited entertainment at the comfort of your home with this smart TV. The PurColour technology of this TV delivers vibrant and lifelike picture quality with its wide range of colours. </p>
                    <p>⭐⭐⭐⭐ <span className="text-sm">45,345 Ratings & 1213 Reviews</span></p>
                    <p className="font-semibold text-green-700">Special Price</p>
                    <p><span className="text-3xl">₹31,990</span> <s className="mx-2">₹54,000 </s> <b className="text-green-800">41% off</b> </p>
                </div>
            </div>
        </div>
    )
}
export default Tv