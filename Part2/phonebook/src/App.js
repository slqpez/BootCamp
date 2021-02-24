import React, { useState } from 'react'
import './App.css';

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas',
  id:1 }
  ]) 
  const [ newName, setNewName ] = useState('')
   function handleSubmit(e){
     e.preventDefault()
     console.log('clicked')
     const personObject={
       name:newName,
       id:persons.length +1


     }
     setPersons([...persons, personObject])
     setNewName('')
     
   }
   function handleInput(e){
    setNewName(e.target.value)
   }
  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input onChange={handleInput} value={newName}/>
        </div>
        <div>
          <button type="submit" onClick={handleSubmit}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person=><p key={person.id}>{person.name}</p>)}
    </div>
  )
}

export default App;
