
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { formatCurrency } from "../../utils/helpers";
import { getTotalCartPrice } from "./cartSlice";
import { getTotalCartQuantity } from "./cartSlice";
function CartOverview() {
  const totalCartQuantity = useSelector(getTotalCartQuantity);
  const totalCartPrice = useSelector(getTotalCartPrice);
  if (totalCartQuantity === 0) return null;
  return (
    <div className="bg-stone-800 uppercase text-stone-200 px-4 py-4 sm:px-6 text-sm md:text-base flex justify-between" >
      <p className="text-stone-300 font-semibold space-x-4 sm:space-x-6">
        <span>{totalCartQuantity} pizzas</span>
        <span>{formatCurrency(totalCartPrice)}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
