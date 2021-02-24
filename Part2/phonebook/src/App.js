import React, { useState } from "react";
import Input from "./components/Input"
import Form from "./components/Form"
import Persons from "./components/Persons"
import "./App.css";

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phone: '040-123456', id:1 },
    { name: 'Ada Lovelace', phone: '39-44-5323523', id:2 },
    { name: 'Dan Abramov', phone: '12-43-234345', id:3 },
    { name: 'Mary Poppendieck', phone: '39-23-6423122' ,id:4}
  ])
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [filterValue, setFilterValue] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
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
  function handleFilterInput(e){
    setFilterValue(e.target.value)
  }

  const filtPersons =persons.filter(person=>person.name.includes(filterValue))

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
       <Input labelText="Filter Show with" handleFunction={handleFilterInput} value={filterValue}></Input>
      </div>
      <Form handNameInput={handNameInput} handlePhoneInput={handlePhoneInput} handleSubmit={handleSubmit} valueName={newName} valuePhone={newPhone}></Form>
      
      <h2>Numbers</h2>
       <Persons persons={filtPersons}></Persons>
    </div>
  );
};

export default App;
