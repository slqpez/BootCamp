import React, { useState, useEffect } from "react";
import personService from "../services/names.service";

const  Persons =  ({ persons, handleDelete }) => {
  const [personFromComp, setPersonFromComp] =  useState([persons]);
  /* function handleDelete(e, id) {
    e.preventDefault();
    personService.deleteName(id);
    const newPersons = personFromComp.filter(person=>person.id===id)
    //setPersonFromComp([newPersons])

    
  } */
  return(
    persons.map(person=>{
      return(
        <div data-id={person.id} style={{ marginBottom: "1em" }} key={person.id}>
        <p style={{ display: "inline", marginRight: "1em" }}>
          <strong>{person.name}</strong> {person.number}
        </p>
        <button
          onClick={handleDelete}
          style={{ background: "red", color: "white" }}
        >
          Delete
        </button>
      </div>
      )
    })
  )

  
};

export default Persons;
