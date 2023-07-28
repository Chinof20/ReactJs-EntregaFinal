import { db } from "../../services/firebase/firebaseConfig";
import React, { useContext } from "react";
import { useState } from "react";
import { CartContext } from "../../context/CartContext";
import { Timestamp, addDoc, collection, documentId, getDocs, query, where, writeBatch } from "firebase/firestore";
import CheckoutForm from "../CheckoutForm/CheckoutForm"


const Checkout = () => {
    const [orderId, setOrderId] = useState('')    

    const { cart, totalPrice, clearCart } = useContext(CartContext)

    const createOrder = async ( { name, phone, email } ) => {

        try{
            const objOrder = {
                buyer: {
                    name, phone, email
                },
                items: cart,
                total: totalPrice(),
                date: Timestamp.fromDate(new Date())
            }
            const batch = writeBatch(db)
            const outOfStock = []
            const ids = cart.map(prod => prod.id)
            const productsRef = collection(db, 'productos')
            const productAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids)))
            const { docs } = productAddedFromFirestore
            docs.forEach( doc =>{
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock
                
                const productAddedToCart = cart.find( prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart?.quantity

                if(stockDb >= prodQuantity){
                    batch.update(doc.ref, {stock: stockDb - prodQuantity})
                }else{
                    outOfStock.push({id: doc.id, ...dataDoc })
                }

            } )

            if(outOfStock.length === 0){
                await batch.commit()
                const orderRef = collection(db, 'ordenes')
                const orderAdded = await addDoc(orderRef, objOrder)
                setOrderId(orderAdded.id)
                clearCart()
            } else{
                console.error("Hay productos que estan fuera de stock")
            }
        } catch (error) {
            console.log(error)
        }
    }



    if(orderId){
        return <h1>El id de su orden es: {orderId}</h1>
    }
    

    return(
        <div>
            <h1 className="title is-5 has-text-black">Checkout</h1>
            <CheckoutForm onConfirm={createOrder}/>
        </div>
    )

}




export default Checkout