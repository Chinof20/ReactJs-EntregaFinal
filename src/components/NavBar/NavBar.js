import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import { NavLink } from "react-router-dom";
import Logo from "../../img/arigato_2023.png"
import "./NavBar.css"
import "bulma/css/bulma.css"

export const NavBar = () =>{
    return (
        
        <div className="container mb-6">
            <nav className="navbar has-background-white-ter nav-bar" role="navigation" aria-label="main navigation">

                    <div className="navbar-brand">
                        <NavLink to='/' className="is-flex">
                            <img src={Logo} className="logo" />
                            <p className="navbar-item title is-5 has-text-black" >Arigato</p>
                        </NavLink>
                        <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        </a>
                    </div>
                    
                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-start secciones">
                        <NavLink className="navbar-item" to='/categoria/arroces' > Arroces </NavLink>
                        <NavLink className="navbar-item" to='/categoria/fideos' > Fideos </NavLink>
                        <NavLink className="navbar-item" to='/categoria/sopas' > Sopas </NavLink>
                        <NavLink className="navbar-item" to='/categoria/ensaladas' > Ensaladas </NavLink>
                    </div>
                </div>

                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                            <NavLink className="button is-light" to='/cart' >
                                <CartWidget />
                            </NavLink>
                        </div>
                    </div>
                </div>

            </nav>

        </div>
    )
}

export default NavBar