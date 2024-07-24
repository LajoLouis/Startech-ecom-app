import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import EcomContext from "../context/EcomContext";

function Production({ item }) {
  const { addToCart, isAuthenticated } = useContext(EcomContext);
  const redirect = useNavigate();

  const login = () => {
    if (!isAuthenticated) {
      redirect("/login");
    }
  };

  return (
    <div className="xs:mx-auto m-5 border-2 border-none w-max rounded-lg shadow-lg shadow-blue-400 transform hover:scale-110 transition ease duration-700 bg-[#f5f5f5]">
      <Link to={`/detail/${item._id}`}>
        <img
          src={"https://startech-backend-60s5.onrender.com/" + item.img}
          alt=""
          className="h-[200px] w-[200px] rounded-lg opacity-90"
        />
      </Link>
      <div className="text-center my-5">
        <p className="text-xl font-extrabold font-mono">{item.name}</p>
        <p className="py-3 text-xl font-extrabold font-mono">₦{item.price}</p>
        <p
          className="bg-blue-950 text-white rounded p-[10px] cursor-pointer"
          onClick={isAuthenticated ? () => addToCart(item._id) : login}
        >
          Add to cart
        </p>
      </div>
    </div>
  );
}

export default Production;
