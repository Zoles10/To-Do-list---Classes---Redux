import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { deleteFromNoteArray, doneNoteArray, editNoteArray } from "./actions";
import Slider from "@material-ui/core/Slider";
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    width: 150
  }
};

class Note extends Component {
  
  valueLabelFormat = (value) => `${value}%`;

  state = {
    editMode: false,
    percentage: false,
    currentEditedNote: "",
  };

  toggleEditMode = () => {
    console.log("here");
    this.setState((prevState) => {
      return { editMode: !prevState.editMode };
    });
  };

  togglePercentage = () => {
    console.log("here");
      this.setState((prevState) => {
        return {percentage: !prevState.percentage}
      });
      this.toggleEditMode();
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
    const { classes } = this.props;

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

        {/* percentage toggle */}
        {this.state.editMode && <button onClick={this.togglePercentage}>%</button>}

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
        {this.state.percentage && <Slider
              classes={{
                   root: classes.root
            }}
            className="slider"
            aria-label="Percentage done"
            defaultValue={0}
            
            getAriaValueText={this.valueLabelFormat}
            valueLabelDisplay="on"
            step={5}
            min={0}
            max={100}
          />}
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

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Note));
