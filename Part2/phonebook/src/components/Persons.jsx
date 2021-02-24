import React from "react";

const Persons = ({persons}) => (
     persons.map((person) => (
        <p key={person.id}>{person.name}  {person.phone}</p>
      ))
);

export default Persons;
