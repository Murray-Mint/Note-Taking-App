import React, { useState } from "react";

// recieve props from addNote
function CreateArea(props) {
  // set stateful const that is an object
  // keeps track of title and content
  const [note, setNote] = useState({
    // initial state
    title: "",
    content: "",
  });

  // handleChange will recieve an event when it is triggered
  function handleChange(event) {
    // destructure the event so that we can get hold of event.target.name+value
    // destructured object
    // name and value can now be used as seperate consts
    const { name, value } = event.target;

    // add to note
    // recieves previous note
    setNote((prevNote) => {
      // add to existing note
      return {
        // spreads all key value pairs and adds to final object
        ...prevNote,
        // adds new name and value
        // [] changes from string to actual value
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    // calls onAdd from App.jsx through props
    // pass over current created note
    props.onAdd(note);
    // clears input after clicking add
    setNote({
      title: "",
      content: "",
    });
    // prevents page from reloading
    event.preventDefault();
  }

  return (
    <div>
      <form className="create-note">
        {/* inputs controlled through value={} */}
        {/* update inputs when changed through onChange */}
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows="3"
        />
        {/* pass function to button to be triggered */}
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
