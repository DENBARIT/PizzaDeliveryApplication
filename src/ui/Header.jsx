import { Link } from "react-router-dom";
import SearchOrder from "../Features/order/SearchOrde.jsx";
import Username from "../Features/user/Username.jsx";

function Header(){
    return (
        <header className="bg-yellow-400 px-4 py-3 uppercase border-b border-stone-200 sm:px-6 flex justify-between items-center ">
            <Link to="/" className="tracking-widest">Fast React Pizza Co.</Link>
<Username/>
        <SearchOrder/>

        </header>
    )
}
export default Header;