import { useState } from "react";
import "./styles.css"
import {FaStar} from 'react-icons/fa'

export default function StarRating({numStars=5}) {

    const [currentRating, setCurrentRating] = useState(-1);
    const [mouseRating, setMouseRating] = useState(-1);

    function starColor(currentIndex) {
        if (currentIndex <= currentRating || currentIndex <= mouseRating) {
            return 'yellow'
        } else {
            return 'black'
        }
    }

    return <div className='star-rating'>
        {
            [...Array(numStars)].map((_, index) => {
                return <FaStar
                    key={index}
                    onClick={ () => setCurrentRating(index)}
                    onMouseOver={() => setMouseRating(index)}
                    onMouseLeave={() => setMouseRating(-1)}
                    style={{color: `${starColor(index)}`}}
                    />
            })
        }

    
    </div>
}