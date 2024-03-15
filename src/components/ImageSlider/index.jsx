import { useState, useEffect } from "react";
import './styles.css';



export default function ImageSlider({url, limit=5}) {
    
    const [currentPic, setCurrentPic] = useState(0);
    const [picData, setPicData] = useState(null);

        useEffect(() => {
            fetch(url)
                .then((response) => response.json())
                .then( (data) => {
                    console.log(data)
                    setPicData(data)
                })
                .catch( error => 
                    console.log(error)
                    )
        }, [url])

    return <div className='image-slider'>
        { picData ?
            <div>
                <span className="leftArrow">{"<"}</span>
                <img src={picData[currentPic].download_url} />
                <span className="rightArrow">{">"}</span>
            </div> :
            <div>
                <p>Loading...</p>
            </div>
    }
    </div>
}