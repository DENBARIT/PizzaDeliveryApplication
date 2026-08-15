import {} from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
function Username(){
    // To get some state from the store we use useSelector
    const username=useSelector((state)=>state.user.username)

if(!username){return null}  
return (<div className="hidden text-sm font-semibold md:block">
    {username}
</div>)
}
export default Username;