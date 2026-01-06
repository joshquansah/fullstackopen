import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  
  const handleNewName = (event) => {
    setNewName(event.target.value)
  }
  const handleNewPerson = (event) => {
    event.preventDefault()
    const newNameObject = {
      name: newName
    }
  const duplicate = persons.some(person => newName === person.name) 
  ? alert(`${newName} is already added to phonebook`) 
  :setPersons(persons.concat(newNameObject))
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input value = {newName} onChange = {handleNewName} />
        </div>
        <div>
          <button onClick = {handleNewPerson} type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => 
        <p key = {person.name}>{person.name}</p>
      )}
    </div>
  )
}

export default App
