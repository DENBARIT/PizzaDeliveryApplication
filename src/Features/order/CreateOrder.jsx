import { useState } from "react";
import { Form } from "react-router-dom";  
import { createOrder } from "../../services/apiRestaurant.js";
import { redirect } from "react-router-dom";
import { useActionData } from "react-router-dom";
import Button from "../../ui/Button.jsx";
import { useNavigation } from "react-router-dom";
import { useSelector } from "react-redux";
import EmptyCart from "../cart/EmptyCart.jsx";
import { getCart } from "../cart/cartSlice.js";
import { getTotalCartPrice } from "../cart/cartSlice.js";
import { clearCart } from "../cart/cartSlice.js";
import store from "../../../store.js";
import {formatCurrency} from "../../utils/helpers.js";
import { fetchAddress } from "../user/userSlice.js";
import { useDispatch } from "react-redux";
// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );


// const fakeCart = [
//   {
//     pizzaId: 12,
//     name: "Mediterranean",
//     quantity: 2,
//     unitPrice: 16,
//     totalPrice: 32,
//   },
//   {
//     pizzaId: 6,
//     name: "Vegetale",
//     quantity: 1,
//     unitPrice: 13,
//     totalPrice: 13,
//   },
//   {
//     pizzaId: 11,
//     name: "Spinach and Mushroom",
//     quantity: 1,
//     unitPrice: 15,
//     totalPrice: 15,
//   },
// ];

function CreateOrder() {
  const [withPriority, setWithPriority] = useState(false);
  const navigation=useNavigation();
  const isSubmitting=navigation.state==="submitting";
const formErrors=useActionData();
const dispatch=useDispatch();
const cart=useSelector(getCart);
const totalCartPrice=useSelector(getTotalCartPrice);
const priorityPrice=withPriority ? totalCartPrice * 0.2 : 0;
const totalPrice=totalCartPrice+priorityPrice;
const {username,position,status:addressStatus,address,error:errorAddress}=useSelector((state)=>state.user);
  // const cart = fakeCart;
  console.log(cart);
  if(!cart.length) return <EmptyCart/>;
  // If your action function finishes and returns some data (like backend validation errors or an order confirmation ID), we can read that data using the useActionData hook:
const isLoadingAddress=addressStatus==="loading";
  
  return (
    <div className="px-4 py-6">
      
      <h2  className="mb-8 text-xl font-semibold">Ready to order? Let's go!</h2>
      {/* <Form method="POST" action="/order/new"> */}
      <Form method="POST" >
        <div className="mb-5 flex gap-2 flex-col sm:flex-row sm:items-center grow">
          <label className="sm:basis-40"> First Name</label>
         <div className="grow" >
          <input type="text" name="customer" className="input w-full" defaultValue={username} required />
        </div></div>

        <div className="mb-5 flex gap-2 flex-col sm:flex-row sm:items-center ">
          <label className="sm:basis-40">Phone number</label>

            
          <div className="grow" > 
            <input type="tel" name="phone" 
            
               className="input w-full"
            
            required />
          {formErrors?.phone && <p className="mt-2 rounded-md bg-red-100 p-2 text-red-700 text-xs">{formErrors.phone}</p>}
</div>
          </div>
          
      

        <div className="mb-5 flex gap-2 flex-col sm:flex-row sm:items-center relative">
          <label className="sm:basis-40">Address</label>
          <div className="grow">
            <input type="text" name="address" required 
    disabled={isLoadingAddress} defaultValue={address}
               className="input w-full"
            
          />
          {addressStatus==="error" && <p className="mt-2 rounded-md bg-red-100 p-2 text-red-700 text-xs">
            {errorAddress}
             </p>}

          </div>

    { !position.latitude&&!position.longitude &&<span className="absolute right-[3px] top-[3px] z-50 md:right-[5px] md:top-[5px] ">
<Button  disabled={isLoadingAddress}  type="small" onClick={(e)=>{
  e.preventDefault();
  dispatch(fetchAddress())}}>Get Position</Button>
</span>}
        </div>

        <div className="mb-12 flex items-center gap-5">
          <input
          className="
          h-6 w-6 
          accent-yellow-400
          focus:outline-none focus:ring-offset-2
focus:ring-yellow-400     "
            type="checkbox"
            name="priority"
            id="priority"
            value={withPriority}
            onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority" className="font-medium">
            Want to you give your order priority?
          </label>
        </div>
        <div>
  <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <input
            type="hidden"
            name="position"
            value={
              position.longitude && position.latitude
                ? `${position.latitude},${position.longitude}`
                : ''
            }
          />
          <Button disabled={isSubmitting || isLoadingAddress} type="primary" >
            {isSubmitting
              ? 'Placing order....'
              : `Order now from ${formatCurrency(totalPrice)}`}
          </Button></div>
      </Form>
    </div>
  );
}
export async function action({request}){
  const formData=await request.formData();
  const data=Object.fromEntries(formData);
  const order={
...data,
cart:JSON.parse(data.cart),
// we can directly use priority data.priority or but the data.priority gives a string  so we compare the string with the string "true"
 
priority:data.priority==="true",
  };
  
  const newOrder=await createOrder(order);
  const errors={};
  if(!isValidPhone(order.phone))
    errors.phone="🚫 Please give a valid phone number";
if(Object.keys(errors).length>0){
  return errors;
}
// Special hack to dispatch  a clearCart reducer
store.dispatch(clearCart());
  // Here we cannot use the naviagate 
  // this comes from the backend 
  return redirect(`/order/${newOrder.id}`);

}

export default CreateOrder;
