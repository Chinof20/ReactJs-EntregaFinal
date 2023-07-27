import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

export const CartWidget = () => {
    const { totalProducts } = useContext(CartContext)
    return(
        <div>
            <Link to='/cart'>
                <i className="bi bi-cart2"></i>
                <span> {totalProducts() || ''} </span>
            </Link>
        </div>
    )
}

export default CartWidget