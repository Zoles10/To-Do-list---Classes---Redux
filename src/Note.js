import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { deleteFromNoteArray, doneNoteArray, editNoteArray, togglePercentage, toggleImportant, toggleEditMode } from "./actions";
import Slider from "@material-ui/core/Slider";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  root: {
    width: 150,
  },
};

class Note extends Component {
  valueLabelFormat = (value) => `${value}%`;

  state = {
    currentEditedNote: this.props.text,
  };

  saveAndExit = () => {
    if (this.state.currentEditedNote) {
      this.props.editNoteArray(this.props.id, this.state.currentEditedNote);
    }

    this.props.toggleEditMode(this.props.id);
  };

  handleToggleImportant = () =>{
    this.props.toggleImportant(this.props.id);
  }

  handleTogglePercentage = () =>{
    this.props.togglePercentage(this.props.id);
  }

  handleCurrentEditedNote = (event) => {
    this.setState({ currentEditedNote: event.target.value });
  };

  handleDeleteFromNoteArray = () => {
    this.props.deleteFromNoteArray(this.props.id);
  };

  handleDoneNoteArray = () => {
    this.props.doneNoteArray(this.props.id);
  };

  render() {
    const { classes } = this.props;

    return (
      <div
        className="note"
        style={
          this.props.important
            ? { backgroundColor: "#ffc6c4" }
            : { backgroundColor: "white" }
        }
      >
        {/* importance toggle button */}
        {this.props.editMode && (
          <button className="note--important"
          onClick={this.handleToggleImportant}>❗</button>
        )}

        {/* text and edit input */}
        {!this.props.editMode ? (
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
            placeholder={this.state.currentEditedNote}
          ></input>
        )}

        {/* percentage toggle */}
        {this.props.editMode && (
          <button className="note--percentage"
          onClick={this.handleTogglePercentage}>%</button>
        )}

        {/* done btn */}
        {!this.props.done && !this.props.editMode && (
          <button className="note--done" onClick={this.handleDoneNoteArray}>
            ✅
          </button>
        )}

        {/* save and edit btn  */}
        {!this.props.done && (
          <button className="note--editAndSave" onClick={this.saveAndExit}>
            {!this.props.editMode ? "🖊" : "💾"}
          </button>
        )}

        {/* delete btn */}
        <button
          className="note--delete"
          onClick={this.handleDeleteFromNoteArray}
        >
          ❌
        </button>
        {this.props.percentage && (
          <Slider
            classes={{
              root: classes.root,
            }}
            className="slider"
            aria-label="Percentage done"
            defaultValue={0}
            getAriaValueText={this.valueLabelFormat}
            valueLabelDisplay="on"
            step={5}
            min={0}
            max={100}
          />
        )}
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
      togglePercentage, 
      toggleImportant,
      toggleEditMode
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Note));
