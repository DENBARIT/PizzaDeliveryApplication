import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./ui/Home.jsx";
import Menu from "./Features/menu/Menu.jsx";
import { loader as menuLoader } from "./Features/menu/menuLoader.js";
import Cart from "./Features/cart/Cart.jsx";
import CreateOrder from "./Features/order/CreateOrder.jsx";
import Order from "./Features/order/Order.jsx";
import AppLayout from "./ui/AppLayout.jsx";
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
  },
  {
    path:"/cart",
    element:<Cart/>
  },
  {path:"/order/new",
    element:<CreateOrder/>
  },
  {
    path:"/order/:orderId",
    element:<Order/>
  },
  
    ]
  }
  
])


function App(){
  return <RouterProvider router={router}/>
}
export default App