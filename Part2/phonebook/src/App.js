import React, { useState } from "react";
import reactDom from "react-dom";
import "./App.css";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas", id: 1, phone:"123456"}]);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    console.log("clicked");
    const personObject = {
      name: newName,
      id: persons.length + 1,
      phone:newPhone
    };
    const nameExists = persons.find((person) => person.name === newName);
    if(newPhone!== '' && newName!== ''){
      if (nameExists) {
        alert(`${newName} already exist.`);
      } else {
        if(!isNaN(newPhone)){
          setPersons([...persons, personObject]);
        }else{
          alert("Por favor ingrese un número válido.")
        }
        
      }

    }else{
      alert("Por favor llene todos los campos.")
    }
    

    setNewName("");
    setNewPhone("");
  }
  function handNameInput(e) {
    setNewName(e.target.value);
  }
  function handlePhoneInput(e) {
    setNewPhone(e.target.value);
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          Name: <input onChange={handNameInput} value={newName} />
        </div>
        <div>
          Phone: <input onChange={handlePhoneInput} value={newPhone} />
        </div>
        <div>
          <button type="submit" onClick={handleSubmit}>
            add
          </button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) => (
        <p key={person.id}>{person.name} --- {person.phone}</p>
      ))}
    </div>
  );
};

export default App;
