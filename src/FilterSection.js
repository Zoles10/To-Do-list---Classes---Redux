import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  showAllNotes,
  showFinishedNotes,
  showUnfinishedNotes,
} from "./actions";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

const FilterSection = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedOption, setSelectedOption] = useState("ALL");
  const dispatch = useDispatch();

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (filterOption) => {
    setSelectedOption(filterOption);
    setAnchorEl(null);

    switch (filterOption) {
      case "ALL":
        dispatch(showAllNotes());
        break;
      case "FINISHED":
        dispatch(showFinishedNotes());
        break;
      case "UNFINISHED":
        dispatch(showUnfinishedNotes());
        break;
      default:
        break;
    }
  };

  return (
    <div className="filterSection">
      <h4>Filter:</h4>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={(event) => setAnchorEl(event.currentTarget)}
      >
        {selectedOption}
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={() => handleMenuItemClick("ALL")}>ALL</MenuItem>
        <MenuItem onClick={() => handleMenuItemClick("FINISHED")}>
          FINISHED
        </MenuItem>
        <MenuItem onClick={() => handleMenuItemClick("UNFINISHED")}>
          UNFINISHED
        </MenuItem>
      </Menu>
    </div>
  );
};

export default FilterSection;
