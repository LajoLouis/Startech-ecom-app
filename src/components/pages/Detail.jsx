import { useContext } from "react";
import { useParams } from "react-router-dom";
import EcomContext from "../../context/EcomContext";

function Detail() {
    const param = useParams()
    const shoeid = param.id
    const {addToCart , product} = useContext(EcomContext)
    const shoeItem = product.find((item)=> (item._id) === (shoeid))
  return (
    <div className='flex xs:flex-col md:flex-row px-[5%] py-[3%] justify-between space-x-4'>
        <div className="m-auto xs:w-[90%] md:w-[50%]">
            <img src={"https://startech-backend-60s5.onrender.com"+ shoeItem?.img} alt=""  className='h-[400px] w-[400px] rounded-lg'/>
        </div>
        <div className='xs:w-[70%] xs:mx-auto md:w-[50%]'>
            <h2 className='text-2xl font-bold mb-[10px] border-b-2'>{shoeItem?.name}</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem consequatur repudiandae a, dolores velit suscipit nostrum animi voluptatum explicabo mollitia.</p>
            <p className='py-3 text-xl font-bold'>₦{shoeItem?.price}</p>
            <p className='mb-[10px]'>Category: <span className='text-blue-950 italic font-bold'>{shoeItem?.category.name}</span></p>
            <button className='bg-blue-950 text-white rounded p-[10px]' onClick={()=> addToCart({...shoeItem, quantity: 1})}>
                Add to Cart
            </button>
        </div>
    </div>
  )
}

export default Detail