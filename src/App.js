import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import TableProduits from './Components/TableProduits'
import AddProduitForm from './Components/AddProduitForm'
import EditProduitForm from './Components/EditProduit'

const App = () => {
  const usersData = [
  ]

  const [users, setUsers] = useState(usersData)
  const [count, setCount] = useState(0)
  
  const addUser = user => {
		user.id = count
		setUsers([ ...users, user ])
  }
  const deleteUser = id => {
    setUsers(users.filter(user => user.id !== id))
  }
  const [ editing, setEditing ] = useState(false)
  const initialFormState = { id: null, name: '', username: '' }
  const [ currentUser, setCurrentUser ] = useState(initialFormState)

  const editRow = user => {
    setEditing(true)
    setCurrentUser({ id: user.id, name: user.name, username: user.username })
  }
  const updateUser = (id, updatedUser) => {
    setEditing(false)
    setUsers(users.map(user => (user.id === id ? updatedUser : user)))
  }

  function somme(){
    var somme=0;
    var nombre = users.length;
    for (var i=0; i<nombre; i++) 
      somme+=users[i];
    return somme/nombre;
  }
  console.log(somme())

  return (
    <div className="container">
        {editing ? (
          <EditProduitForm
            editing={editing}
            setEditing={setEditing}
            currentUser={currentUser}
            updateUser={updateUser}
          />
          ): (
          <AddProduitForm addUser={addUser} setCount={setCount} count={count}/>
    )}

          <TableProduits users={users} editRow={editRow}  deleteUser={deleteUser}/>
    <button className="btn btn-warning" onClick = {somme()}>TOTAL</button>

    </div>
  )
  
}

export default App