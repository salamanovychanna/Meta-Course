import { useEffect, useState } from "react";
import { Blurhash } from "react-blurhash";

const ImageWrapper = ({srcString, classNameString, altString, hash, heightValue, widthValue}) => {
    const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(()=>{
        const img = new Image();
        img.onload = () => {
            setImageLoaded(true)
        };
        img.src = srcString
    }, [srcString, altString, classNameString])

    return (
        <>
        {imageLoaded 
        ? 
            <img
            src={srcString} 
            className={classNameString}
            alt={altString}
            /> 
        : 
            <Blurhash
            hash={hash}
            height={heightValue}
            width={widthValue}
            resolutionX={64}
            resolutionY={64}
            punch={1}
            ></Blurhash>
            }
        </>
    )
}
export default ImageWrapper;