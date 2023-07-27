import Item from "../Item/Item";
import React from "react";

const ItemList = ( {data = []} ) =>{
    return(
        <div>
            {data.map(product => <Item key={product.id} info={product} />)}
        </div>
    )
}

export default ItemList