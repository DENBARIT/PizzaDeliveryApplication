import { Link } from "react-router-dom";
import SearchOrder from "../Features/order/SearchOrde.jsx";
function Header(){
    return (
        <header>
            <Link to="/">Fast React Pizza Co.</Link>
        <SearchOrder/>
        </header>
    )
}
export default Header;