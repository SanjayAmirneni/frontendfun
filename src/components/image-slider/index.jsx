import { useEffect, useState } from 'react'
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs'
import './styles.css'


export default function ImageSlider({url, limit =5, page=1}){

    const [images, setImages] = useState([])
    const [currentImage, setCurrentImage] = useState(0)

    async function fetchImages(url){
        try{
            let res = await fetch(`${url}?page=${page}&limit=${limit}`);
            let data = await res.json();
            if(data){
                setImages(data)
            }
        }catch(err){

        }
    }

    function displayPrevImage(){
        currentImage === 0?setCurrentImage(images.length-1):setCurrentImage(currentImage-1)
        
    }

    function displayNextImage(){
        currentImage === images.length-1?setCurrentImage(0):setCurrentImage(currentImage+1)
    }

    useEffect(()=>{
        if(url) fetchImages(url)
    },[url])

    return (
        <div className='container'>
            <BsArrowLeftCircleFill
            onClick={displayPrevImage}
            className='arrow arrow-left'></BsArrowLeftCircleFill>
            { images && images.length ?
                images.map((imageItem,index)=>(
                    <img
                    key={imageItem.id}
                    src={imageItem.download_url}
                    alt={imageItem.download_url}
                    className={index === currentImage?'image':'image hide'}
                    ></img>
                ))
                : null
            }
            <BsArrowRightCircleFill
            onClick={displayNextImage}
            className='arrow arrow-right'></BsArrowRightCircleFill>
            <span className='circle-indicators'>
            { images && images.length ?
                images.map((_,index)=>(
                    <button
                    key={index}
                    onClick={()=>{
                        setCurrentImage(index)
                    }}
                    className={currentImage === index?'slide-indicator current-indicator':'slide-indicator inactive-indicator'}
                    ></button>
                ))
                : null
            }
            </span>
        </div>
    )
}