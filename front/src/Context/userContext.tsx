import React from "react";

export interface UserContext  {
        userState: {id: number, email:string, connected: boolean}, 
        setUserState: React.Dispatch<React.SetStateAction<{id: number, email:string, connected: boolean}>>
        
    }
export const userContext = React.createContext<null | UserContext>(null);