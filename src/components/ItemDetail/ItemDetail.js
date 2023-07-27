import "./ItemDetail.css"
import "bulma/css/bulma.css"
import React, { useContext } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { useState } from "react";
import { CartContext } from "../../context/CartContext";

export const ItemDetail = ( {data} ) =>{
    const [goToCart, setGoToCart] = useState(false)
    
    const {addProduct} = useContext(CartContext)

    const onAdd = (quantity) =>{
        setGoToCart(true)
        addProduct(data, quantity)
    }

    return(
        <div className="container">
            <div className="detail">
                <img className="itemImg" src={data.image} alt={data.title}/>
                <div className="content">
                    <h1 className="title is-3 has-text-black">{data.title}</h1>
                    <p className="title is-5 has-text-black">{data.description}</p>
                    {
                        goToCart
                        ? <Link to='/cart' className="button is-warning is-rounded"> Terminar Compra </Link>
                        : <ItemCount initial={1} stock={data.stock} onAdd={onAdd} /> 
                    }
                </div>
            </div>
        </div>
    )
}

export default ItemDetail