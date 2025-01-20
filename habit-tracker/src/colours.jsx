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

    },[colour])

    const handleColourChange = (colourInput)=>{
        setColour(colourInput)
    }
    
    return(
        <>
            <div onClick={()=>{handleColourChange('blue')}}>Blue</div>
            <div onClick={()=>{handleColourChange('green')}}>Green</div>
            <div onClick={()=>{handleColourChange('red')}}>red</div>
            <div onClick={()=>{handleColourChange('amber')}}>Amber</div>
            <div>The chosen colour: {colour}</div>
            <div className={`border-2 w-24 h-20 ${colorToClass[colour]}`}></div>
        </>
    )
}