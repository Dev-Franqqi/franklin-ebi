'use client'
import { useContext } from "react"
import { DarkContext } from "../context/Darkcontextprovider"


export default function useDark(){
    const darkContext = useContext(DarkContext)
    if(!darkContext){
        throw new Error("useDark must be used with a dark context provider")
    }
    return darkContext;
    
}