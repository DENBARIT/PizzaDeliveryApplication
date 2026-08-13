import { Link } from "react-router-dom";
import SearchOrder from "../Features/order/SearchOrde.jsx";
import Username from "../Features/user/Username.jsx";

function Header(){
    return (
        <header className="bg-yellow-500 px-4 py-3 uppercase border-b border-stone-200 sm:px-6">
            <Link to="/" className="tracking-widest">Fast React Pizza Co.</Link>
        <SearchOrder/>
<Username/>
        </header>
    )
}
export default Header;