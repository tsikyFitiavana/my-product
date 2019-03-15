import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import TableProduits from './Components/TableProduits'
import AddProduitForm from './Components/AddProduitForm'
import EditProduitForm from './Components/EditProduit'
import './App.css'

const App = () => {
  const ProduitsData = [
  ]

  const [Produits, setProduits] = useState(ProduitsData)
  const [count, setCount] = useState(0)
  
  const addProduit = produit => {
		produit.id = count
		setProduits([ ...Produits, produit ])
  }
  const deleteProduit = id => {
    setProduits(Produits.filter(produit => produit.id !== id))
  }
  const [ modifier, setModifier ] = useState(false)
  const initialFormState = { id: null, name: '', prixProd: '' }
  const [ currentUser, setCurrentUser ] = useState(initialFormState)

  const editRow = produit => {
    setModifier(true)
    setCurrentUser({ id: produit.id, name: produit.name, prixProd: produit.prixProd })
  }
  const updateProduit = (id, updateProduit) => {
    setModifier(false)
    setProduits(Produits.map(produit => (produit.id === id ? updateProduit : produit)))
  }
  const somProd=()=>{
    var tot = document.getElementById('tot')
    let total=0;
    for(let i=0;i<Produits.length;i++){
        total=total+parseInt(Produits[i].prixProd);
    }
     let a=[total]

    var numberFormat = new Intl.NumberFormat("es-ES");
    var formatted = a.map(numberFormat.format);
    tot.innerHTML = formatted
    return formatted.join("; ")
    }
  return (
    <div>
      
    <div className="container">
      
        {modifier ? (
          <div id="parentPop_up">
          <div id="pop_up">
          <EditProduitForm
            modifier={modifier}
            setModifier={setModifier}
            currentUser={currentUser}
            updateProduit={updateProduit}
          />
          </div>
          </div>
          
          ):
          (
          <p></p>
    )}
          <AddProduitForm addProduit={addProduit} setCount={setCount} count={count}/>
          <TableProduits Produits={Produits} editRow={editRow}  deleteProduit={deleteProduit}/>
          
          
    </div>
    <div className="container" >
    <div id="total">
    <button  onClick ={()=>{somProd()}} className="btn btn-warning withMarg">TOTAL</button>
    </div>
    <br/>
    <div id="divBoite"><p>TOTAL = &nbsp;&nbsp;<span id="tot"> </span>&nbsp;&nbsp;Ar</p></div>
    </div>
  </div>
  )
  
}

export default App