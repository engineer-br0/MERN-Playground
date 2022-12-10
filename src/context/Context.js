//create a context (warehouse )  ----- context API
//provider
//consumer           ---------- useContext hook

import { createContext } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) =>{

    return(
        <AppContext.Provider value="mridul">
            { children }
        </AppContext.Provider>
    )
}

export {AppContext, AppProvider};