import axios from "axios";

const api = axios.create({
    baseURL : 'http://localhost:8000',
    withCredentials : true
})

export const register = async({username, email,password})=>{

    try {
        
      const response = await api.post('/api/auth/register',{
            username, email,password
            })
    return response.data
} catch (error) {
    console.log(error,'==> error');
    
}

}



export const Login = async({email,password})=>{
    try {
        
    

    const response = await api.post('/api/auth/Login',{
        email,password
    })

    return response.data
    } catch (error) {
        console.log(error);
        
    }
}



export const Logout = async()=>{
    try {
        
 
    const response = await api.get('/api/auth/Logout')

    return response.data

   } catch (error) {
        console.log(error);
        
    }

}


export const getMe = async()=>{
    try {
        
 
    const response = await api.get('/api/auth/get-me')

    return response.data

   } catch (error) {
        console.log(error);
        
    }

}





