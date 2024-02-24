import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToNoteArray, updateCurrentNote } from "./actions";

const CurrentNote = () => {
  const dispatch = useDispatch();
  const currentNote = useSelector((state) => state.currentNote);

  const handleChange = useCallback(
    (event) => {
      dispatch(updateCurrentNote(event.target.value));
    },
    [dispatch]
  );

  const handleAddToNoteArray = useCallback(() => {
    dispatch(addToNoteArray(currentNote.text));
    dispatch(updateCurrentNote(""));
  }, [currentNote.text, dispatch]);

  const handleKeyDown = useCallback(
    (event) => {
      if (event.key === "Enter") {
        handleAddToNoteArray();
      }
    },
    [handleAddToNoteArray]
  );

  return (
    <div className="currentNote">
      <input
        className="currentNote--input"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        value={currentNote.text}
      />
      <button className="currentNote--button" onClick={handleAddToNoteArray}>
        ADD
      </button>
    </div>
  );
};

export default CurrentNote;
