import { useState } from "react"


export default function RandomColor(){
    const [typeOfColor,setTypeOfColor] = useState('hex')
    const [color,setColor]= useState('#000000')

    function handleCreateRandomHexColor(){
        const hex = [1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
        let hexColor = '#';

        for(let i=0; i<6; i++){
            hexColor += hex[Math.floor(Math.random()*hex.length)]
        }
        setColor(hexColor)
    }


    function handleCreateRandomRgbColor(){
        const r = Math.floor(Math.random()*256)
        const g = Math.floor(Math.random()*256)
        const b = Math.floor(Math.random()*256)

        setColor(`rgb(${r},${g},${b})`)
    }

    return (
        <div style={{
            width:"100vw",
            height:'100vh',
            background:color,
        }}>
            <button onClick={()=>setTypeOfColor('hex')}>Create Hex Color</button>
            <button onClick={()=>setTypeOfColor('rgb')}>Create RGB Color</button>
            <button onClick={typeOfColor==='hex'?handleCreateRandomHexColor:handleCreateRandomRgbColor}>Generate Random Color</button>
            <div
            style={{
                display:"flex",
                justifyContent:"center",
                alignItems:"center",
                color:'#fff',
                fontSize:'60px',
                marginTop:'40px',
                flexDirection:'column',
                gap:'20px'
            }}><h3>{typeOfColor ==='hex'?'Hex Color':'RGB Color'}</h3>
            <h1>{color}</h1></div>
        </div>
    )
}