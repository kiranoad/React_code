import { createContext, useState } from "react";
import runChart from "../comfig/gemini";

export const Context = createContext();

const ContextProvider = (props) => {

    const [input,setInput] = useState("");
    const [recentPrompt,setRecentPrompt] = useState("");
    const [prevPrompt,setProvPrompt] = useState ([]);
    const [showResult,setShowResult] = useState(false);
    const [loading,setLoading] = useState(false);
    const [resultData,SetResultData] = useState("");


     const onSent = async(prompt) => {
       await runChart(input);
     }

    const contextValue = {
        prevPrompt,
        setProvPrompt,
        onSent,
        setRecentPrompt,
        recentPrompt,
        showResult,
        loading,
        resultData,
        input,
        setInput


    }
    return(
       <Context.Provider value={contextValue}>{props.children}</Context.Provider>
    )
}
export default ContextProvider