import React from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc} from "firebase/firestore"
import { db } from "../../services/firebase/firebaseConfig"
import "./ItemDetailContainer.css"

export const ItemDetailContainer = () =>{
    const [data, setData] = useState([])

    const { itemId } = useParams()


    useEffect( () =>{
        const docRef = doc(db, 'productos', itemId)
        getDoc(docRef)
            .then( response => {
                const data = response.data()
                const productAdapted = { id: response.id, ...data }
                setData(productAdapted)
            } )
            .catch ( error => {
                console.log(error)
            } )
    }, [itemId])


    return(
        <div className="itemDetailContainer">
            <ItemDetail data={data} />
        </div>
    )
}

export default ItemDetailContainer

/*
()=>{
        const querydb = getFirestore()
        const queryDoc = doc(querydb, 'productos', detalleId)
        getDoc(queryDoc)
            .then( res=> setData({ id: res.id, ...res.data()} ) )
    }, [detalleId] */