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


    return <div className="wrapper">
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
                    <h2>#{currentColor[0].toString(16).padStart(2,"0")}{currentColor[1].toString(16).padStart(2,"0")}{currentColor[2].toString(16).padStart(2,"0")}</h2>
                </div>    
            }

        </div>
}