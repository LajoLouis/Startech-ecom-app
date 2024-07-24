import { useContext } from "react";
import EcomContext from "../../context/EcomContext";
import Production from "../Production";

function Products() {
    const {product} = useContext(EcomContext)
  return (
    <div className="mx-[5%] bg-[url('/img/psbg2.jpg')] bg-center bg-opacity-15 ">
        <h1 className="py-[10px] text-xl font-bold font-serif">All Products</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-4">
            {product?.map((item)=>(
                <Production item={item} key={item._id}/>
            ))}
        </div>
    </div>
  )
}


export default Products