import { useEffect, useState } from "react"

const colorToClass = {
    blue:  "bg-blue-200",
    green: "bg-green-200",
    red:   "bg-red-200",
    amber: "bg-amber-200"
  };

export const Colours = () =>{
    const [colour, setColour] = useState("blue")
    const [cClass, setCClass] = useState("border-2 w-24 h-20 bg-lime-200")
    useEffect(()=>{

    },[colour,cClass])

    const handleColourChange = (colourInput)=>{
        setColour(colourInput)
        setCClass(`border-2 w-24 h-20 bg-${colourInput}-200`)
        console.log(cClass)
    }
    
    return(
        <>
            <div onClick={()=>{handleColourChange('blue')}}>Blue</div>
            <div onClick={()=>{handleColourChange('green')}}>Green</div>
            <div onClick={()=>{handleColourChange('red')}}>red</div>
            <div onClick={()=>{handleColourChange('amber')}}>Amber</div>
            <div>The chosen colour: {colour}</div>
            <div className={cClass}></div>
        </>
    )
}