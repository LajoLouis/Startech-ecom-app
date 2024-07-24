import { useContext } from "react";
import EcomContext from "../../context/EcomContext";

function Checkout() {
  const { cartItems, totalAmount } = useContext(EcomContext);

  const handleCheckout = async (e) => {
    e.preventDefault();

    const amount = totalAmount();
    const currency = "NGN";
    const firstName = e.target.elements.firstName.value;
    const lastName = e.target.elements.lastName.value;
    const phone = e.target.elements.phone.value;
    const address = e.target.elements.address.value;

    try {
      const res = await fetch("https://startech-backend-60s5.onrender.com/api/payment/initiate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": `${localStorage.getItem("auth-token")}`,
        },
        body: JSON.stringify({
          amount,
          currency,
          firstName,
          lastName,
          phone,
          address,
        }),
      });
      const data = await res.json();
      if (res.ok) {
        window.location.href = data.link;
      } else {
        console.error(data.msg || "Failed to intitiate payment");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="flex xs:flex-col md:flex-row xs:w-[95%] md:w-[80%] mx-auto justify-around my-[5%] space-x-8 space-y-7">
        <div className="xs:w-[95%] md:w-[50%] overflow-auto shadow-xl shadow-blue-950 rounded-[15px] bg-[#f5f5f5]">
          <table className="w-[90%] mx-auto">
            <thead>
              <th>Name</th>
              <th>Img</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Amount</th>
            </thead>
            <tbody className="text-center">
              {cartItems.products?.map((item) => (
                <tr className="border-b-2" key={item._id}>
                  <td>{item.product?.name}</td>
                  <td className="w-[100px]">
                    <img
                      src={"https://startech-backend-60s5.onrender.com" + item.product?.img}
                      alt=""
                      className="h-[70px] w-full"
                    />
                  </td>
                  <td>₦{item.product?.price}</td>
                  <td>{item.quantity}</td>
                  <td>₦{item.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-center my-[3%] font-extrabold font-serif">
            <div>
              <p className="text-xl">Total Amount: ₦{totalAmount()}</p>
            </div>
          </div>
        </div>
        <div className="xs:w-[80%] md:w-[50%] overflow-auto shadow-xl shadow-blue-950 rounded-[15px] bg-[#f5f5f5]  px-2">
          <h1 className="text-center mb-[10px] text-2xl font-bold">
            Delivery Information
          </h1>
          <form onSubmit={(e) => handleCheckout(e)}>
            <div className="mb-3">
              <input
                type="text"
                name="firstName"
                className=" w-full p-[10px] border-b-[1px] shadow-sm border-stone-500 bg-blue-200 bg-opacity-25 font-bold "
                placeholder="First Name"
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                name="lastName"
                className=" w-full p-[10px] border-b-[1px] shadow-sm border-stone-500 bg-blue-200 bg-opacity-25 font-bold "
                placeholder="Last Name"
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                name="phone"
                className=" w-full p-[10px] border-b-[1px] shadow-sm border-stone-500 bg-blue-200 bg-opacity-25 font-bold "
                placeholder="Phone Number"
              />
            </div>
            <div>
              <textarea
                name="address"
                id=""
                className=" w-full p-[10px] border-b-[1px] shadow-sm border-stone-500 bg-blue-200 bg-opacity-25 font-bold "
                placeholder="Delivery Address"
              ></textarea>
            </div>
            <div className="text-center my-6">
              <button className="bg-blue-950 p-[10px] text-white rounded-lg ">
                Pay Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
