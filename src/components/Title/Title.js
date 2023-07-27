import React from "react";
import "bulma/css/bulma.css"

export const Title = ({greeting}) =>{
    return(
        <h1 className="title is-2 has-text-black">
            {greeting}
        </h1>
    )
}

export default Title