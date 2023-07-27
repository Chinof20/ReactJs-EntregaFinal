import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import {NavLink, Link} from 'react-router-dom'
import Logo from "../../img/arigato_2023.png"
import "./NavBar.css"
import "bulma/css/bulma.css"

export const NavBar = () =>{
    return (
        
        <div className="container mb-6">
            <nav className="navbar" role="navigation" aria-label="main navigation">

                    <NavLink to='/'>
                        <div className="navbar-brand">
                            <a className="navbar-item" >
                            <img src={Logo} className="logo" />
                            </a>
                            <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                            </a>
                        </div>
                    </NavLink>
                    <p className="navbar-item" >Arigato</p>
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