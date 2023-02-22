import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { deleteFromNoteArray, doneNoteArray, editNoteArray } from "./actions";

class Note extends Component {
  state = {
    editMode: false,
    currentEditedNote: "",
  };

  toggleEditMode = () => {
    console.log("here");
    this.setState((prevState) => {
      return { editMode: !prevState.editMode };
    });
  };

  saveAndExit = () => {
    if (this.state.currentEditedNote) {
      this.props.editNoteArray(this.props.id, this.state.currentEditedNote);
    }

    this.toggleEditMode();
    console.log("here");
  };

  handleCurrentEditedNote = (event) => {
    this.setState({ currentEditedNote: event.target.value });
    console.log(this.state.currentEditedNote);
  };

  handleDeleteFromNoteArray = () => {
    this.props.deleteFromNoteArray(this.props.id);
  };

  handleDoneNoteArray = () => {
    this.props.doneNoteArray(this.props.id);
  };

  render() {
    return (
      <div className="note">

        {/* text and edit input */}
        {!this.state.editMode ? (
          <p
            className="note--text"
            style={{
              textDecoration: this.props.done ? "line-through" : "none",
            }}
          >
            {" "}
            {this.props.text}{" "}
          </p>
        ) : (
          <input
            className="note--editInput"
            onChange={this.handleCurrentEditedNote}
            value={this.state.currentEditedNote}
          ></input>
        )}

        {/* done btn */}
        {!this.props.done && !this.state.editMode && (
          <button className="note--done" onClick={this.handleDoneNoteArray}>
            ✅
          </button>
        )}

        {/* save and edit btn  */}
        {!this.props.done && (
          <button className="note--editAndSave" onClick={this.saveAndExit}>
            {!this.state.editMode ? "🖊" : "💾"}
          </button>
        )}

        {/* delete btn */}
        <button
          className="note--delete"
          onClick={this.handleDeleteFromNoteArray}
        >
          ❌
        </button>

        </div>
    );
  }
}

const mapStateToProps = (state) => ({
  noteArray: state.noteArray,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      deleteFromNoteArray,
      editNoteArray,
      doneNoteArray,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Note);
