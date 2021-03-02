import React, { useState, useEffect } from "react";
import Input from "./components/Input";
import Form from "./components/Form";
import Persons from "./components/Persons";
import Message from "./components/Message"
import "./App.css";
import personService from "./services/names.service";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [filterValue, setFilterValue] = useState("");
  const [showMessage,setShowMessage]= useState(null)
  const [typeMessage,setTypeMessage]= useState("success")

  useEffect(() => {
    personService.getAllNames().then((res) => {
      setPersons(res.data);
      setNewName("");
    });
  }, []);

 

  function handleSubmit(e) {
    const maxID=(persons.map((person) => person.id))
    e.preventDefault();
    const personObject = {
      name: newName,
      id: Math.max(...maxID) + 1,
      number: newPhone,
    };
    const nameExists = persons.find((person) => person.name === newName);
    if (newPhone !== "" && newName !== "") {
      if (nameExists!== undefined) {
        const toUpdate ={...nameExists, number: newPhone}
         personService.updateName(Number(nameExists.id), toUpdate).then(()=>{
          setPersons(persons.map(person=>person.name===toUpdate.name?toUpdate:person))
          setShowMessage("Número editado correctamente")
          setTypeMessage("success")

        }).catch(()=>{
          setShowMessage("El número que trató de editar ya no existe, recargue la página.")
          setTypeMessage("error")
        }); 
      } else {
        if (!isNaN(newPhone)) {
          setPersons([...persons, personObject]);
          personService.addName(personObject).then((res) => {
            setPersons([...persons, res.data]);
            setNewName("");
            setShowMessage("Número agregado correctamente")
            setTypeMessage("success")

           
          });
        } else {
          alert("Por favor ingrese un número válido.");
        }
      }
      setTimeout(()=>{
        setShowMessage(null)
      },2000)
    } else {
      alert("Por favor llene todos los campos.");
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
  function handleFilterInput(e) {
    setFilterValue(e.target.value);
  }
  function handleDelete(e) {
    const id = e.target.parentNode.getAttribute("data-id");
    const name = e.target.parentNode.getAttribute("data-name");
    const confirm = window.confirm(`Do you wanna delete ${name}?`)
    if(confirm){
      personService.deleteName(Number(id))
    const newPersons = persons.filter((person) => person.id !== Number(id));
    setPersons(newPersons);
    setShowMessage("Número eliminado correctamente")
    setTypeMessage("error")

    setTimeout(()=>{
      setShowMessage(null)

    },2000)

    }
    
  }

   const filtPersons = persons.filter((person) =>
    person.name.includes(filterValue)
  );
   

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        <Input
          labelText="Filter Show with"
          handleFunction={handleFilterInput}
          value={filterValue}
        ></Input>
      </div>
      <Form
        handNameInput={handNameInput}
        handlePhoneInput={handlePhoneInput}
        handleSubmit={handleSubmit}
        valueName={newName}
        valuePhone={newPhone}
      ></Form>
      <Message message={showMessage} type={typeMessage}></Message>
      <h2>Numbers</h2>
      <Persons persons={filtPersons} handleDelete={handleDelete}></Persons>
    </div>
  );
};

export default App;
