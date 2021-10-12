import React, { useContext } from "react";
import { Context } from "../context/Context";
import { Link } from "react-router-dom";

function Header() {
    const { cartItems } = useContext(Context); 

    // Variable determines the class name for the icon that will render for the cart 
    const cartStatus= cartItems.length > 0 ? "ri-shopping-cart-fill" : "ri-shopping-cart-line";

    const numCartItems = cartItems.length > 0  ? cartItems.length : "";
    
    return (
        <header>
            <Link to="/"><h2>Pic Some</h2></Link>
            <Link to="/cart">
                <div><i className={`${cartStatus} ri-fw ri-2x`}></i>{numCartItems}</div>
            </Link>
        </header>
    )
}

export default Header