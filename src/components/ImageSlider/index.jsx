import { useState, useEffect } from "react";
import './styles.css';



export default function ImageSlider({url, limit=5}) {
    
    const [currentPic, setCurrentPic] = useState(0);
    const [picData, setPicData] = useState(null);

    function goPrevPic() {
        if (currentPic>0) {
            setCurrentPic(currentPic-1);
        }
    }

    function goNextPic() {
        if (currentPic<picData.length-1) {
            setCurrentPic(currentPic+1)
        }
    }

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
        { picData && picData.length ?
            <div className="pic-window">
                <span onClick = { () => goPrevPic()} className="arrow left-arrow">{"<"}</span>
                <img className="slider-pic" src={picData[currentPic].download_url} />
                <span onClick = { () => goNextPic()} className="arrow right-arrow">{">"}</span>
                <span className="circle-indicators">
                    {
                        picData.map( ( _ , index) => {
                            if (index===currentPic) {
                                return <button key={index} className="circ-indicator active-indicator" onClick={ () => setCurrentPic(index)}></button>
                            } else {
                                return <button key={index} className="circ-indicator" onClick={ () => setCurrentPic(index)}></button>
                            }
                        })
                    }

                </span>
            </div> :
            <div>
                <p>Loading...</p>
            </div>
    }
    </div>
}