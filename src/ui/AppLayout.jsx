import Header from "./Header";
import CartOverview from "../Features/cart/CartOverview";
import { Outlet,useNavigation } from "react-router-dom";
import Loader from "./Loader";
function AppLayout(){
    // the useNavigation wokks only for the component/link with a loader that fetches data 
    const navigation=useNavigation();
    const isLoading=navigation.state==="loading";

    return (
        <div className="grid grid-rows-[auto_1fr_auto] h-dynamic-screen">
            {isLoading && <Loader/>}
         {/* {true&&<Loader/>} */}
            <Header/>
            <div className="overflow-y-auto">
            <main className=" mx-auto max-w-3xl">
        <Outlet/>
            </main></div>
            <CartOverview/>
        </div>
    )
}
export default AppLayout;