import {useEffect, useState } from 'react'
import Display from './components/Display'
import Field from './components/Field'
import Form from './components/Form'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setNewFilter] = useState('')

  useEffect(() => {
    axios.get('http://localhost:3001/persons')
    .then(response => {
      setPersons(response.data)
    }
  )}, 
  [])
  

  
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
      <Form onClick={handleNewPerson} filter={filter} handleNewFilter={handleNewFilter} newName={newName} handleNewName={handleNewName} newNumber={newNumber} handleNewNumber={handleNewNumber} />
      <h2>Numbers</h2>
      <Display persons = {numbersToShow} />
      
    </div>
  )
}

export default App
