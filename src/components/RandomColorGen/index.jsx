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
                <button onClick={() => setDisplayFormat('hex')} className="randomColorBtn">Hex Color</button>
                <button onClick={() => setDisplayFormat('rgb')} className="randomColorBtn">RGB Color</button>
                <button onClick={() => generateColor()} className="randomColorBtn">Random Color</button>
            </div>
            <div className = 'colorDisplay'>
                { displayFormat === "rgb" ? 
                    <div>
                        <h1>RGB</h1>
                        <h2>{currentColor[0]}, {currentColor[1]}, {currentColor[2]}</h2> 
                    </div>

                    : <h1>Hex</h1>}
            </div>

        </div>
}