import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './Add.css';

const AddProduitForm = props => {
	const initialFormState = { id: null, name: '', username: '' }
	const [ user, setUser ] = useState(initialFormState)

	const handleInputChange = event => {
		const { name, value } = event.target

		setUser({ ...user, [name]: value })
	}

	return (
		<div>
		<form
			onSubmit={event => {
				event.preventDefault()
				if (!user.name || !user.username) return

				if(isNaN(user.username)){
					var err = document.getElementById('addErreur')
					err.innerHTML = 'Entrer un nombre'
				}else{
					var err2 = document.getElementById('addErreur')
					err2.innerHTML = ''
					props.addUser(user)
					props.setCount(props.count +1)
					setUser(initialFormState)
				}
			}}
		>
			<label>Produit</label>
			<input type="text" name="name" value={user.name} onChange={handleInputChange} />
			<label>Prix</label>
			<input type="text" name="username" value={user.username} onChange={handleInputChange} />
			<label>Ar</label>
			<button className="btn btn-info">Ajouter</button>
		</form>
		<p id="addErreur"></p>
		</div>
	)
}

export default AddProduitForm