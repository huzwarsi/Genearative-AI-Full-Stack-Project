import { createContext, useState } from "react";

export const AuthContext = createContext()

export const AuthProvider = ({children})=>{

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false)

    return(
        <AuthProvider.Provider value={{user,setUser,loading,setLoading}}>
            {children}
        </AuthProvider.Provider>

    )



}