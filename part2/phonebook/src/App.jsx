import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setNewFilter] = useState('')

  
  const handleNewName = (event) => {
    setNewName(event.target.value)
  }
  const handleNewNumber = (event) => {
    setNewNumber(event.target.value)
  }
  const handleNewFilter = (event) =>
  {
    setNewFilter(event.target.value)
  }
  const handleNewPerson = (event) => {
    event.preventDefault()
    const newNameObject = {
      name: newName,
      number: newNumber
    }
  const duplicate = persons.some(person => newName === person.name) 
  ? alert(`${newName} is already added to phonebook`) 
  :setPersons(persons.concat(newNameObject))
  }
  const numbersToShow = persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          filter shown with: <input value = {filter} onChange = {handleNewFilter} />
        </div>
        <div>
          name: <input value = {newName} onChange = {handleNewName} />
        </div>
        <div>
          number: <input value = {newNumber} onChange = {handleNewNumber} />
        </div>
        <div>
          <button onClick = {handleNewPerson} type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      { numbersToShow.map(person => 
        <p key = {person.name}>{person.name} {person.number}</p>
      )}
      
    </div>
  )
}

export default App
