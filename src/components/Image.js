import React, { useState } from "react";

function Image({className, img}) {

    const [isHovered, setisHovered] = useState(false);
    
    function hoverHandler(event){
        setisHovered(prevState => !prevState.isHovered);
    }

    return (
        <div className = {`${className} image-container`}>
            <img src={img.url} className="image-grid" onMouseEnter={hoverHandler} onMoustLeave={hoverHandler}/>
        </div>
    )
}

export default Image; 