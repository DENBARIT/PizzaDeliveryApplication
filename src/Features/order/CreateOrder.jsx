import { useState } from "react";
import { Form } from "react-router-dom";  
import { createOrder } from "../../services/apiRestaurant.js";
import { redirect } from "react-router-dom";
import { useActionData } from "react-router-dom";
import { useNavigation } from "react-router-dom";
// https://uibakery.io/regex-library/phone-number


const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function CreateOrder() {
  // const [withPriority, setWithPriority] = useState(false);
  const navigation=useNavigation();
  const isSubmitting=navigation.state==="submitting";


  const cart = fakeCart;
  // If your action function finishes and returns some data (like backend validation errors or an order confirmation ID), we can read that data using the useActionData hook:
const formErrors=useActionData();

  return (
    <div>
      
      <h2>Ready to order? Let's go!</h2>

      {/* <Form method="POST" action="/order/new"> */}
      <Form method="POST" >
        <div>
          <label>First Name</label>
          <input type="text" name="customer" required />
        </div>

        <div>
          <label>Phone number</label>
          <div> 
            <input type="tel" name="phone" 
            
               className="rounded-full border
        border-stone-200 px-4 py-2 text-sm
  transition-all duration-300 placeholder:text-stone-400
  focus:outline-none focus:ring focus:ring-yellow-400      
        w-full
            md:px-6 md:py-3"
            
            required />
          </div>
          {formErrors?.phone && <p>{formErrors.phone}</p>}
        </div>

        <div>
          <label>Address</label>
          <div>
            <input type="text" name="address" required 
            
               className="rounded-full border
        border-stone-200 px-4 py-2 text-sm
  transition-all duration-300 placeholder:text-stone-400
  focus:outline-none focus:ring focus:ring-yellow-400      
        w-full
            md:px-6 md:py-3"
            />
          </div>
        </div>

        <div>
          <input
          className="
          h-6 w-6 
          accent-yellow-400
          focus:outline-none focus:ring-offset-2
focus:ring-yellow-400     "
            type="checkbox"
            name="priority"
            id="priority"
            // value={withPriority}
            // onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority">Want to yo give your order priority?</label>
        </div>

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <button disabled={true}
          className="
          inline-block rounded-full
          bg-yellow-400 px-4 py-3 font-semibold
          uppercase tracking-wide text-stone-800 transition-colors 
          duration-300 hover:bg-yellow-300 
          focus:bg-yellow-300 
          focus:outline-none focus:ring
          focus:ring-offset-2
          focus:ring-yellow-300
          disabled:cursor-not-allowed
        active:bg-yellow-900  
        " >
            {isSubmitting ? "Placing order..." : "Order now"}
          </button>
        </div>
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
priority:data.priority==="on",
  };
  
  const newOrder=await createOrder(order);
  const errors={};
  if(!isValidPhone(order.phone))
    errors.phone="Please give a valid phone number";
if(Object.keys(errors).length>0){
  return errors;
}


  // Here we cannot use the naviagate  
  return redirect(`/order/${newOrder.id}`);

}

export default CreateOrder;
