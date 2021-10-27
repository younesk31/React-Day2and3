import "./App.css";
import React, { useState } from "react";
import CreatePerson from "./components/CreatePerson";
import PersonList from "./components/PersonList";

const App = () => {
  const [person, setPerson] = useState([]);

  const toPerson = (person) => {
    setPerson(person);
    setSavedPerson([...savedperson, person]);
  };

  const [savedperson, setSavedPerson] = useState([]);

  return (
    <>
      <CreatePerson newperson={toPerson} />
      <PersonList personlist={savedperson} />
    </>
  );
};

export default App;
