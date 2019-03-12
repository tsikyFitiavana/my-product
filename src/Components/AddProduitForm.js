import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';

const AddProduitForm = props => {
	const initialFormState = { id: null, name: '', username: '' }
	const [ user, setUser ] = useState(initialFormState)

	const handleInputChange = event => {
		const { name, value } = event.target

		setUser({ ...user, [name]: value })
	}

	return (
		<form
			onSubmit={event => {
				event.preventDefault()
				if (!user.name || !user.username) return

                props.addUser(user)
                props.setCount(props.count +1)
				setUser(initialFormState)
			}}
		>
			<label>Produit</label>
			<input type="text" name="name" value={user.name} onChange={handleInputChange} />
			<label>Prix</label>
			<input type="text" name="username" value={user.username} onChange={handleInputChange} />
			<button className="btn btn-info">Ajouter</button>
		</form>
	)
}

export default AddProduitForm