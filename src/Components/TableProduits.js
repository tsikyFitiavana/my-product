import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
//import { confirmAlert } from 'react-confirm-alert';
import { confirmAlert } from "react-custom-confirm-alert"
import './table.css'


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
          <td><p>{user.id}</p></td>
						<td><p id="capital">{user.name}</p></td>
						<td><p id="prix">{user.username}</p></td>
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
              &nbsp;&nbsp;
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