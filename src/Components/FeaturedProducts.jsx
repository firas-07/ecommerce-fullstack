import { Link } from "react-router-dom"
import { ProductItems } from "../utils/Products"
function FeaturedProducts() {
    return (
        <div className="mt-10">
            <h1 className="text-2xl font-bold">Featured Collection</h1>
            <div className="grid grid-cols-2 grid-rows-5 gap-2 md:grid-cols-5 md:grid-rows-2 md:gap-5">
                {
                    ProductItems.map(function (item) {
                        return (
                            <div className="flex flex-col gap-2 bg-white w-fit p-5 mt-5 cursor-pointer">
                                <img src={item.img} alt="" className="w-fit" style={{ height: "50%" }} />
                                <Link to={`/${item.name}`}><b className="">{item.brand}</b></Link>
                                <Link to={`/${item.name}`}><p className="text-xs">{item.description}</p></Link>
                                <p>{item.rating}</p>
                                <p> <s>{item.currentPrice}</s> {item.offerPrice} </p>
                                <div className="flex gap-2">
                                    <button style={{ backgroundColor: "#00786f" }} className="text-white p-1 text-xs rounded-l" >Buy Now</button>
                                    <button style={{ backgroundColor: "#00786f" }} className="text-white p-1 text-xs rounded-l" >Add to Cart</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default FeaturedProducts