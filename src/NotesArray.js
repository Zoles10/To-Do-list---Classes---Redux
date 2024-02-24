import React from "react";
import Note from "./Note";
import { useSelector } from "react-redux";

const NoteArray = () => {
  // Access Redux state using useSelector
  const noteArray = useSelector((state) => state.noteArray);

  const array = noteArray
    .filter((note) => note.show)
    .map((note) => (
      <Note
        text={note.text}
        key={note.id}
        id={note.id}
        done={note.done}
        editMode={note.editMode}
        important={note.important}
        percentage={note.percentage}
      />
    ));

  return (
    <div className="noteArray">
      {!array[0] && (
        <h1 className="noteArray--h1" style={{ color: "#d3d3d3" }}>
          Add a note...
        </h1>
      )}
      {array}
    </div>
  );
};

export default NoteArray;
