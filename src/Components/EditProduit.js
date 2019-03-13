import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.css';

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
					console.log('Entrer un nombre')
				}else{
					props.updateUser(user.id, user)
				}
				
			}}
		> 
			<input type="text" name="username" value={user.username} onChange={handleInputChange} />
			<button>OK</button>
			<button onClick={() => props.setEditing(false)} className="button muted-button">
				Annuler
			</button>
		</form>
	)
}

export default EditProduitForm