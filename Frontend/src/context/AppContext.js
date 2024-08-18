import { createContext, useState } from "react";
export const AppContext = createContext();

export default function AppContextProvider({children}){
    const [data,setData] = useState([]);

    async function fetchData() {
        const url = 'http://localhost:3300/alldata';
        const result = await fetch(url);
        const data = await result.json();
        console.log(data)
        setData(data)
    }

    

    const value = {
        setData,
        data,
        fetchData
    }
   return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}