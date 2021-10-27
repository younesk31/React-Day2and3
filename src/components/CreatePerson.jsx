import React, { useState } from "react";
const CreatePerson = (props) => {
  const [person, setPerson] = useState([]);
  return (
    <>
      <input
        type="text"
        value={person}
        placeholder="Indtast navn på person"
        onChange={(evt) => setPerson(evt.target.value)}
      />
      <button onClick={() => props.newperson(person)}>Enter</button>
      <p>{JSON.stringify(person)}</p>
    </>
  );
};

export default CreatePerson;
