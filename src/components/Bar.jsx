import { useContext } from "react"
import { UserContext } from "../App"
import { Search } from "lucide-react"

export default function Bar(){
    const {title} = useContext(UserContext)
    return <div className="flex items-center justify-between w-full py-3 h-[70px]">
        <p className="text-5xl uppercase text-[#2553FF] font-[monospace] font-semibold">{title}</p>
        <div className="lg:flex hidden w-[320px] h-full rounded-[25px] justify-between items-center overflow-hidden shadow-[0px_14px_28px_rgba(0,0,0,0.25),_0px_10px_10px_rgba(0,0,0,0.22)]">
            <input type="text" placeholder="Search" className="flex-1 h-full px-5 outline-none" />
            <div className="h-full w-[50px] flex items-center justify-center text-[#2553ff] cursor-pointer">
                <Search />
            </div>
        </div>
    </div>
}