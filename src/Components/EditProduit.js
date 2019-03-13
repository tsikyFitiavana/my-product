import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './Edit.css'
//import { confirmAlert } from "react-custom-confirm-alert"

const EditProduitForm = props => {
	const [ user, setUser ] = useState(props.currentUser)

	const handleInputChange = event => {
		const { name, value } = event.target

		setUser({ ...user, [name]: value })
    }
    useEffect(
        () => {
          setUser(props.currentUser)
        },
        [ props ]
      )

	return (        
		<form
			
			onSubmit={event => {
				event.preventDefault()
				if(isNaN(user.username)){
					var erreur = document.getElementById('erreur')
					erreur.innerHTML = 'Entrer un nombre'
				}else{
					var erreur = document.getElementById('erreur')
					erreur.innerHTML = ''
					props.updateUser(user.id, user)
				}
				
			}}
		> 
  
			<input type="text" name="username" value={user.username} onChange={handleInputChange} />
			<p id="erreur"></p>
			<button className ="btn btn-secondary">OK</button>
			&nbsp;&nbsp;<button onClick={() => props.setEditing(false)} className="btn btn-secondary">
				Annuler
			</button>
		</form>
	)
}

export default EditProduitForm