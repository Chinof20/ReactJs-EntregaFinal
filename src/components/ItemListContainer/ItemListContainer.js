import React from "react";
import Title from "../Title/Title";
import ItemList from "../ItemList/ItemList";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../../services/firebase/firebaseConfig"
import "bulma/css/bulma.css"


export const ItemListContainer = () =>{
    const [data, setData] = useState([])

    const { categoriaId } = useParams()

    useEffect( () => {
            
            const collectionRef = categoriaId ? query(collection(db, 'productos'), where('category', '==', categoriaId)) : collection(db, 'productos');

            getDocs(collectionRef)
                .then( response => {
                    const productsAdapted = response.docs.map( doc => {
                        const data = doc.data()
                        return {id: doc.id, ...data}
                    } )
                    setData(productsAdapted)

                } )
                .catch( error => {
                    console.log(error)
                })
                
            }, [categoriaId])
    
    return(
        <div>
            <Title greeting='Productos'/>
            <ItemList data={data} />
        </div>
    )
}

export default ItemListContainer