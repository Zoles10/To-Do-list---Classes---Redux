import React, {Component} from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addToNoteArray, updateCurrentNote } from './actions';

class CurrentNote extends Component {

    handleChange = (event) => {
        this.props.updateCurrentNote(event.target.value)
    }

    handleAddToNoteArray = () => {
        this.props.addToNoteArray(this.props.currentNote.text);
    }

    render(){
        return <div className='currentNote'>

            <input className='currentNote--input' onChange={this.handleChange} ></input>
            <button className='currentNote--button' onClick={this.handleAddToNoteArray}>ADD</button>
        </div>
    }
}

const mapStateToProps = (state) => ({
    // map your Redux state to props
    // e.g. counter: state.counter
        currentNote: state.currentNote,
        noteArray : state.noteArray
  });
  
  const mapDispatchToProps = (dispatch) => 
  bindActionCreators(
    {
        updateCurrentNote,
        addToNoteArray
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(CurrentNote);