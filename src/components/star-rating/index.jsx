import { useState } from 'react';
import {FaStar} from 'react-icons/fa'
import './styles.css'


export default function StarRating({noOfStars=5}){

    const [rating,setRating] = useState(0)
    const [hover,setHover] = useState(0)





    return (
        <div>
            {[...Array(noOfStars)].map((_,index)=>{
                index +=1;
                return (
                <FaStar
                className={index <= (rating || hover)?'active':'inactive'}
                key={index}
                onClick={()=>setRating(index)}
                onMouseMove={()=>{setHover(index)}}
                onMouseLeave={()=>{setRating(index)}}
                size={40}
                ></FaStar>
            )
            })}
        </div>
    )
}