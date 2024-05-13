import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  // state for note array
  const [notes, setNotes] = useState([]);

  // recieves note object from CreateArea.jsx
  // newNote value is being passed from props.onAdd(note) from CreateArea.jsx
  function addNote(newNote) {
    // add to notes array
    // prevNotes is the previous value of the array
    setNotes((prevNotes) => {
      // setNotes gets an array being returned to new notes array
      return [...prevNotes, newNote];
    });
  }

  // need id of note that wants to be deleted
  // function passed to each note that gets rendered as a prop
  function deleteNote(id) {
    // prevNotes gives access to all notes in the notes array
    setNotes((prevNotes) => {
      // loop through with filter function
      // (value currently looping through in array, index of this item, )
      // return to set it as the new notes array
      return prevNotes.filter((noteItem, index) => {
        // return all of the notes where the index does not equal id of the note that needs to be deleted
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea
        // prop for CreateArea
        onAdd={addNote}
      />
      {/* map through notes array to render different note component for each item inside the array */}
      {notes.map((noteItem, index) => {
        return (
          <Note
            // pass over index of noteItem from notes array
            // to pick up inside Note component
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            // pass delete note function over to Note.jsx
            onDelete={deleteNote}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
