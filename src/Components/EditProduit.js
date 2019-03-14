import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './Edit.css'
//import { confirmAlert } from "react-custom-confirm-alert"

const EditProduitForm = props => {
	const [ produit, setUser ] = useState(props.currentUser)

	const handleInputChange = event => {
		const { name, value } = event.target

		setUser({ ...produit, [name]: value })
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
				if(isNaN(produit.prixProd)){
					var erreur = document.getElementById('erreur')
					erreur.innerHTML = 'Entrer un nombre'
				}else{
					var erreur2 = document.getElementById('erreur')
					erreur2.innerHTML = ''
					props.updateProduit(produit.id, produit)
				}
				
			}}
		> 
  
			<input type="text" name="prixProd" value={produit.prixProd} onChange={handleInputChange} />
			<p id="erreur"></p>
			<button className ="btn btn-secondary">OK</button>
			&nbsp;&nbsp;<button onClick={() => props.setModifier(false)} className="btn btn-danger">
				Annuler
			</button>
		</form>
	)
}

export default EditProduitForm