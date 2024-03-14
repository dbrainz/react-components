import { useState } from "react";
import './styles.css';

export default function RandomColorGen() {

    const [currentColor, setCurrentColor] = useState([0, 0, 0])
    const [displayFormat, setDisplayFormat] = useState('hex')

    function generateColor() {
        const newRed = Math.floor(Math.random() * 256)
        const newGreen = Math.floor(Math.random() * 256)
        const newBlue = Math.floor(Math.random() * 256)
        console.log(currentColor)
        setCurrentColor([newRed, newGreen, newBlue])
    }

    function genTextColor(decimalVal) {
        console.log(typeof decimalVal)
        console.log(decimalVal)
        console.log(decimalVal-127)
        if (decimalVal > 127 ) {
            console.log("returning ", decimalVal - 127)
            return decimalVal - 128
        } else {
            console.log("returning ", decimalVal - 128 )
            return decimalVal + 128
        }
    }

    // Converts sdecimal value to 2 character hex value and converts any letters to uppercase for display
    function displayHex(decimalVal) {
        return decimalVal.toString(16).padStart(2,"0").toUpperCase()
    }

    return <div className="wrapper" style={{backgroundColor: `rgba(${currentColor[0]},${currentColor[1]},${currentColor[2]}, 1)`, 
                color: `rgba(${genTextColor(currentColor[0])},${genTextColor(currentColor[1])},${genTextColor(currentColor[2])}, 1)`
     }}>
            <div className="buttons">
                <button onClick={() => setDisplayFormat('hex')} className="randomColorBtn">Hex Display</button>
                <button onClick={() => setDisplayFormat('rgb')} className="randomColorBtn">RGB Display</button>
                <button onClick={() => generateColor()} className="randomColorBtn">Random Color</button>
            </div>
            { displayFormat === "rgb" ? 
                <div className="colorDisplay">
                    <h1>RGB</h1>
                    <h2>{currentColor[0]}, {currentColor[1]}, {currentColor[2]}</h2> 
                </div>

                : 
                <div className="colorDisplay">
                    <h1>Hex</h1>
                    <h2>#{displayHex(currentColor[0])}{displayHex(currentColor[1])}{displayHex(currentColor[2])}</h2>
                </div>    
            }

        </div>
}