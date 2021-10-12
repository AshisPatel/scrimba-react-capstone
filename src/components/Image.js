import React, { useState, useContext } from "react";
import { Context } from "../context/Context";
import PropTypes from "prop-types";

function Image({className, img}) {

    const { toggleFavorite } = useContext(Context); 

    const [isHovered, setIsHovered] = useState(false);

    const heartIcon = isHovered && <i className="ri-heart-line favorite" onClick={() => toggleFavorite(img.id)}></i> 
    const favoritedHeartIcon = isHovered && <i className="ri-heart-fill favorite" onClick={() => toggleFavorite(img.id)}></i>
    const cartIcon = isHovered &&  <i className="ri-add-circle-line cart"></i> 
    
    return (
        <div 
            className = {`${className} image-container`} 
            onMouseEnter={() => setIsHovered(true)} 
            onMouseLeave={() => setIsHovered(false)}
            
        >
            {img.isFavorite ? favoritedHeartIcon : heartIcon}
            {cartIcon}
            <img src={img.url} className="image-grid" />
        </div>
    )
}

Image.propTypes = {
    className:  PropTypes.string,
    // Shape allows us to structure our object
    img: PropTypes.shape({
        id: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        isFavorite: PropTypes.bool
    })
};



export default Image; 