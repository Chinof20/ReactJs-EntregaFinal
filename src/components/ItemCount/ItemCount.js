import "./ItemCount.css"
import React from "react";
import { useState, useEffect } from "react";
import "bulma/css/bulma.css"

export const ItemCount = ({ initial, stock, onAdd}) =>{
    const [count, setCount] = useState(initial)

    const decrement = () =>{
        
        setCount(count-1)
    }

    const increment = () =>{
        setCount(count+1)
    }

    useEffect( ()=>{
        setCount(parseInt(initial))
    }, [initial])

    return(
        <div className="box has-background-success-dark is-flex is-flex-direction-column">
            <div className="is-flex is-justify-content-space-evenly">
                <button className="button is-warning is-rounded" title="Disabled button" disabled={count<=1} onClick={decrement} >-</button>
                <span className="title is-3 has-text-black" >{count}</span>
                <button className="button is-warning is-rounded" disabled={count>=stock}  onClick={increment}>+</button>
            </div>
            <div>
                <button className="button is-warning is-rounded" disabled={stock <= 0} onClick={ ()=> onAdd(count) } >Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount