//create a context (warehouse )  ----- context API
//provider
//consumer           ---------- useContext hook

import { createContext, useContext } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) =>{

    return(
        <AppContext.Provider value="MRIDUL SHARMA (it is showing by using context)">
            { children }
        </AppContext.Provider>
    )
}

// global custom hook

const useGlobalContext = () =>{
    return useContext(AppContext);
}

export {AppContext, AppProvider, useGlobalContext};