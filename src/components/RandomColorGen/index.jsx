import { useState } from "react";
import './styles.css';

export default function RandomColorGen() {

    const [currentColor, setCurrentColor] = useState([0, 0, 0])
    const [displayFormat, setDisplayFormat] = useState('hex')


    return <div className="wrapper">
            <button onClick={() => setDisplayFormat('hex')} className="randomColorBtn">Hex Color</button>
            <button onClick={() => setDisplayFormat('rgb')} className="randomColorBtn">RGB Color</button>
            <button onClick={() => generateColor()} className="randomColorBtn">Random Color</button>

        </div>
}