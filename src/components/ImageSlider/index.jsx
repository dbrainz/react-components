import { useState } from "react";
import './styles.css';



export default function ImageSlider({url, limit}) {
    
    const [currentPic, setCurrentPic] = useState(0);
    const [picData, setPicData] = useState(null);

    fetch("https://picsum.photos/v2/list?page=1&limit=10")
        .then( (data) => setData(data))
        .catch( error => 
            console.log(error)
            )

    return <div className='image-slider'>
        { picData ?  
        <span className="leftArrow">{"<"}</span>
        <img src={} />
        <span className="rightArrow">{">"}</span> :
}
    </div>
}