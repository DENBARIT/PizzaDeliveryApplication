import Header from "./Header";
import CartOverview from "../Features/cart/CartOverview";
import { Outlet,useNavigation } from "react-router-dom";
import Loader from "./Loader";
function AppLayout(){
    // the useNavigation wokks only for the component/link with a loader that fetches data 
    const navigation=useNavigation();
    const isLoading=navigation.state==="loading";

    return (
        <div className="px:4 sm:px-6">
            {isLoading && <Loader/>}
            <Header/>
            <main>
        <Outlet/>
            </main>
            <CartOverview/>
        </div>
    )
}
export default AppLayout;