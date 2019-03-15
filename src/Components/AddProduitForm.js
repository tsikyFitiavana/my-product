import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './Add.css';

const AddProduitForm = props => {
	const initialFormState = { id: null, name: '', prixProd: '' }
	const [ produit, setUser ] = useState(initialFormState)

	const handleInputChange = event => {
		const { name, value } = event.target

		setUser({ ...produit, [name]: value })
	}

	return (
		<div className="container" id="noMarg">
		<form
			onSubmit={event => {
				event.preventDefault()
				if (!produit.name || !produit.prixProd) return

				if(isNaN(produit.prixProd)){
					var err = document.getElementById('addErreur')
					err.innerHTML = 'Entrer un nombre'
				}else{
					var err2 = document.getElementById('addErreur')
					err2.innerHTML = ''
					props.addProduit(produit)
					props.setCount(props.count +1)
					setUser(initialFormState)
				}
			}}
		className="row" id="noMargeleft">
			<div className="col-md-4 noMarge" >
				<label>Produit</label>&nbsp;&nbsp;&nbsp;
				<input type="text" name="name" value={produit.name} onChange={handleInputChange} />
			</div>
			<div className="col-md-4" id="center">
				<label>Prix</label>&nbsp;&nbsp;&nbsp;
				<input type="text" name="prixProd" value={produit.prixProd} onChange={handleInputChange} />&nbsp;
				<label>Ar</label>
				<p id="addErreur"></p>
			</div>
			<div className="col-md-4" id="btnRigth">
				<button className="btn btn-info">Ajouter</button>
			</div>
			
			
			
		</form>
		</div>
	)
}

export default AddProduitForm