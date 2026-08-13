import { Link } from "react-router-dom";
import SearchOrder from "../Features/order/SearchOrde.jsx";
function Header(){
    return (
        <header className="bg-yellow-500">
            <Link to="/">Fast React Pizza Co.</Link>
        <SearchOrder/>
        </header>
    )
}
export default Header;