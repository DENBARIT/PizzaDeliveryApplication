import { formatCurrency } from "../../utils/helpers.js";
import Button from "../../ui/Button.jsx";
import { useDispatch } from "react-redux";
// import {addItem} from "../cart/cartSlice.js"
import {addItem} from "../cart/cartSlice.js"
import DeleteItem from "../cart/DeleteItem.jsx";
import { useSelector } from "react-redux";
import { getCurrentQuantityById } from "../cart/cartSlice.js";
import UpdateItemQuantity from "../cart/UpdateItemQuantity.jsx";
function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const dispatch=useDispatch();

  const currentQuantity=useSelector(getCurrentQuantityById(id));

const isInCart=currentQuantity>0;
  function handleAddToCart(){
  const newItem={
        pizzaId:id,
        name,
        quantity:1,
        unitPrice,
        totalPrice:unitPrice*1,
    }
    dispatch(addItem(newItem))
}





  return (
    <li className="flex gap-4 py-2">
      <img src={imageUrl} alt={name} className={`h-24 ${soldOut ? 'grayscale opacity-70' : ''  } `} />
      <div className="flex flex-col grow pt-0.5">
        <p className="font-medium">{name}</p>
        <p className="text-sm  capitalize italic text-stone-500">{ingredients.join(', ')}</p>
        <div className="mt-auto flex items-center justify-between">
       
          {!soldOut ? <p>{formatCurrency(unitPrice)}</p> : <p className="text-sm uppercase font-medium text-stone-500">Sold out</p>}
       
      { isInCart && <div className="flex items-center gap-3 sm:gap-8" >
        
        <UpdateItemQuantity pizzaId={id} currentQuantity={currentQuantity}/>  
        <DeleteItem id={id}/>
      
      
      </div>}
       
          {!soldOut &&!isInCart&& <Button type="small" onClick={handleAddToCart}>Add to Cart</Button>}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;