import "./ItemCart.css"
import "bulma/css/bulma.css"
import React, { useContext } from "react"
import { CartContext } from "../../context/CartContext"

const ItemCart = ({ product }) =>{
    const { removeProduct } = useContext(CartContext)
    
    return(
            <table className="container table is-bordered is-fullwidth is-hoverable">
                <thead>
                    <tr>
                        <th><p className="has-text-centered"> Producto </p></th>
                        <th><abbr> <p className="has-text-centered"> Título </p> </abbr></th>
                        <th><abbr> <p className="has-text-centered">  Cantidad </p> </abbr></th>
                        <th><abbr> <p className="has-text-centered">Precio U.</p> </abbr></th>
                        <th><abbr> <p className="has-text-centered"> Subtotal </p></abbr></th>
                        <th><abbr> <p className="has-text-centered"> - </p> </abbr></th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td> <img className="itemImg"  src={product.image} alt={product.title} /> </td>
                        <td> <h1> {product.title} </h1> </td>
                        <td> <p> {product.quantity} </p> </td>
                        <td> <p> {product.price} </p></td>
                        <td> <p> {product.quantity*product.price} </p> </td>
                        <td> <button className="button" onClick={() => removeProduct(product.id)} >X</button> </td>
                    </tr>
                </tbody>
        </table>
    )
}


export default ItemCart