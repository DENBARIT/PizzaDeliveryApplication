import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./ui/Home.jsx";
import Menu from "./Features/menu/Menu.jsx";
import { loader as menuLoader } from "./Features/menu/menuLoader.js";
import Cart from "./Features/cart/Cart.jsx";
import CreateOrder,{action as createOrderAction} from "./Features/order/CreateOrder.jsx";
import Order,{loader as orderLoader} from "./Features/order/Order.jsx";
import {action as updateOrderAction} from "./Features/order/UpdateOrder.jsx";
import AppLayout from "./ui/AppLayout.jsx";
import Error from "./ui/Error.jsx"
const router=createBrowserRouter([

  {
    element:<AppLayout/>,
   
    children:[
      {
    path:"/",
    element:<Home/>
  },
  {
    path:"/menu",
    element:<Menu/>,
    loader:menuLoader,
     errorElement:<Error/>,
  },
  {
    path:"/cart",
    element:<Cart/>
  },
  {path:"/order/new",
    element:<CreateOrder/>,
    action:createOrderAction,

  },
  {
    path:"/order/:orderId",
    element:<Order/>,
    loader:orderLoader,
     errorElement:<Error/>,
     action:updateOrderAction

  },
  
    ]
  }
  
])


function App(){
  return <RouterProvider router={router}/>
}
export default App