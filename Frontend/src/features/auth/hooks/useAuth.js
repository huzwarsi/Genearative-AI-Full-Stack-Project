import { useContext } from "react"
import { AuthContext } from "../auth.context"

export const useAuth = ()=>{
    const context = useContext(AuthContext)
    const {user,setUser,loading,setLoading} = context

    const handleLogin = async({email,password})=>{
        setLoading(true)
    }

}