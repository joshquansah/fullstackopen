import {useEffect, useState } from 'react'
import Display from './components/Display'
import Form from './components/Form'
import axios from 'axios'
import phonebook from './services/phonebook'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setNewFilter] = useState('')

  useEffect(() => {
    phonebook.getAll()
    .then(allNotes => {
      setPersons(allNotes)
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
  if(persons.some(person => newName === person.name)){
    const id = persons[persons.findIndex(person => person.name === newName)].id
    if(window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)){
      phonebook
      .update(id, newNameObject)
      .then(newNum => {
      setPersons(persons.map(person => person.id == id ? newNum : person))
      setNewName('')
      setNewNumber('')
    }
    )
    }
    }
    else{
      phonebook.create(newNameObject)
    .then(addedName => {
      setPersons(persons.concat(addedName))
      setNewName('')
      setNewNumber('')
    }
    )
    }

  } 
  
  
  const removePerson = (e) => {
    e.preventDefault()
    if(window.confirm(`Delete ${e.target.name} ?`)){
    phonebook.remove(e.target.value)
    .then(setPersons(persons.filter(person => person.id !== e.target.value)))
    }
  }
  const numbersToShow = persons.filter(person => person && person.name.toLowerCase().includes(filter.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>
      <Form onClick={handleNewPerson} filter={filter} handleNewFilter={handleNewFilter} newName={newName} handleNewName={handleNewName} newNumber={newNumber} handleNewNumber={handleNewNumber} />
      <h2>Numbers</h2>
      <Display persons = {numbersToShow} onClick={removePerson}/>
      
    </div>
  )
}

export default App
