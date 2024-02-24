import Slider from "@material-ui/core/Slider";
import { makeStyles } from "@material-ui/core/styles";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  deleteFromNoteArray,
  doneNoteArray,
  editNoteArray,
  toggleEditMode,
  toggleImportant,
  togglePercentage,
} from "./actions";

const useStyles = makeStyles({
  root: {
    width: 150,
  },
});

const Note = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [currentEditedNote, setCurrentEditedNote] = useState(props.text);

  const valueLabelFormat = (value) => `${value}%`;

  const saveAndExit = () => {
    if (currentEditedNote) {
      dispatch(editNoteArray(props.id, currentEditedNote));
    }
    dispatch(toggleEditMode(props.id));
  };

  const handleToggleImportant = () => {
    dispatch(toggleImportant(props.id));
  };

  const handleTogglePercentage = () => {
    dispatch(togglePercentage(props.id));
  };

  const handleCurrentEditedNote = (event) => {
    setCurrentEditedNote(event.target.value);
  };

  const handleDeleteFromNoteArray = () => {
    dispatch(deleteFromNoteArray(props.id));
  };

  const handleDoneNoteArray = () => {
    dispatch(doneNoteArray(props.id));
  };

  return (
    <div
      className="note"
      style={
        props.important
          ? { backgroundColor: "#ffc6c4" }
          : { backgroundColor: "white" }
      }
    >
      {props.editMode && (
        <button className="note--important" onClick={handleToggleImportant}>
          ❗
        </button>
      )}

      {!props.editMode ? (
        <p
          className="note--text"
          style={{ textDecoration: props.done ? "line-through" : "none" }}
        >
          {props.text}
        </p>
      ) : (
        <input
          className="note--editInput"
          onChange={handleCurrentEditedNote}
          value={currentEditedNote}
          placeholder={currentEditedNote}
        />
      )}

      {props.editMode && (
        <button className="note--percentage" onClick={handleTogglePercentage}>
          %
        </button>
      )}

      {!props.done && !props.editMode && (
        <button className="note--done" onClick={handleDoneNoteArray}>
          ✅
        </button>
      )}

      {!props.done && (
        <button className="note--editAndSave" onClick={saveAndExit}>
          {!props.editMode ? "🖊" : "💾"}
        </button>
      )}

      <button className="note--delete" onClick={handleDeleteFromNoteArray}>
        ❌
      </button>

      {props.percentage && (
        <Slider
          className={classes.root}
          aria-label="Percentage done"
          defaultValue={0}
          getAriaValueText={valueLabelFormat}
          valueLabelDisplay="on"
          step={5}
          min={0}
          max={100}
        />
      )}
    </div>
  );
};

export default Note;
