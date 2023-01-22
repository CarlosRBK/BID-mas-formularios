import React from "react";
import { useState } from "react"
import './Form.css';

const Form = ( {datos, setDatos} ) => {

  const [nombre, setNombre] = useState ("");
  const [apellido, setApellido] = useState ("");
  const [email, setEmail] = useState ("");
  const [password, setPassword] = useState ("");
  const [confirmPassword, setConfirmPassword] = useState ("");


  return (
    <div className="container">
        <form className="container-form">
        <div className="form-group">
            <label htmlFor="nombre">First Name</label>
            <input type="text" value={nombre} onChange ={(e) => setNombre(e.target.value)} />
        </div>
        {
                nombre.length != 0 && nombre.length < 2
                 ? <p className="error">First Name must be a least 2 characters</p>
                 : null 
                    
        }
        <div className="form-group">
            <label htmlFor="apellido">Last Name</label>
            <input type="text" value={apellido} onChange ={(e) => setApellido(e.target.value)} />
        </div>
        {
                apellido.length != 0 && apellido.length < 2
                 ? <p className="error">Last Name must be a least 2 characters</p>
                 : null 
                    
        }
        <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        {
                email.length != 0 && email.length < 2
                 ? <p className="error">Email must be a least 2 characters</p>
                 : null 
                    
        }
        <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        {
                password.length != 0 && password.length < 8
                 ? <p className="error">Password must be a least 8 characters</p>
                 : null 
                    
        }
        <div className="form-group">
            <label htmlFor="confirmPassword" className="form-group-cpassword">Confirm <span>Password</span></label>  
            <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        </div>
        {
                confirmPassword !== password ?
                    <p className="error">Password must match</p>
                    :
                    null
        }
        </form>
        <div className="result-container">
            <h2>Your Form Data</h2>
            <p>First Name: {nombre}</p>
            <p>Last Name: {apellido}</p>
            <p>Email:{email}</p>
            <p>Password: {password}</p>
            <p>Confirm Password: {confirmPassword}</p>
        </div> 
    </div>

  )
}

export default Form;