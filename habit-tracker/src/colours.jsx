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
        <><div className="flex justify-between w-60    bg-white rounded-xl">
            <div className="flex justify-around w-full items-center flex-wrap p-2">
            <div className="w-4 h-4 bg-blue-400 rounded-sm" onClick={()=>{handleColourChange('blue')}}></div>
            <div className="w-4 h-4 bg-green-400 rounded-sm" onClick={()=>{handleColourChange('green')}}></div>
            <div className="w-4 h-4 bg-red-400 rounded-sm" onClick={()=>{handleColourChange('red')}}></div>
            <div className="w-4 h-4 bg-amber-400 rounded-sm" onClick={()=>{handleColourChange('amber')}}></div>
            </div>
            
            <div className={`border-2 w-24 h-20 p- ${colorToClass[colour]}`}></div>
        </div>
            
            
            
        </>
    )
}