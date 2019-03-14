import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
//import { confirmAlert } from 'react-confirm-alert';
import { confirmAlert } from "react-custom-confirm-alert"
import './table.css'


import 'react-confirm-alert/src/react-confirm-alert.css'

const TableProduits = props => (
  <div>
  <div className="table-responsive">
	<table className="table table-bordered">
		<thead>
			<tr className="bg-primary">
        <th><center>Id</center></th>
				<th><center>Produits</center></th>
				<th><center>Prix</center></th>
				<th><center>Actions</center></th>
			</tr>
		</thead>
		<tbody>
			{props.Produits.length > 0 ? (
				props.Produits.map(produit => (
					<tr key={produit.id}>
          <td><p>{produit.id}</p></td>
						<td><p id="capital">{produit.name}</p></td>
						<td><p id="prix">{produit.prixProd}</p></td>
						<td>
              <center>
							<button className='btn btn-danger' onClick={
                () => {
                  confirmAlert({
                    title: 'Suppression Produit',
                    message: produit.name.substring(0,1).toUpperCase()+produit.name.substring(1).toLowerCase(),
                    buttons: [
                      {
                        label: 'OUI',
                        onClick: () => props.deleteProduit(produit.id)
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
                  props.editRow(produit)
                }}
                className="btn btn-success"
              >
                Edit
              </button>
              </center>
						</td>
					</tr>
				))
			) : (
				<tr>
				</tr>
			)}
		</tbody>
	</table>
  
  </div>

  </div>
  
)


export default TableProduits