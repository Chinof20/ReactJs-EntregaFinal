import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import ItemCart from "../ItemCart/ItemCart";
import "bulma/css/bulma.css"

const Cart = () =>{
    const { cart , totalPrice , clearCart } = useContext(CartContext)
    
    if(cart.length === 0){
        return(
            <div>
                <p className="title is-5 has-text-black"> No hay productos en el carrito </p>
                <Link to='/' className="button is-warning is-light mb-5" > Hacer compras</Link>
            </div>
        )
    }

    return(
        <div className="container box">
            <div className="table-container">
                {
                    cart.map( product => <ItemCart key={product.id} product={product} /> )
                }
            </div>
            <tfoot className="table is-bordered is-flex is-flex-direction-column is-justify-content-center">
                <th><abbr>   <p className="has-text-centered" >
                    Total: ${totalPrice()}    
                </p> </abbr></th>
                <tr><abbr>   <p>
                    <button onClick={()=>clearCart()} className="button mt-2" >Limpiar carrito</button>
                </p> </abbr></tr>
                <tr><abbr>   <p>
                    <Link to='/checkout' className="button mt-2" > Checkout </Link>
                </p> </abbr></tr>
            </tfoot>
        </div>
    )
}

export default Cart