import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { createContext, useState } from "react";
import Bar from "./components/Bar";

export const UserContext = createContext();

export default function App(){
    const [title, setTitle] = useState('Dashboard');
    return <UserContext.Provider value={{title, setTitle}}>
      <div className="flex w-full h-screen justify-between">
        <Header />

        <div className="flex-1 pt-10 px-7 flex flex-col gap-7">
          <Bar />
          <Outlet />
        </div>
      </div>
    </UserContext.Provider>
}