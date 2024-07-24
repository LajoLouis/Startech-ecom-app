import { BsFillTrashFill } from "react-icons/bs";
import { useContext } from "react";
import EcomContext from "../../context/EcomContext";
import { Link } from "react-router-dom";

function Cart() {
  const { cartItems, updateQuantity, totalAmount, deleteItem } =
    useContext(EcomContext);

  const cartTable = (
    <div>
      <div className="m-auto overflow-auto shadow-xl shadow-blue-950 rounded-[15px] bg-[#f5f5f5]">
        <table className="w-[95%] mx-auto ">
          <thead className="">
            <th className="p-[20px]">Action</th>
            <th className="p-[20px]">Name</th>
            <th className="p-[20px]">Img</th>
            <th className="p-[20px]">Price</th>
            <th className="p-[20px]">Quantity</th>
            <th className="p-[20px]">Amount</th>
          </thead>
          <tbody className="text-center">
            {cartItems.products?.map((item) => (
              <tr className="border-b-2" key={item._id}>
                <td>
                  <button onClick={() => deleteItem(item.product._id)}>
                    <BsFillTrashFill className="text-2xl flex text-blue-950" />
                  </button>
                </td>
                <td>{item.product.name}</td>
                <td className="w-[200px]">
                  <img
                    src={"https://startech-backend-60s5.onrender.com" + item.product.img}
                    alt=""
                    className="h-[70px] w-full"
                  />
                </td>
                <td>₦{item.product.price}</td>
                <td>
                  <input
                    type="number"
                    value={item.quantity}
                    min={1}
                    className="outline outline-1 outline-blue-950 rounded-[10px] p-[10px]"
                    onChange={(e) =>
                      updateQuantity(item.product._id, e.target.value)
                    }
                  />
                </td>
                <td>₦{item.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex flex-col justify-between mt-[3%] items-center space-y-4 font-extrabold font-serif">
        <div>
          <p className="text-xl">Total Amount: ₦{totalAmount()}</p>
        </div>
        <div>
          <Link to="/checkout">
            <button className="bg-blue-950 text-white p-[10px] rounded-lg">
              Checkout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
  return (
    <div className="my-[5%] mx-[7%]">
      <h1 className="text-center font-bold text-3xl mb-[5%]">Your Shop Cart</h1>
      {cartItems.products?.length > 0 ? (
        cartTable
      ) : (
        <p className="text-center">No Item in Cart!!!</p>
      )}
    </div>
  );
}

export default Cart;
