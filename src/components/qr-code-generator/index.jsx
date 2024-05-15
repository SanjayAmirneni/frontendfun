import { useState } from 'react'
import QRCode from 'react-qr-code'


export default function QRCodeGenerator(){

    const [input,setInput] = useState('')
    const [qrCode,setQrCode] = useState('')

    function handleGenerateQRCode(){
        setQrCode(input)
        setInput('')
    }

    return (
        <div>
            <h1>QR Code Generator</h1>
            <div>
                <input 
                type='text'
                onChange={(e)=>{setInput(e.target.value)}}
                value={input}
                placeholder="Enter your value"/>
            </div>
            <button disabled={input && input.trim()!==''?false:true} 
            onClick={handleGenerateQRCode}>Generate</button>
            <div>
            <QRCode id='qr-code-value' value={qrCode} size={400} bgColor='#fff' /> 
            </div>
        </div>
    )
}