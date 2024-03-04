import Navigation from "../../utils/Navigation"
import fashion8 from "../../Assets/images/fashion8.png"
function ReebookTshirt() {
    return (
        <div>
            <Navigation />
            <div className="md:mt-16 p-10 md:flex md:justify-around">
                <div className="mt-24 pb-14 px-5 w-fit">
                    <img src={fashion8} alt="" className="md:ml-20 md:w-96 w-80"/>
                    <button className="text-white mt-5 p-2 text-sm md:p-3 md:text-xl font-bold ml-5 md:ml-16 rounded-xl" style={{ backgroundColor: "#00786f" }}> <i class="fa-solid fa-cart-shopping"></i> Add to Cart</button>
                    <button className="text-white mt-5 p-2 px-5 text-sm md:p-3 md:px-8 md:text-xl font-bold ml-5 rounded-xl" style={{ backgroundColor: "#00786f" }}> <i class="fa-solid fa-bolt-lightning"></i> Buy Now</button>
                </div>
                <div className="md:mt-36 md:text-xl text-sm flex flex-col gap-3 md:w-96">
                    <p>Reebook Men Tshirt Better Cotton:Our Cotton Products Support Sustainable Cotton Farming. This Is Part Of Our Ambition To End Plastic Waste . Better Cotton:Our Cotton Products Support Sustainable Cotton Farming. This Is Part Of Our Ambition To End Plastic Waste . Fit:Regular . Fit:Regular . Logo Execution & Placement:Bos Print Along The Sleeve . Logo Execution & Placement:Badge Of Sport On Chest .</p>
                    <p>⭐⭐⭐⭐ <span className="text-sm">345 Ratings & 13 Reviews</span></p>
                    <p className="font-semibold text-green-700">Special Price</p>
                    <p><span className="text-3xl">₹999</span> <s className="mx-2">₹2,000 </s> <b className="text-green-800">10% off</b> </p>
                </div>
            </div>
        </div>
    )
}
export default ReebookTshirt