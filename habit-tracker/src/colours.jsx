import { useEffect, useState } from "react"

const colorToClass = {
    blue:  "bg-blue-400",
    green: "bg-green-400",
    red:   "bg-red-400",
    amber: "bg-amber-400"
  };

export const Colours = () =>{
    const [colour, setColour] = useState("blue")
    useEffect(()=>{
        console.log(colour)
    },[colour])

    const handleColourChange = (colourInput)=>{
        setColour(colourInput)
    }
    
    return(
        <><div>
            <div className="w-4 h-4 bg-blue-400" onClick={()=>{handleColourChange('blue')}}></div>
            <div className="w-4 h-4 bg-green-400" onClick={()=>{handleColourChange('green')}}></div>
            <div className="w-4 h-4 bg-red-400" onClick={()=>{handleColourChange('red')}}></div>
            <div className="w-4 h-4 bg-amber-400" onClick={()=>{handleColourChange('amber')}}></div>
        </div>
            
            
            <div className={`border-2 w-24 h-20 ${colorToClass[colour]}`}></div>
        </>
    )
}