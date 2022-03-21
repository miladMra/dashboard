import { useReducer } from "react";
import { createContext } from "react";
import darkModeReducer from "./darkModeReducer";

const initialState = {
    darkMode:false
}

export const DarkMOdeContext = createContext(initialState)

export const DarkMOdeContextProvider = ({children})=>{
    const [state,dispatch] = useReducer(darkModeReducer,initialState)

    return(
        <DarkMOdeContext.Provider value={{darkMode:state.darkMode , dispatch}}>{children}</DarkMOdeContext.Provider>
    )
}