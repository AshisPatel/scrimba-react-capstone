import React, { useContext, useState } from "react";
import { Context } from "../context/Context";

function CartItem({item}) {

    const { removeFromCart } = useContext(Context); 
    const [isHovered, setIsHovered] = useState(false);

    const trashIcon = isHovered ?  `ri-delete-bin-fill` :  `ri-delete-bin-line`;

    return (
        <div className = "cart-item">
            <i className = {trashIcon}
            onClick={() => removeFromCart(item.id)}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            ></i>
            <img src={item.url} width="130px" />
            <p>$5.99</p>
        </div>
    )
}

export default CartItem;