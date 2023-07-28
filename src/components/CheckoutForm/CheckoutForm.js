import { useState } from "react";

const CheckoutForm = ({ onConfirm }) =>{
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    
    const handleConfirm = (event) => {
        event.preventDefault()

        const userData = {
            name, phone, email
        }
    
        onConfirm(userData)
    }


    return(
        <div>
            <form onSubmit={handleConfirm} className="container">
                <div class="field">
                    <label class="label">Nombre</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="e.g Alex Smith" onChange={ ({target})=>setName(target.value)}/>
                    </div>
                </div>
                <div class="field">
                    <label class="label">Teléfono</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="12532566" onChange={ ({target})=>setPhone(target.value) }/>
                    </div>
                </div>

                <div class="field">
                    <label class="label">Email</label>
                    <div class="control">
                        <input class="input" type="email" placeholder="e.g. alexsmith@gmail.com" onChange={ ({target})=>setEmail(target.value) }/>
                    </div>
                </div>

                <div>
                    <button type="submit" className="button is-light mb-3" > Crear Orden </button>
                </div>

            </form>
        </div>
    )
}



export default CheckoutForm