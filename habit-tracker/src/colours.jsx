import { useEffect, useState } from "react"

export const Colours = () =>{
    const [colour, setColour] = useState("blue")
    const [cClass, setCClass] = useState("")
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
            <div onClick={()=>{handleColourChange('orange')}}>Orange</div>
            <div>The chosen colour: {colour}</div>
            <div className={cClass}></div>
        </>
    )
}