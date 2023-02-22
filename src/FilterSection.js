import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  showAllNotes,
  showFinishedNotes,
  showUnfinishedNotes,
} from "./actions";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

class FilterSection extends Component {
  state = {
    anchorEl: null,
    selectedOption: "ALL",
  };

  render() {
    const { anchorEl, selectedOption } = this.state;
    return (
      <div className="filterSection">
      <h4>Filter:</h4>
        <Button
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={(event) => this.setState({ anchorEl: event.currentTarget })}
        >
          {selectedOption}
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={() => this.setState({ anchorEl: null })}
        >
          <MenuItem
            onClick={() => {
              this.setState({ selectedOption: "ALL", anchorEl: null });
              this.props.showAllNotes();
            }}
          >
            ALL
          </MenuItem>
          <MenuItem
            onClick={() => {
              this.setState({ selectedOption: "FINISHED", anchorEl: null });
              this.props.showFinishedNotes();
            }}
          >
            FINISHED
          </MenuItem>
          <MenuItem
            onClick={() => {
              this.setState({ selectedOption: "UNFINISHED", anchorEl: null });
              this.props.showUnfinishedNotes();
            }}
          >
            UNFINISHED
          </MenuItem>
        </Menu>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      showAllNotes,
      showFinishedNotes,
      showUnfinishedNotes,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(FilterSection);
