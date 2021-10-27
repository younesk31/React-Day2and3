import React from "react";

function PersonList(props) {
  return (
    <h2>
      {props.personlist.map((e, idx) => {
        return <ul key={idx}>{e}</ul>;
      })}
    </h2>
  );
}

export default PersonList;
