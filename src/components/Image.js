import React, { useState, useContext } from "react";
import { Context } from "../context/Context"

function Image({className, img}) {

    const { toggleFavorite } = useContext(Context); 

    const [isHovered, setIsHovered] = useState(false);

    const heartIcon = isHovered && <i className="ri-heart-line favorite" onClick={() => toggleFavorite(img.id)}></i> 
    const cartIcon = isHovered &&  <i className="ri-add-circle-line cart"></i> 
    
    return (
        <div 
            className = {`${className} image-container`} 
            onMouseEnter={() => setIsHovered(true)} 
            onMouseLeave={() => setIsHovered(false)}
            
        >
            {heartIcon}
            {cartIcon}
            <img src={img.url} className="image-grid" />
        </div>
    )
}

export default Image; 