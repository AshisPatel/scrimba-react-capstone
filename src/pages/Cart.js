import React, { useContext, useState } from "react";
import { Context } from "../context/Context";
import CartItem from "../components/CartItem";

function Cart() {
    const { cartItems, clearCart } = useContext(Context);

    const cartItemElements = cartItems.map(item =>(
        <CartItem key={item.id} item={item} />
    ))

    const [buttonText, setButtonText] = useState("Place Order");

    const placeOrderBtn = cartItems.length > 0 ? <button onClick={placeOrder}>{buttonText}</button> : <p>You have no items in your cart!</p>

    function totalCost() {
        const totalCost = cartItems.length * 5.99;
        return totalCost.toLocaleString("en-US", {style: "currency", currency: "USD"});
    }

    function placeOrder() {
        setButtonText("Ordering...");
        setTimeout(() => {
            alert("Order placed!");
            setButtonText("Place Order");
            clearCart();
        }, 3000)
    }

    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {cartItemElements}
            <p className="total-cost">Total: {totalCost()}</p>
            <div className = "order-button">
                {placeOrderBtn}
            </div>
        </main>
    )
}

export default Cart