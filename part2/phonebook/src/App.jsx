import {useEffect, useState } from 'react'
import Display from './components/Display'
import Form from './components/Form'
import Notificaton from './components/Notification'
import Error from './components/Error'
import './index.css'
import phonebook from './services/phonebook'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setNewFilter] = useState('')
  const [notification, setNotification] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)

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
      setNotification(`Replaced ${newName}'s number`)
      setTimeout(() => {
          setNotification(null)
        }, 5000)
    }).catch(error => {
      setErrorMessage(`Information of ${newName} has already been removed from server`
      )
      setTimeout(() => {
          setErrorMessage(null)
        }, 5000)
      setNotes(persons.filter(n => n.id !== id))
    })
    }
    }
    else{
      phonebook.create(newNameObject)
    .then(addedName => {
      setPersons(persons.concat(addedName))
      setNewName('')
      setNewNumber('')
      setNotification(`Added ${newName}`)
      setTimeout(() => {
          setNotification(null)
        }, 5000)
    }
    )
    }

  } 
  
  
  const removePerson = (e) => {
    e.preventDefault()
    if(window.confirm(`Delete ${e.target.name} ?`)){
    phonebook.remove(e.target.value)
    .then(() => {
    setPersons(persons.filter(person => person.id !== e.target.value))
    setErrorMessage(`Removed ${e.target.name}`)
      setTimeout(() => {
          setErrorMessage(null)
        }, 5000)
      }
  )
}
  }
  const numbersToShow = persons.filter(person => person && person.name.toLowerCase().includes(filter.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>
      <Notificaton message={notification} />
      <Error warning={errorMessage} />
      <Form onClick={handleNewPerson} filter={filter} handleNewFilter={handleNewFilter} newName={newName} handleNewName={handleNewName} newNumber={newNumber} handleNewNumber={handleNewNumber} />
      <h2>Numbers</h2>
      <Display persons = {numbersToShow} onClick={removePerson}/>
      
    </div>
  )
}

export default App
