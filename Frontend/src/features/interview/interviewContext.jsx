const { useState } = require("react");
const { createContext } = require("react");


export const interviewContext = createContext()

export const interviewProvider = ({children})=>{

    const [loading, setLoading] = useState(false)
    const [report , setReport] = useState(null)
    const [reports , setReports] = useState([])


    return (
        <interviewContext.Provider value={loading,setLoading,report,setReport}>
            {children}
        </interviewContext.Provider>
    )
}