import React from "react";
import { useState, createContext } from "react";

export const CartContext = createContext({
    cart: []
})


const CartProvider = ( {children} ) =>{
    
    const [cart, setCart] = useState([])

    const addProduct = ( item, newQuantity) =>{
        const { quantity = 0 } = cart.find( prod => prod.id === item.id ) || {}
        const newCart = cart.filter( prod => prod.id !== item.id )
        //newCart.push({...item, quantity: newQuantity})
        setCart([...newCart, {...item, quantity: quantity+newQuantity } ])
        //setCart(newCart)
    }

    console.log("Carrito ", cart)

    const clearCart = () =>{
        setCart([])
    }
    
    const isInCart = (id) => {
        return cart.find( product => product.id === id ) ? true : false
    }

    const removeProduct = (id) => {
        setCart( cart.filter( product => product.id !== id ) )
    }
    
    const totalPrice = () =>{
        return cart.reduce( (prev,act) => prev + act.quantity * act.price, 0)
    }

    const totalProducts = () =>{
        return cart.reduce( (acumulador, productoActual) => acumulador + productoActual.quantity, 0)
    }



    return(
        <CartContext.Provider value={{ cart ,clearCart, isInCart, removeProduct, addProduct, totalPrice, totalProducts }}>
            {children}
        </CartContext.Provider>
    )
}



export default CartProvider