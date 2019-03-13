import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
//import { confirmAlert } from 'react-confirm-alert';
import { confirmAlert } from "react-custom-confirm-alert"


import 'react-confirm-alert/src/react-confirm-alert.css'

const TableProduits = props => (
  <div className="table-responsive">
	<table className="table">
		<thead>
			<tr className="bg-primary">
        <th><center>Id</center></th>
				<th><center>Produits</center></th>
				<th><center>Prix</center></th>
				<th><center>Actions</center></th>
			</tr>
		</thead>
		<tbody>
			{props.users.length > 0 ? (
				props.users.map(user => (
					<tr key={user.id}>
          <td>{user.id}</td>
						<td>{user.name}</td>
						<td>{user.username}</td>
						<td>
							<button className='btn btn-danger' onClick={
                () => {
                  confirmAlert({
                    title: 'Suppression Produit',
                    message: user.name,
                    buttons: [
                      {
                        label: 'OUI',
                        onClick: () => props.deleteUser(user.id)
                      },
                      {
                        label: 'NON',
                        onClick: () => ''
                      }
                    ]
                  })
                }}>
                &times;
              </button>
              <button onClick={
			() => {
				confirmAlert({
				customUI: ({ onClose }) => {
					return (
						<div className="custom-ui">
							
							<button
								onClick={() => {
                  props.editRow(user)
                  onClose();
                }}
							>
								ok
							</button>
              <button onClick={onClose}>Annuler</button>
						</div>
					);
				}
			})
		}
		}  className="btn btn-success">Edit</button>
              <button
                onClick={() => {
                  props.editRow(user)
                }}
                className="btn btn-success"
              >
                Edit
              </button>
						</td>
					</tr>
				))
			) : (
				<tr>
					<td colSpan={3}>No users</td>
				</tr>
			)}
		</tbody>
	</table>
  </div>
)


export default TableProduits