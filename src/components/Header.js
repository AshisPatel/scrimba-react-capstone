import React, { useContext } from "react";
import { Context } from "../context/Context";
import { Link } from "react-router-dom";

function Header() {
    const { cartItems } = useContext(Context); 
    return (
        <header>
            <Link to="/"><h2>Pic Some</h2></Link>
            <Link to="/cart">
                {cartItems.length > 0 ? 
                <i className="ri-shopping-cart-fill ri-fw ri-2x"></i> :  
                <i className="ri-shopping-cart-line ri-fw ri-2x"></i> }
            </Link>
        </header>
    )
}

export default Header