import React, { Component } from "react";
import Note from "./Note";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addToNoteArray } from "./actions";

class NoteArray extends Component {
  render() {
    const array = this.props.noteArray
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
  }
}

const mapStateToProps = (state) => ({
  // map your Redux state to props
  // e.g. counter: state.counter
  noteArray: state.noteArray,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      addToNoteArray,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(NoteArray);
