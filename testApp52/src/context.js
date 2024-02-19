// need to move this into library 
// context created to share user level data btw all levels
// without having to pass props 
import {React, createContext, useState} from "react";
import { Details } from "emissions-library4";

const UserContext = createContext();

export function UserContextProvider ({children}) {
    const [isEnabled, setIsEnabled] = useState(true);
    const [isRunning, setIsRunning] = useState(true);
    const values = {
        isEnabled,
        setIsEnabled,
        isRunning,
        setIsRunning,
    };
    return (
        <UserContext.Provider value = {values}>
            {children}
        </UserContext.Provider>
    );
};
export default UserContext; 