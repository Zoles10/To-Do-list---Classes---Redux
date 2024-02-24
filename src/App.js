import React from "react";
import CurrentNote from "./CurrentNote";
import FilterSection from "./FilterSection";
import NotesArray from "./NotesArray";

const App = () => {
  return (
    <div className="app">
      <span className="header">
        <CurrentNote />
        <FilterSection />
      </span>
      <NotesArray />
    </div>
  );
};

export default App;
