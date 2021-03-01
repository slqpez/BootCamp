


const  Persons =  ({ persons, handleDelete }) => {
  return(
    persons.map(person=>{
      return(
        
        <div data-id={Number(person.id)} style={{ marginBottom: "1em" }} key={person.id}>
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
