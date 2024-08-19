import { createContext, useState } from "react";
export const AppContext = createContext();

export default function AppContextProvider({children}){
    const [data,setData] = useState([]);
    const [ownerData, setOwnerData] = useState([]);

    async function fetchData() {
        const url = 'http://localhost:3300/alldata';
        const result = await fetch(url);
        const data = await result.json();
        // console.log(data)
        setData(data);
    }

  

    async function fetchOwnerData() {
        const authState = JSON.parse(localStorage.getItem("authState"));
        const ownerId = authState.user._id;

        const url = `http://localhost:3300/ownerdata/${ownerId}`;
        const result = await fetch(url);
        const data = await result.json();
      //  console.log(data);
        setOwnerData(data);
    }
    


    const value = {
        setData,
        data,
        fetchData,
        ownerData,
        fetchOwnerData
    }
   return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}