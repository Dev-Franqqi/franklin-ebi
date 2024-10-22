'use client'
import {  createContext ,useState} from "react"
import { ReactNode } from "react"
type Darkprop= {
    children:ReactNode
}
type DarkContextProp= {
    dark:boolean,
    setDark:React.Dispatch<React.SetStateAction<boolean>>
 
}
export const DarkContext = createContext<DarkContextProp>({dark:false,setDark:()=>{}})


export function DarkContextProvider({children}: Darkprop){
    const [dark, setDark] = useState(false)
    return(
        <DarkContext.Provider value={{dark, setDark}}>
            {children}
        </DarkContext.Provider>

 
    )



}