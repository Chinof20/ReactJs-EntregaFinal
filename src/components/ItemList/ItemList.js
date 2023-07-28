import Item from "../Item/Item";
import React from "react";
import "./ItemList.css"
import "bulma/css/bulma.css"

const ItemList = ( {data = []} ) =>{
    return(
        <div className="container listGroup home">
            {data.map(product => <Item key={product.id} info={product} />)}
        </div>
    )
}

export default ItemList