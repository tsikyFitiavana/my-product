import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import TableProduits from './Components/TableProduits'
import AddProduitForm from './Components/AddProduitForm'
import EditProduitForm from './Components/EditProduit'
import './App.css'

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
  return (
    <div className="container">
      
        {editing ? (
          <div id="parentPop_up">
          <div id="pop_up">
          <EditProduitForm
            editing={editing}
            setEditing={setEditing}
            currentUser={currentUser}
            updateUser={updateUser}
          />
          </div>
          </div>
          
          ):
          (
          <AddProduitForm addUser={addUser} setCount={setCount} count={count}/>
    )}

          <TableProduits users={users} editRow={editRow}  deleteUser={deleteUser}/>
    <button className="btn btn-warning">TOTAL</button>
    <div><p>TOTAL =<span></span>Ar </p></div>

    </div>
  )
  
}

export default App