import React, { useState, useEffect} from "react";
import Input from "./components/Input"
import Form from "./components/Form"
import Persons from "./components/Persons"
import axios from "axios"
import "./App.css";
import personService from "./services/names.service"

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [filterValue, setFilterValue] = useState("");

  useEffect(()=>{
    personService.getAllNames().then(res=>{
      setPersons(res.data)
      setNewName("")
    })
    },[])
 
 


  function handleSubmit(e) {
    e.preventDefault();
    const personObject = {
      name: newName,
      id: persons.length + 1,
      number:newPhone
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
    personService.addName(personObject).then(res=>{
      setPersons([...persons, res.data])
      setNewName("")
    })
    

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
