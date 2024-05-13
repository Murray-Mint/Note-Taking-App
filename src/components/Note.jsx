import React from "react";

function Note(props) {
  // triggers function passed over from props that deletes the note from the array
  function handleClick() {
    // passed over from App.jsx
    // triggers onDelete()
    // props.id passed over App.jsx
    props.onDelete(props.id);
  }
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>Delete</button>
    </div>
  );
}

export default Note;
