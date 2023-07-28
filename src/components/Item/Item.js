import "./Item.css"
import React from "react"
import { Link } from "react-router-dom"

const Item = ({info}) =>{    
    
    return(
    <div className="container mb-6">
        <section className="section has-background-success-dark card">
            <header className="header">
                <h2 className="title is-5 has-text-black">
                {info.title}
                </h2>
            </header>

            <picture>
                <img src={info.image} alt={info.title} className="itemImg"/> 
            </picture>

            <section>
                <p className="info">
                    Precio: ${info.price}
                </p>

            </section>
            <footer className="itemFooter">
                <Link to={`/detalle/${info.id}`} className="detalle" > Ver detalle </Link>
            </footer>

        </section>
    </div>
    )
}

export default Item
