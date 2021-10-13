import React, { useState, useContext } from "react";
import { Context } from "../context/Context";
import PropTypes from "prop-types";
import useHover from "../hooks/useHover";

function Image({ className, img }) {

    const { toggleFavorite, addToCart, cartItems, removeFromCart } = useContext(Context);

    const [isHovered, ref] = useHover();

    const heartIcon = isHovered && <i className="ri-heart-line favorite" onClick={() => toggleFavorite(img.id)}></i>
    const favoritedHeartIcon = isHovered && <i className="ri-heart-fill favorite" onClick={() => toggleFavorite(img.id)}></i>

    function cartIcon() {

        const cartCheck = cartItems.some(item => item.id === img.id);
        if (cartCheck && isHovered) {
            return <i className="ri-shopping-cart-fill cart" onClick={() => removeFromCart(img.id)}></i>
        } else if (isHovered) {
            return <i className="ri-add-circle-line cart" onClick={() => addToCart(img)}></i>
        }

    }

    return (
        <div
            className={`${className} image-container`}
            ref={ref}
        >
            {img.isFavorite ? favoritedHeartIcon : heartIcon}
            {cartIcon()}
            <img src={img.url} className="image-grid" />
        </div>
    )
}

Image.propTypes = {
    className: PropTypes.string,
    // Shape allows us to structure our object
    img: PropTypes.shape({
        id: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        isFavorite: PropTypes.bool
    })
};



export default Image;