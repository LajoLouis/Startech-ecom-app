import { useContext } from "react";
import EcomContext from "../context/EcomContext";
import Production from "./Production";

function TopSelling() {
    const {topSelling} = useContext(EcomContext)
  return (
    <div className="mx-[5%]">
        <h1 className="py-[10px] text-2xl font-bold text-center">Top Selling Products</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-4">
            {topSelling.map((item)=>(
                <Production item={item} key={item._id}/>
            ))}
        </div>
    </div>
  )
}

export default TopSelling