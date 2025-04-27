import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const CartPopup = () => {
  return (
    <Link to="/hype-music/add-cart" className="flex relative">
      <button className="btn btn-neutral px-0 py-0 bg-transparent hover:outline-none hover:outline-transparent">
        <IoCartOutline className="text-[#ED7340] text-3xl" />{" "}
        {/* <div className="">0</div> */}
      </button>
    </Link>
  );
};

export default CartPopup;
