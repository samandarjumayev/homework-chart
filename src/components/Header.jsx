import { useContext, useState } from "react"
import { UserContext } from "../App";
import { ChartNoAxesCombined, ChevronLeft, ChevronRight, Cog, MessageCircle, ShoppingCart } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function Header(){
    const [hide, setHide] = useState(false);
    const {title, setTitle} = useContext(UserContext)
    return <div className={`${hide ? `w-[120px]` : `w-[300px]`} bg-[#2553FF] text-white py-10 transition-all duration-700`}>
        <div className="w-full flex items-center h-[60px] justify-between transition-all duration-700 px-7">
            <img src="https://cdn-icons-png.flaticon.com/128/3242/3242257.png" alt="" className={`${hide ? `h-[70%]` : `h-[80%]`} transition-all duration-700`} />
            <p className={`${hide ? `hidden` : `flex`} transition-all duration-700 text-2xl font-semibold`}>{title}</p>
            <button 
                onClick={() => setHide(!hide)}
                className="cursor-pointer outline-none transition-all duration-700 hover:bg-[#ffffff2d] hover:duration-150 rounded-lg p-[3px]"
                >
                    {hide ? <ChevronRight size={33} /> : <ChevronLeft size={33} />}
            </button>
        </div>

        <div className={`flex flex-col gap-3 mt-7 px-7`}>
            <NavLink 
                to={'/'} 
                onClick={() => setTitle('Dashboard')}
                className={`flex items-center cursor-pointer hover:bg-[#ffffff32] py-2 px-5 gap-4 rounded-lg transition-all duration-700 hover:duration-100 hover:scale-105 active:duration-100 active:scale-100`}>
                    <ChartNoAxesCombined size={30} /> 
                    <p className={`${hide ? `hidden` : `flex`} font-semibold transition-all duration-400`}>Dashboard</p>
            </NavLink>
            <NavLink 
                to={'/settings'} 
                onClick={() => setTitle('Settings')}
                className={`flex items-center cursor-pointer hover:bg-[#ffffff32] py-2 px-5 gap-4 rounded-lg transition-all duration-700 hover:duration-100 hover:scale-105 active:duration-100 active:scale-100`}>
                    <Cog />
                    <p className={`${hide ? `hidden` : `flex`} font-semibold transition-all duration-400`}>Settings</p>
            </NavLink>
            <NavLink 
                to={'/cart'} 
                onClick={() => setTitle('Cart')}
                className={`flex items-center cursor-pointer hover:bg-[#ffffff32] py-2 px-5 gap-4 rounded-lg transition-all duration-700 hover:duration-100 hover:scale-105 active:duration-100 active:scale-100`}>
                    <ShoppingCart />
                    <p className={`${hide ? `hidden` : `flex`} font-semibold transition-all duration-400`}>Cart</p>
            </NavLink>
            <NavLink 
                to={'/message'} 
                onClick={() => setTitle('Message')}
                className={`flex items-center cursor-pointer hover:bg-[#ffffff32] py-2 px-5 gap-4 rounded-lg transition-all duration-700 hover:duration-100 hover:scale-105 active:duration-100 active:scale-100`}>
                    <MessageCircle /> 
                    <p className={`${hide ? `hidden` : `flex`} font-semibold transition-all duration-400`}>Message</p>
            </NavLink>
        </div>
    </div>
}